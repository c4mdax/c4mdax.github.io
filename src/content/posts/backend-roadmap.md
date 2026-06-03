---
title: "Mi Roadmap de Fundamentos de Sistemas Backend"
description: "Roadmap que he estado siguiendo para mi estudio propio de sistemas backend robustos."
pubDate: "2026-05-02"
categories: ["Roadmap","Desarrollo Backend"]
draft: false
---

# Motivación

Durante mi jornada de estudio en desarrollo Backend, me he visto atorado múltiples ocasiones por no saber por dónde empezar, con qué continuar, o hacia qué enfocarme, resultando en un tipo de **procrastinación** a la que muchos nos enfrentamos. Por ello, decidí extraer de diversos recursos en línea los temas esenciales y de mayor rigor técnico para una ruta de aprendizaje sólida y de alto rendimiento en desarrollo Backend, consolidándolos en el roadmap que presento a continuación. 

**Este roadmap me sirve como estudio personal, así que esperaría tenerlo terminado dentro de 6 meses a 1 año a partir de la fecha de publicación; considéralo como mis notas de estudio.**

---

# Consideraciones

Este roadmap será consecuencia de notas de estudio propias en conjunto, por lo que omitiré el tema de fundamentos de programación. La meta es completar la mayor parte de este recorrido en un periodo aproximado de entre seis meses y un año a partir de la publicación del mismo. El contenido será desarrollado públicamente y de manera progresiva, acompañado idealmente de proyectos y documentación personal.

---

# Stack
Este roadmap contiene **fundamentos genéricos e independientes del lenguaje de programación y herramientas**, pero particularicé un stack que permita aterrizar satisfactoriamente estos fundamentos, con tal vez un poco de sesgo consecuencia de mis intereses:

- Java (lenguaje principal)
- Scala (lenguaje secundario)
- Spring Boot
- PostgreSQL
- Redis
- Kafka
- Docker
- Kubernetes
- Gradle
- Prometheus + Grafana
- ELK / Loki
- REST + gRPC
- Linux

---

# Etapa 0: Fundamentos de Programación e Introducción al desarrollo de Software

Aunque el roadmap contempla una etapa inicial dedicada a fundamentos de programación, optaré por omitirla debido a la base previamente desarrollada a lo largo de mi formación académica y experiencia acumulada hasta el momento. Sin embargo, compartiré lo que creo contempla esta etapa, esperando que este roadmap sirva para más personas:

### Fundamentos generales de programación
- Paradigmas de programación (imperativo, declarativo)
- Sintaxis y estructuras básicas
- Tipos de datos
- Variables y alcance
- Estructuras de control y condicionales 
- Funciones y modularidad
- Manejo básico de errores
- Manejo de archivos I/O
- Recursión

### Programación Orientada a Objetos 
- Clases y objetos 
- Encapsulamiento
- Herencia
- Polimorfismo
- Abstracción
- Interfaces y clases abstractas
- Principios SOLID
- Composición
- Patrones de diseño (Singleton, Factory, Observer, Strategy)

### Estructuras de Datos y Algoritmos
- ¿Qué es un algoritmo?
- Notación Big O 
- Genéricos
- Estructuras lineales: arreglos, listas, pilas, colas
- Estructuras no lineales: hashing, tablas hash, mapas hash, árboles, grafos
- Búsqueda binaria
- Algoritmos de ordenamiento
- Algoritmos de balanceo en árboles
- Algoritmos de búsqueda (BFS y DFS)
- Recursión aplicada
- Programación dinámica básica (memoización, tabulación)

### Software 
- Git y control de versiones
- Línea de comandos/terminal
- Depuración
- Testing básico

---

# Etapa 1: Fundamentos de Bases de Datos

### Conceptos Fundamentales
- ¿Qué es una base de datos y para qué sirve?
- ¿Qué es un DBMS y cuál es su rol?
- Modelos de datos: relacional, documental, clave-valor, columnar, grafo
- Diferencias entre bases de datos SQL y NoSQL
- Persistencia vs. almacenamiento en memoria
- ACID: Atomicidad, Consistencia, Aislamiento, Durabilidad
- BASE: Basically Available, Soft state, Eventual consistency
- Teorema CAP

