---
title: "AtomicPulse: análisis y explicación del data pipeline"
description: "Explicación y recuperación de conceptos laguna para mi proyecto Atomic Pulse."
pubDate: "2026-03-27"
categories: ["Python", "Ingeniería de Datos", "API"] 
draft: false
---
#### Requerimentos: Construir un sistema de procesamiento de datos que extraiga los datos de interrupciones nucleares de la API de la EIA, los almacene de manera eficiente y proporcione capacidades básicas de análisis y consulta.

Recordando que esta sección también me es útil para estudio propio, quiero utilizar este post para dos objetivos:
-  Despejar aquellas lagunas que me quedaron al construir este proyecto
-  Dar una descripción más robusta sobre el análisis técnico y decisiones que tomé para este mismo.

Dividiré el análisis en 4 módulos (así se me asignaron en los requerimentos del proyecto) para abordarlo de forma más organizada.

---

## 1: Conector de Datos
**Objetivo**: Crear un conector que extraiga datos de interrupciones nucleares de la API de la EIA.

### Decisiones Técnicas
- **Resiliencia de red**: Desde mi experiencia en QA, se que un sistema no debe detenerse por errores transitorios en los servidores de origen. Por ello, utilicé la librería `requests` combinada con la estrategia `Retry` de `urllib3`. Esto permite que el conector maneje excepciones temporales (como errores 502 o 503) y limites de tasa (429) reintentando la conexión antes de fallar por completo.
- **Carga Incremental**: En lugar de realizar una extracción histórica completa (*Full Load*) en cada ejecución, implemente una lógica para leer la última fecha registrada en el almacenamiento local (`get_latest_date()`). De este modo, el script solo solicita los registros nuevos, optimizando drásticamente el uso de ancho de banda y el tiempo de ejecución.

- **Almacenamiento en Parquet**: Parte de los requerimentos es almacenar la información extraída en archivos Parquet. Parquet, al ser orientado a almacenamiento columnar y salida binaria, es altamente eficiente para consultas grandes, pues hace uso de un menor almacenamiento y sus consultas analiticas son más rápidas al solo leer las columnas necesarias.

---

## 2: Modelo de Datos
**Objetivo**: Estructurar los datos eficientemente para su consulta analítica.

### Decisiones Técnicas
- **Esquema Estrella (Star Schema)**: Otro de los requerimentos era seguir el Esquema Estrella para la construcción de la base de datos. ¿Por qué?, bueno, al tratar con cargas de trabajo analíticas (OLAP), la prioridad cambia drásticamente respecto a los sistemas transaccionales (OLTP). 
No se prioriza la velicidad de escritura de registros inidivuales, ni la redundancia de datos, sino que se prioriza la eficiente y velocidad al leer, filtrar y agregar grandes volúmenes de información HISTÓRICA (Data Warehouse).

- **Lógica de negocio en la transformación**: La clasificación de la severidad del corte (Critical, Warning, Nominal) la calculé en Python usando Pandas antes de la ingesta en la base de datos. Preferí aislar esta lógica en la capa de transformación en memoria.

- **SQLite como motor relacional**: Para este proyecto en particular, implementar un contenedor con PostgreSQL resultaba excesivo. SQLite me permitió tener un motor SQL transaccional rápido y autocontenido, ideal para aislar el entorno de desarrollo sin sacrificar la capacidad de ejecutar consultas complejas.

### Descripción del modelo Entidad-Relación
- **Entidades, Atributos y Relaciones**: 
  - `dim_status_thresholds` (Dimensión): Es el catálogo de reglas de negocio. Define de manera estática los rangos o umbrales que dictan si un nivel de pérdida de energía se considera "Normal", "Warning" o "Critical". Lo implementé para darle un significado más legible y humano a los datos fríos obtenidos.
    - **Atributos:** `status_id` (Primary Key), `label`, `min_percent`, `max_percent`.
    - **Relación:** 1 a N (Uno a Muchos) con la tabla de hechos. Un mismo umbral de alerta aplica para múltiples registros diarios.

  - `dim_date` (Dimensión): Es el catálogo del tiempo. Almacena la llave de la fecha y sus atributos derivados útiles para el análisis (como el nombre del día de la semana). El propósito de esta tabla es permitir filtros y agrupaciones por periodos temporales de forma rápida.
    - **Atributos:** `date_key` (Primary Key), `day_name`.
    - **Relación:** 1 a N (Uno a Muchos) con la tabla de hechos. Una fecha única puede asociarse a múltiples registros (preparando el modelo para escalar si en el futuro se requieren datos granulares por planta en lugar de nacionales).

  - `fct_nuclear_outages` (Tabla de hechos): Es el corazón analítico del modelo. Almacena esas métricas cuantitativas que cambian diariamente, como la capacidad nuclear nacional (`capacity_mw`), la cantidad exacta de energía perdida (`outage_mw`) y el porcentaje de afectación. Ésta crece constantemente en cada nueva extracción.
    - **Atributos:** `id` (Primary Key), `date_key` (Foreign Key), `status_id` (Foreign Key), `capacity_mw`, `outage_mw`, `percent_outage` (Atributo derivado).
    - **Relación:** Centraliza el modelo. Contiene las llaves foráneas que apuntan directamente a `dim_date` y `dim_status_thresholds`, cerrando así el diseño del Esquema Estrella.

### Conceptos para estudio propio (Lagunas)
- Analizar el *trade-off* de rendimiento y complejidad computacional entre realizar la limpieza masiva de datos en memoria (Pandas) versus hacerlo dentro del motor de base de datos mediante SQL puro (ETL vs. ELT). Este mismo está contemplado en los commits `14bba0a` y `19d2b23` del día 25 de marzo.

---

## 3: API
**Objetivo**: Hacer los datos accesibles mediante una arquitectura RESTful.

### Decisiones Técnicas
- **Elección de FastAPI**: Opté por FastAPI por su rendimiento y su tipado estricto a través de Pydantic. Acostumbrado a lenguajes más rígidos en la universidad, valoro que el framework valide los tipos de datos automsticamente y genere la especificación OpenAPI sin esfuerzo adicional.

- **Seguridad mediante inyección de dependencias**: Implementé un control de acceso básico (`APIKeyHeader`) utilizando el sistema `Depends()`. Esto permite proteger los endpoints desde la capa de enrutamiento, manteniendo la lógica interna de las funciones limpia e independiente de la validación de seguridad.

- **Paginación en SQL**: Para evitar saturar la memoria del servidor, la API no carga el dataset completo. La paginación se maneja directamente en la base de datos utilizando `LIMIT` y `OFFSET`, los cuales se inyectan dinámicamente en las consultas.

### Conceptos para estudio propio (Lagunas)
- El manejo interno de la concurrencia en Python. Especificamente, cómo el *Event Loop* de `asyncio` interactúa por debajo con drivers de bases de datos que son bloqueantes o síncronos por naturaleza.
---

## 4: Interfaz de Visualización de Datos
**Objetivo**: Construir un frontend web ligero que consuma la API.

### Decisiones Técnicas
En este punto, la interfaz inicial que desarrollé yo mismo fue demasiado básica, se encuentra en la versión  `/staging/1.1.0-beta` del repositorio, sin embargo, con el objetivo de darle un mejor rostro al proyecto, utilicé un prompt para un LLM, con el objetivo de que me resultara en una interfaz muchísimo más moderna (pues CSS nunca ha sido mi fuerte ni mi foco principal). La interfaz final se encuentra en producción.

---
[Repositorio](https://github.com/c4mdax/nuclear-data-pipeline/)



