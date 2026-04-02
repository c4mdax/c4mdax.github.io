---
title: "AtomicPulse"
title_en: "AtomicPulse"
description: "Pipeline de datos para procesar cortes de energía nuclear."
description_en: "Data engineering pipeline to process nuclear power outage data."
tags: ["Python", "Data Engineering", "API"]
cover: "../../assets/projects-images/atomic-pulse.jpg"
---
# Español
### 🔘 Descripción

AtomicPulse es una herramienta que automatiza la recopilación de datos sobre fallas y mantenimientos en reactores nucleares de USA, mediante el consumo de la API de la EIA (_Energy Information Administration_) del país.

Está construido en base a un pipeline de datos de tipo **ETL** (Extract, Transform, Load), desplegado en una API para facilitar un consumo con GUI web.

[-> Sitio en vivo](atomic-pulse.onrender.com)
### 🔘 Funcionamiento
La interfaz ofrece los resultados tabulados bajo 4 parámetros:
- **Temporal index:** la fecha correspondiente al resumen de fallas y mantenimientos ocurridos en ese día.
- **Classification:** la clasificación de las fallas y mantenimientos ocurridos en ese día, teniendo 3 categorías: _Critical_, _Warning_ y _Nominal_
- **Magnitude:** la potencia eléctrica total en mw que dejó de generarse en la fecha correspondiente
- **Impact:** el porcentaje relativo de la capacidad nuclear que está fuera de servicio (pérdida en mw)

Además, el sistema ofrece:
- Actualización dinámica de los datos, mediante consulta instantánea a la API de la EIA
- Búsqueda de información mediante filtros de día, mes y año.

### 🔘 Tecnologías usadas
**Lenguajes**:
- Python, SQL, JS, HTML, CSS

**Frameworks y herramientas**:
- **Backend & APIs**: FastAPI, Pydantic, Uvicorn, RESTful APIs.
- **Extracción de datos**: Pandas, Apache Parquet (PyArrow), ETL pipelines, extracción incremental
- **Base de datos**: SQLite, SQL, Esquema Estrella ER (Data Warehouse)
- **DevOps y despliegue**: Render, Git/GitHub, .env, logging
- **Testing**: Pytest
- **Frontend**: JavaScript (Vanilla), CSS3, HTML5
___

# English
### 🔘 Overview

AtomicPulse is a tool that automates the collection of data regarding outages and maintenance in US nuclear reactors by consuming the country's EIA (Energy Information Administration) API.

It is built upon an **ETL** (Extract, Transform, Load) data pipeline, deployed as an API to facilitate consumption through a web GUI.

[-> Live Site](https://atomic-pulse.onrender.com)

### 🔘 How it Works
The interface provides tabulated results based on 4 parameters:
- **Temporal index:** The date corresponding to the summary of outages and maintenance that occurred on that day.
- **Classification:** The classification of the outages and maintenance for that day, divided into 3 categories: *Critical*, *Warning*, and *Nominal*.
- **Magnitude:** The total electrical power in Megawatts (MW) that was lost on the corresponding date.
- **Impact:** The relative percentage of nuclear capacity that is offline (loss in MW).

Additionally, the system features:
- Dynamic data updates via real-time queries to the EIA API.
- Information retrieval using day, month, and year filters.

### 🔘 Technologies Used
**Languages**:
- Python
- SQL

**Frameworks & Tools**:
- **Backend & APIs**: FastAPI, Pydantic, Uvicorn, RESTful APIs.
- **Data Extraction**: Pandas, Apache Parquet (PyArrow), ETL pipelines, incremental extraction.
- **Database**: SQLite, SQL, Star Schema ER (Data Warehouse).
- **DevOps & Deployment**: Render, Git/GitHub, .env, logging.
- **Testing**: Pytest.
- **Frontend**: JavaScript (Vanilla), CSS3, HTML5.