### Diseño Conceptual: Modelo Entidad-Relación
- ¿Qué es el modelado conceptual y por qué es el primer paso?
- Entidades y atributos
- Relaciones y cardinalidad: uno a uno, uno a muchos, muchos a muchos
- Entidades débiles y dependientes
- Diagrama ER y notación crow's foot
- Diferencia entre modelo conceptual, lógico y físico

### Modelo Relacional (Modelo Lógico)
- Traducción del modelo ER al modelo relacional
- Tablas, filas y columnas
- Claves primarias y claves foráneas
- Restricciones: `NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT`
- Tablas de unión (junction tables)
- Vistas (views)
- Formas normales: 1FN, 2FN, 3FN y BCNF
- Desnormalización y cuándo aplicarla
- Diseño orientado a consultas vs. diseño orientado a escritura

### Modelo Físico e Implementación con SQL
- Tipos de datos primitivos (enteros, flotantes, cadenas, booleanos, fechas)
- DDL: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`
- DML: `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- Filtros y condiciones: `WHERE`, `BETWEEN`, `IN`, `LIKE`, `IS NULL`
- Ordenamiento y paginación: `ORDER BY`, `LIMIT`, `OFFSET`
- Agregaciones: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`
- Agrupamiento: `GROUP BY`, `HAVING`
- Joins: `INNER`, `LEFT`, `RIGHT`, `FULL OUTER`, `CROSS`, `SELF JOIN`
- Subconsultas y consultas correlacionadas
- CTEs (Common Table Expressions) con `WITH`
- Funciones de ventana: `OVER`, `PARTITION BY`, `ROW_NUMBER`, `RANK`, `LAG`, `LEAD`

### Índices
- ¿Qué es un índice y cómo mejora las consultas?
- Índices B-Tree, Hash, GIN, GiST (conceptual)
- Índices simples, compuestos y parciales
- Cuándo indexar y cuándo no
- Impacto de los índices en escrituras y almacenamiento
- `EXPLAIN` / `EXPLAIN ANALYZE` para analizar planes de ejecución

### Transacciones y Control de Concurrencia
- ¿Qué es una transacción y por qué existe?
- `BEGIN`, `COMMIT`, `ROLLBACK`
- Niveles de aislamiento: Read Uncommitted, Read Committed, Repeatable Read, Serializable
- Anomalías de concurrencia: dirty reads, non-repeatable reads, phantom reads
- Bloqueos (locks): compartidos, exclusivos, deadlocks
- Optimistic vs. Pessimistic locking
- MVCC (Multi-Version Concurrency Control): concepto general

### Fundamentos de NoSQL
- Motivaciones para NoSQL: escalabilidad horizontal, esquema flexible, alto throughput
- Bases de datos de documentos: concepto (MongoDB como referencia)
- Bases de datos clave-valor: concepto (Redis como referencia)
- Bases de datos columnares: concepto (Cassandra como referencia)
- Bases de datos de grafos: concepto (Neo4j como referencia)
- Cuándo elegir SQL vs. NoSQL

### Fundamentos de Almacenamiento y Rendimiento
- Almacenamiento en disco vs. en memoria
- Row-oriented vs. column-oriented storage
- Write-ahead log (WAL): concepto y propósito
- Buffer pool / page cache
- Conceptos de particionamiento: horizontal (sharding) y vertical
- Replicación: primary/replica, sincrónica vs. asincrónica
- Connection pooling: qué es y por qué importa

---

# Etapa 2: PostgreSQL y Persistencia

---

# Etapa 3: Computación Concurrente y fundamentos de la JVM

---

# Etapa 4: Comunicación y Redes

---

# Etapa 5: Diseño de servicios Backend

---

# Etapa 6: Testing y calidad

---

# Etapa 7: Sistemas basados en eventos

---

# Etapa 8: Computación Distribuida

---

# Etapa 9: Infraestructura y observabilidad

---

# Etapa 10: Paradigmas avanzados (Scala y Sistemas Funcionales):
