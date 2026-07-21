---
title: "Roadmap de Fundamentos de Sistemas Backend y Sistemas Distribuidos"
description: "Roadmap completo sobre sistemas y arquitectura backend, mediante el stack JVM."
pubDate: "2026-06-15"
categories: ["Roadmap","Desarrollo Backend"]
draft: false
isBlog: false
---

## Motivación

Durante mi jornada de estudio en desarrollo Backend, me he visto atorado múltiples ocasiones por no saber por dónde empezar, con qué continuar, o hacia qué enfocarme, resultando en un tipo de **procrastinación** a la que muchos nos enfrentamos. Por ello, decidí extraer de diversos recursos en línea los temas esenciales y ricos en teoría y práctica, para una ruta de aprendizaje sólida y de alto rendimiento en desarrollo Backend, consolidándolos en el roadmap que presento a continuación.

_Este roadmap es producto de un par de meses de recopilación, desde múltiples recursos en línea (libros, videos, temarios), hasta foros y el mismo plan de estudio de mi licenciatura._

---

## Stack
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

## Etapa 0: Fundamentos de Programación e Introducción al desarrollo de Software

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
- ¿Que es un algoritmo?
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

## Etapa 1: Fundamentos de Bases de Datos

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
- Restricciones: NOT NULL, UNIQUE, CHECK, DEFAULT
- Tablas de unión (junction tables)
- Vistas (views)
- Formas normales: 1FN, 2FN, 3FN y BCNF
- Desnormalización y cuándo aplicarla
- Diseño orientado a consultas vs. diseño orientado a escritura

### Modelo Físico e Implementación con SQL
- Tipos de datos primitivos (enteros, flotantes, cadenas, booleanos, fechas)
- DDL: CREATE, ALTER, DROP, TRUNCATE
- DML: SELECT, INSERT, UPDATE, DELETE
- Filtros y condiciones: WHERE, BETWEEN, IN, LIKE, IS NULL
- Ordenamiento y paginación: ORDER BY, LIMIT, OFFSET
- Agregaciones: COUNT, SUM, AVG, MIN, MAX
- Agrupamiento: GROUP BY, HAVING
- Joins: INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF JOIN
- Subconsultas y consultas correlacionadas
- CTEs (Common Table Expressions) con WITH
- Funciones de ventana: OVER, PARTITION BY, ROW_NUMBER, RANK, LAG, LEAD

### Índices
- ¿Qué es un índice y cómo mejora las consultas?
- Índices B-Tree, Hash, GIN, GiST (conceptual)
- Índices simples, compuestos y parciales
- Cuándo indexar y cuándo no
- Impacto de los índices en escrituras y almacenamiento
- EXPLAIN / EXPLAIN ANALYZE para analizar planes de ejecución

### Transacciones y Control de Concurrencia
- ¿Qué es una transacción y por qué existe?
- BEGIN, COMMIT, ROLLBACK
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

## Etapa 2: PostgreSQL y Persistencia

### Introducción a PostgreSQL
- ¿Por qué PostgreSQL? Historia y casos de uso
- Instalación y configuración inicial
- Herramientas: psql, pgAdmin, DBeaver
- Estructura interna: databases, schémas, roles
- Archivos de configuración: postgresql.conf, pg_hba.conf
- Variables de entorno y conexión

### Tipos de datos Avanzados
- Tipos numéricos: smallint, integer, bigint, numeric, real, double precision
- Tipos de texto: char, varchar, text
- Tipos de fecha y hora: date, time, timestamp, timestamptz, interval
- Tipo booleano
- UUID: generación y uso como clave primaria
- JSON y JSONB: diferencias y cuándo usar cada uno
- Arrays en PostgreSQL
- Tipos enumerados (ENUM)
- Tipos de red: inet, cidr, macaddr

### DDL Avanzado
- Creación de esquemas y namespaces
- Herencia de tablas (table inheritance)
- Tablas temporales
- Secuencias (SEQUENCE) y columnas SERIAL / GENERATED
- Triggers: concepto, creación y casos de uso
- Funciones almacenadas con PL/pgSQL: estructura básica
- Reglas (RULES): concepto general
- Extensiones: pg_crypto, uuid-ossp, postgis (referencia)

### Consultas Avanzadas en PostgreSQL
- Operadores específicos de PostgreSQL: ILIKE, SIMILAR TO, expresiones regulares
- Operadores de JSON/JSONB: ->, ->>, #>, @>, ?
- Consultas sobre arrays: ANY, ALL, array_agg, unnest
- DISTINCT ON: filtrado avanzado por grupo
- RETURNING en INSERT, UPDATE y DELETE
- UPSERT con ON CONFLICT DO UPDATE / DO NOTHING
- LATERAL joins: concepto y uso práctico
- Full-text search: tsvector, tsquery, to_tsvector, to_tsquery, GIN index

### Índices en PostgreSQL (Profundización)
- Índices parciales con WHERE
- Índices de expresión
- Índices multicolumna: orden y selectividad
- Índices GIN para arrays y JSONB
- Índices GiST para rangos y geometría básica
- BRIN: cuándo tiene sentido
- Índices únicos y parcialmente únicos
- Reconstrucción y mantenimiento: REINDEX, VACUUM, ANALYZE

### Rendimiento y Optimización
- Planes de ejecución: cómo leer EXPLAIN ANALYZE
- Estadísticas del planificador: pg_statistic, pg_stats
- Configuración del planificador: work_mem, effective_cache_size, random_page_cost
- Problema N+1 en consultas: identificación y solución
- Estrategias de paginación: OFFSET vs. keyset pagination
- Vistas materializadas: creación y actualización
- Particionamiento de tablas: por rango, lista y hash
- pg_stat_statements: monitoreo de consultas lentas

### Transacciones en PostgreSQL
- Savepoints: SAVEPOINT, ROLLBACK TO SAVEPOINT
- Advisory locks: pg_try_advisory_lock, pg_advisory_unlock
- Deadlock detection en PostgreSQL
- MVCC en práctica: visibilidad de filas y snapshots
- Tablas sin logging: UNLOGGED TABLE (rendimiento vs. durabilidad)
- VACUUM y autovacuum: por qué existen y cómo configurarlos

### Migraciones y Gestión de Esquemas
- ¿Qué es una migración de base de datos?
- Migraciones incrementales y reversibles
- Herramientas: Flyway y Liquibase (conceptos y comparación)
- Estrategias para migraciones sin downtime: expand-contract pattern
- Control de versiones de esquemas junto al código
- Ambientes: desarrollo, staging, producción

### Persistencia desde la Aplicación
- Drivers de conexión: JDBC (Java), psycopg2 (Python), pg (Node.js)
- Connection pooling desde la aplicación: HikariCP, PgBouncer
- ORM vs. query builders vs. SQL plano: cuándo usar cada uno
- Introducción a ORMs: Hibernate/JPA (Java), SQLAlchemy (Python), Prisma (Node.js)
- Mapeo objeto-relacional: entidades, relaciones, lazy vs. eager loading
- Problemas comunes con ORMs: N+1, over-fetching, under-fetching
- Repositorios y patrones de acceso a datos: Repository Pattern, DAO

---

## Etapa 3: Computación Concurrente y Fundamentos de la JVM

### Fundamentos de Concurrencia
- ¿Qué es la concurrencia y por qué importa?
- Concurrencia vs paralelismo: diferencias conceptuales
- Procesos vs hilos (threads): modelo del sistema operativo
- Condiciones de carrera (race conditions)
- Sección crítica y exclusión mutua
- Deadlocks, livelocks y starvation
- Modelo de memoria: visibilidad y reordenamiento de instrucciones

### Hilos en Java
- La clase Thread y la interfaz Runnable
- Ciclo de vida de un hilo: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED
- Creación y arranque de hilos
- Métodos: start, join, sleep, interrupt, isInterrupted
- Variables locales de hilo: ThreadLocal
- Problemas comunes: shared mutable state, visibilidad

### Sincronización en Java
- La palabra clave synchronized: métodos y bloques sincronizados
- Monitores y el modelo de lock intrínseco
- volatile: visibilidad sin exclusión mutua
- Clase Object: wait,notify, notifyAll
- java.util.concurrent.locks: Lock, ReentrantLock, ReadWriteLock
- Condiciones con Condition: await, signal, signalAll
- Comparación: synchronized vs. ReentrantLock

### Concurrencia de Alto Nivel en Java
- Executor framework: Executor, ExecutorService, ScheduledExecutorService
- Tipos de thread pools: fixed, cached, single, scheduled
- Callable y Future: tareas con resultado
- CompletableFuture: composición asíncrona
- Operaciones de CompletableFuture: thenApply, thenCompose, thenCombine, exceptionally, allOf, anyOf
- ForkJoinPool: concepto y uso para tareas divisibles

### Colecciones Concurrentes
- Problemas de usar colecciones estándar en contextos concurrentes
- ConcurrentHashMap: segmentación y operaciones atómicas
- CopyOnWriteArrayList: cuándo tiene sentido
- BlockingQueue: ArrayBlockingQueue, LinkedBlockingQueue
- Patrón productor-consumidor con BlockingQueue
- Deque concurrente: ConcurrentLinkedDeque

### Clases Atómicas y Variables Atómicas
- Operaciones compare-and-swap (CAS)
- AtomicInteger, AtomicLong, AtomicBoolean, AtomicReference
- AtomicIntegerArray, AtomicLongArray
- LongAdder y DoubleAdder: mejor rendimiento bajo alta contención
- Cuándo preferir atómicas vs. locks

### Fundamentos de la JVM
- ¿Qué es la JVM y por qué existe?
- El proceso de compilación: código fuente → bytecode → ejecución
- JVM, JRE y JDK: diferencias y roles
- Especificación vs. implementación: OpenJDK, GraalVM, Amazon Corretto
- Estructura interna: ClassLoader, Heap, Stack, Method Area, PC Register
- Bytecode: instrucciones básicas y herramienta javap

### Gestión de Memoria en la JVM
- Stack vs. Heap: qué vive en cada uno
- Objetos y referencias: cómo se almacenan
- Garbage Collection: concepto y motivación
- Algoritmos de GC: Mark-and-Sweep, Copying, Mark-and-Compact
- Generational GC: Young Generation (Eden, Survivor), Old Generation
- GC collectors disponibles: Serial, Parallel, G1, ZGC, Shenandoah
- Métricas de GC: throughput, latencia, pause time
- OutOfMemoryError: causas comunes y diagnóstico básico

### JIT y Optimizaciones de la JVM
- Interpretación vs. compilación JIT
- C1 y C2 compilers: tiered compilation
- Inlining, escape analysis, scalar replacement
- Warm-up de la JVM: por qué las primeras requests son más lentas
- Herramientas de profiling: JVisualVM, Java Flight Recorder (JFR), async-profiler
- Flame graphs: lectura básica

### Herramientas y Ecosistema JVM
- Build tools: Maven y Gradle (estructura, dependencias, ciclo de vida)
- Gestión de dependencias: repositorios, versiones, conflictos
- Logging en Java: SLF4J, Logback, Log4j2
- Configuración de aplicaciones: properties, YAML, variables de entorno
- Introducción a Spring Framework: IOC, DI, ApplicationContext
- Spring Boot: autoconfiguración, starters, propiedades
- Kotlin como alternativa a Java en la JVM: conceptos básicos

---

## Etapa 4: Comunicación y Redes

### Fundamentos de Redes
- Modelo OSI y modelo TCP/IP: capas y responsabilidades
- Direcciones IP: IPv4, IPv6, clases, CIDR, subnetting básico
- Puertos y sockets: concepto y uso
- DNS: resolución de nombres, registros A, CNAME, MX, TTL
- NAT y proxies: cómo funcionan
- Firewalls y grupos de seguridad: conceptos básicos

### TCP y UDP
- TCP: conexión orientada, confiabilidad, orden de entrega
- Three-way handshake y four-way teardown
- Control de flujo y congestión en TCP
- UDP: datagrama, sin conexión, cuándo preferirlo
- Diferencias de uso: streaming, videollamadas, juegos (UDP) vs. HTTP, bases de datos (TCP)
- Timeouts y retransmisiones

### HTTP
- Historia: HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3
- Estructura de una petición HTTP: método, URL, headers, body
- Estructura de una respuesta HTTP: status code, headers, body
- Métodos HTTP: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
- Códigos de estado: 1xxx, 2xx, 3xx, 4xx, 5xx
- Headers importantes: Content-Type, Authorization, Cache-Control, Accept, CORS
- Cookies y sesiones: Set-Cookie, Cookie, SameSite, HttpOnly, Secure
- HTTP/2: multiplexing, server push, header compression
- HTTP/3 y QUIC: motivación y diferencias

### HTTPS y Seguridad en la Capa de Transporte
- TLS: propósito, handshake y versiones (1.2 vs. 1.3)
- Certificados digitales: X.509, CA, cadena de confianza
- Let's Encrypt y certificados gratuitos
- HSTS: forzar conexiones seguras
- Pinning de certificados: concepto
- Problemas comunes: certificados expirados, mixed content

### APIs REST
- ¿Qué es REST? Principios de Fielding
- Recursos y URIs: diseño de endpoints
- Operaciones CRUD mapeadas a HTTP
- Representaciones: JSON, XML, selección de formato
- Statelessness: por qué el servidor no guarda estado de cliente
- HATEOAS: concepto (sin profundidad excesiva)
- Versionado de APIs: URL path, query param, header
- Paginación en APIs: page/size, cursor-based
- Filtrado, ordenamiento y búsqueda en endpoints
- Idempotencia: GET, PUT, DELETE vs. POST
- Diseño de respuestas de error: estructura consistente
- Documentación con OpenAPI / Swagger

### gRPC y Protobuf
- Limitaciones de REST/JSON que motivan gRPC
- Protocol Buffers: definición de mensajes en .proto
- Tipos de datos en Protobuf y serialización binaria
- Servicios gRPC: unary, server streaming, client streaming, bidirectional
- Generación de código desde .proto
- Comparación gRPC vs. REST: cuándo elegir cada uno
- gRPC-Web: uso desde navegadores
- Interceptors en gRPC

### WebSockets y Comunicación en Tiempo Real
- Limitaciones de HTTP para tiempo real: polling, long polling
- WebSocket: handshake, frames, full-duplex
- Casos de uso: chat, notificaciones, dashboards en vivo
- Bibliotecas: Socket.IO, Spring WebSocket (Java)
- Server-Sent Events (SSE): alternativa unidireccional
- Comparación: WebSocket vs. SSE vs. polling

### Autenticación y Autorización en APIs
- Autenticación vs. autorización: diferencia conceptual
- API Keys: uso y limitaciones
- Basic Auth: concepto y por qué no usar en producción
- JWT (JSON Web Tokens): estructura, firma, verificación
- Access token vs. refresh token: flujo de renovación
- OAuth 2.0: roles, flujos (Authorization Code, Client Credentials)
- OpenID Connect (OIDC): capa de identidad sobre OAuth 2.0
- Almacenamiento seguro de tokens en cliente
- Validación de tokens en el servidor

### Proxies, Gateways y Balanceo de Carga
- Forward proxy vs. reverse proxy
- Load balancer: round-robin, least connections, IP hash
- API Gateway: responsabilidades y diferencia con load balancer
- Rate limiting: algoritmos token bucket y leaky bucket
- Circuit breaker: concepto y patrón de implementación
- Herramientas: nginx, HAProxy, Kong (referencia)

---

## Etapa 5: Diseño de Servicios Backend

### Principios de Diseño de Software
- Separation of concerns
- Don't repeat yourself (DRY)
- Keep it simple, stupid (KISS)
- You aren't gonna need it (YAGNI)
- Principio de mínima sorpresa
- Acoplamiento y cohesión
- Deuda técnica: concepto y gestión

### Arquitectura en Capas
- Arquitectura tradicional de tres capas: presentación, lógica, datos
- Capas en una aplicación backend: controller, service, repository
- Dependencias entre capas y dirección del flujo
- Separación de responsabilidades por capa
- Problemas comunes: fat controllers, anemic domain models

### Patrones de Diseño Aplicados al Backend
- Repository Pattern: abstracciön del acceso a datos
- Service Layer: encapsulamiento de lógica de negocio
- DTO (Data Transfer Object): separar representación de dominio
- Mapper: conversión entre capas
- Factory Pattern en contexto backend
- Strategy Pattern para comportamiento intercambiable
- Decorator Pattern para funcionalidades transversales
- Facade Pattern para simplificar subsistemas complejos

### Domain-Driven Design (Introducción)
- ¿Qué es DDD y por qué importa?
- Ubiquitous Language: vocabulario compartido con el negocio
- Bounded Context: delimitar el dominio
- Entidades vs. Value Objects
- Aggregates y Aggregate Root
- Repositorios en DDD
- Domain Events: concepto
- Diferencia entre DDD táctico y estratégico

### Clean Architecture y Hexagonal Architecture
- Motivación: independencia de frameworks, bases de datos y detalles
- Clean Architecture: capas (Entities, Use Cases, Interface Adapters, Frameworks)
- Regla de dependencia: apuntar hacia adentro
- Hexagonal Architecture (Ports and Adapters): puertos de entrada y salida
- Diferencias y similitudes entre ambas
- Cuándo aplicarlas y cuándo es sobreingeniería

### Manejo de Errores y Validaciones
- Errores esperados vs. errores inesperados
- Excepciones vs. valores de retorno de error (Result type)
- Jerarquía de excepciones en Java
- Checked vs. unchecked exceptions
- Global exception handler: centralizar respuestas de error
- Validación de entrada: Bean Validation (JSR-380), anotaciones personalizadas
- Mensajes de error consistentes para APIs
- Logging de errores: qué loggear y qué no

### Seguridad en Aplicaciones Backend
- OWASP Top 10: visión general
- SQL Injection: cómo ocurre y cómo prevenirla (prepared statements)
- XSS (Cross-Site Scripting): tipos y mitigación
- CSRF: token de protección
- Inyección de dependencias maliciosas
- Gestión segura de secretos: variables de entorno, vaults
- Hashing de contraseñas: bcrypt, argon2
- Principio de menor privilegio
- CORS: configuración correcta
- Seguridad en headers HTTP: Content-Security-Policy, X-Frame-Options

### Cacheo
- ¿Por qué cachear? Latencia vs. consistencia
- Tipos de caché: en proceso, distribuida, CDN
- Estrategias: cache-aside, read-through, write-through, write-behind
- Invalidación de caché: el problema difícil
- TTL y expiración
- Redis como caché: estructuras de datos, comandos básicos, TTL
- Cache stampede y cómo mitigarlo
- HTTP caching: Cache-Control, ETag, Last-Modified

### Configuración y Entornos
- Separación de configuración y código (12-factor app)
- Variables de entorno: uso y buenas prácticas
- Archivos de configuración por entorno: dev, staging, prod
- Gestión de secretos: no committing secrets al repositorio
- Feature flags: activar funcionalidades sin deployar
- Configuration as Code

### Monorepo vs. Multirepo
- Definición de monorepo y multirepo
- Ventajas y desventajas de cada enfoque
- Herramientas para monorepos: Nx, Turborepo, Bazel (referencia)
- Cuándo tiene sentido cada estrategia

---

## Etapa 6: Testing y Calidad

### Fundamentos de Testing
- ¿Por qué testeamos? Confianza, documentación, refactoring seguro
- Pirámide de testing: unitarios, integración, end-to-end
- Definiciones: SUT (System Under Test), fixture, assertion
- Ciclo Red-Green-Refactor (TDD)
- Falsos positivos y falsos negativos en tests
- Tests frágiles (flaky tests): causas y cómo evitarlos

### Testing Unitario
- Características de un buen test unitario: FIRST (Fast, Isolated, Repeatable, Self-validating, Timely)
- Estructura AAA: Arrange, Act, Assert
- JUnit 5 en Java: @Test, @BeforeEach, @AfterEach, @BeforeAll, @AfterAll
- Assertions: assertEquals, assertThrows, assertAll
- Parametrized tests: @ParameterizedTest, @ValueSource, @CsvSource
- Herramientas equivalentes en otros lenguajes: pytest, Jest, RSpec

### Mocking y Test Doubles
- ¿Qué es un test double? Tipos: dummy, stub, spy, mock, fake
- Mockito en Java: @Mock, @InjectMocks, when/thenReturn, verify
- Cuándo mockear y cuándo no
- Mocking de repositorios y servicios externos
- Problemas de mockear en exceso: tests que no prueban nada real

### Testing de Integración
- Qué prueba un test de integración
- Testcontainers: bases de datos reales en tests con Docker
- Spring Boot Test: @SpringBootTest, contexto de aplicacion
- Sliced tests: @WebMvcTest, @DataJpaTest
- Testing de repositorios contra base de datos real
- Fixtures y data setup: estrategias para datos de prueba

### Testing de APIs
- Testing de endpoints HTTP: MockMvc (Spring), Supertest (Node.js)
- Verificación de status codes, headers y body
- Testing de casos de error y validaciones
- Contract testing: concepto y herramienta Pact
- Generación de documentación desde tests: Spring REST Docs

### Calidad de Código
- Cobertura de código: qué mide y sus límites
- Análisis estático: linters, SonarQube, Checkstyle, SpotBugs
- Code smells: long methods, god classes, feature envy, duplicated code
- Refactoring: técnicas básicas (extract method, rename, move, inline)
- Revisión de código (code review): qué buscar, cómo dar feedback
- Pair programming: concepto y beneficios

### CI/CD y Automatización de Calidad
- Integración Continua (CI): qué es y por qué importa
- Pipeline de CI: build, test, lint, análisis estático
- GitHub Actions: workflows, jobs, steps
- GitLab CI / Jenkins: referencia conceptual
- Fail fast: el pipeline debe fallar ante cualquier regresión
- Entrega Continua (CD): diferencia entre continuous delivery y deployment
- Estrategias de deployment: blue-green, canary, rolling update

---

## Etapa 7: Sistemas Basados en Eventos

### Fundamentos de Comunicación Asíncrona
- Comunicación síncrona vs. asíncrona: diferencias y tradeoffs
- ¿Cuándo usar mensajeríia en lugar de llamadas directas?
- Desacoplamiento temporal y espacial
- At-most-once, at-least-once, exactly-once: semánticas de entrega
- Idempotencia en consumidores: por qué es necesaria
- Poison messages: mensajes que no se pueden procesar

### Colas de Mensajes
- ¿Qué es una cola de mensajes?
- Modelo punto a punto vs. publicar-suscribir (pub/sub)
- Componentes: productor, cola, consumidor, broker
- Dead letter queue (DLQ): propósito y configuración
- Acknowledgment y requeue: flujo de confirmación
- RabbitMQ: exchanges, queues, bindings, routing keys
- Tipos de exchanges en RabbitMQ: direct, fanout, topic, headers
- Durabilidad de mensajes y colas en RabbitMQ

### Apache Kafka
- ¿Qué es Kafka y por qué existe?
- Arquitectura de Kafka: broker, topic, partition, offset, segment
- Productores: configuración, serialización, partitioner
- Consumidores: consumer group, rebalancing, lag
- Offsets: auto-commit vs manual commit
- Retención de mensajes: por tiempo y por tamaño
- Replicación: leader, follower, ISR (in-sync replicas)
- Kafka vs. RabbitMQ: cuándo elegir cada uno
- Schema Registry y Avro: por qué tipar los mensajes importa
- Kafka Streams: concepto de procesamiento de streams

### Patrones de Mensajería
- Saga Pattern: coordinación de transacciones distribuidas
- Coreografía vs. orquestación en sagas
- Outbox Pattern: garantizar consistencia entre base de datos y mensajes
- Event Sourcing: concepto, estado derivado de eventos
- CQRS (Command Query Responsibility Segregation): separación de lecturas y escrituras
- Relación entre CQRS y Event Sourcing
- Competing Consumers: escalar el consumo de mensajes
- Message Deduplication: evitar procesamiento duplicado

### Diseño de Eventos
- ¿Qué información debe llevar un evento?
- Eventos de dominio vs. eventos de integración
- Versionado de eventos y compatibilidad hacia atrás
- Thin events vs. fat events: tradeoffs
- Convenciones de nomenclatura para eventos
- Trazabilidad: correlation ID y causation ID

---

## Etapa 8: Computación Distribuida

### Fundamentos de Sistemas Distribuidos
- ¿Qué es un sistema distribuido?
- Las 8 falacias de la computación distribuida
- Problemas fundamentales: relojes, orden de eventos, consenso
- Relojes lógicos: Lamport timestamps
- Relojes vectoriales: concepto
- Consistencia eventual vs. consistencia fuerte
- Teorema CAP en la práctica:trade-offs reales
- PACELC: extensión del teorema CAP

### Microservicios
- ¿Que son los microservicios y de dónde vienen?
- Monolito vs. microservicios: ventajas y desventajas
- Principios de microservicios: autonomía, responsabilidad única, deployabilidad independiente
- Comunicación entre servicios: síncrona vs. asíncrona
- Service discovery: client-side vs. server-side (Consul, Eureka)
- API Gateway en arquitecturas de microservicios
- Strangler Fig Pattern: migración incremental desde monolito
- Cuándo NO usar microservicios

### Resiliencia y Tolerancia a Fallos
- Fallos parciales en sistemas distribuidos
- Timeout: configuración y estrategias
- Retry con backoff exponencial y jitter
- Circuit Breaker: estados (closed, open, half-open), Resilience4j
- Bulkhead Pattern: aislar fallos entre componentes
- Fallback: comportamiento degradado
- Health checks: liveness vs. readiness probes
- Chaos Engineering: concepto y herramienta Chaos Monkey

### Consistencia y Transacciones Distribuidas
- Por qué no hay transacciones ACID entre servicios
- Two-Phase Commit (2PC): concepto y problemas
- Saga Pattern en profundidad: coreografía vs. orquestación
- Compensating transactions: deshacer efectos parciales
- Eventual consistency en la práctica: manejo de inconsistencias temporales
- Distributed locking: Redis SETNX, Redlock

### Escalabilidad
- Escalado vertical vs. horizontal
- Stateless vs. stateful services: por qué stateless escala mejor
- Sharding: estrategias de distribución de datos
- Consistent hashing: distribución uniforme sin remapping total,
- Read replicas: escalar lecturas
- CQRS en contexto distribuido: separar modelos de lectura y escritura
- Rate limiting distribuido
- Back-pressure: controlar la velocidad del productor

### Contenedores y Orquestación
- ¿Qué es un contenedor? Docker: imagen, contenedor, Dockerfile
- Diferencia entre contenedores y máquinas virtuales
- Docker Compose: orquestación local para desarrollo
- Registro de imágenes: Docker Hub, ECR, GCR
- Kubernetes: motivación y arquitectura básica
- Objetos de Kubernetes: Pod, Deployment, Service, ConfigMap, Secret, Ingress
- kubectl: comandos básicos
- Namespaces: aislamiento lógico de recursos
- Horizontal Pod Autoscaler (HPA): escalado automático
- Helm: gestión de aplicaciones en Kubernetes con charts

### Almacenamiento Distribuido
- Bases de datos distribuidas: retos de consenso y replicación
- Algoritmo Raft: concepto de consenso distribuido
- CockroachDB y YugabyteDB: bases SQL distribuidas (referencia)
- Redis Cluster: sharding y replicación en Redis
- S3 y almacenamiento de objetos: modelo y casos de uso
- CDN: distribución geográfica de contenido

---

## Etapa 9: Infraestructura y Observabilidad

### Infrastructure as Code
- ¿Qué es IaC y por qué importa?
- Terraform: providers, resources, state, plan, apply
- Módulos en Terraform: reutilización de configuración
- Variables y outputs en Terraform
- Remote state: almacenamiento compartido del estado
- Ansible: concepto de configuration management (referencia)
- Diferencia entre provisioning (Terraform) y configuration management (Ansible)

### Cloud Computing
- Modelos de servicio: IaaS, PaaS, SaaS, FaaS
- Principales proveedores: AWS, GCP, Azure (conceptos agnósticos)
- Regiones y zonas de disponibilidad (AZs)
- Compute: instancias EC2 / VM, tipos y tamaños
- Almacenamiento: S3/GCS (objetos), EBS/PD (bloques), EFS/Filestore (archivos)
- Redes en la nube: VPC, subnets, security groups, route tables
- Managed databases: RDS, Cloud SQL, Aurora
- Serverless: AWS Lambda, Cloud Functions: casos de uso y limitaciones
- Load balancers en la nube: ALB, NLB (AWS)
- IAM: roles, políticas, least privilege en la nube

### Monitoreo y Alertas
- ¿Por qué observabilidad? Conocer el estado de los sistemas en producción
- Los tres pilares de la observabilidad: métricas, logs, trazas
- Métricas: tipos (contador, gauge, histograma, summary)
- Prometheus: modelo de datos, scraping, PromQL básico
- Grafana: dashboards, datasources, alertas visuales
- RED method: Rate,Errors, Duration para servicios
- USE method: Utilization, Saturation, Errors para recursos
- SLI, SLO y SLA: definiciones y relaciones
- Error budget: concepto y uso en SRE

### Logging
- Logging estructurado: JSON vs. texto plano
- Niveles de log: DEBUG, INFO, WARN, ERROR, FATAL
- Correlación de logs: request ID, trace ID
- Centralización de logs: ELK stack (Elasticsearch, Logstash, Kibana), Loki + Grafana
- Log rotation y retención
- Qué no loggear: datos sensibles, PII
- Búsqueda y filtrado de logs en producción

### Distributed Tracing
- ¿Qué es el tracing distribuido?
- Span y Trace: jerarquía y propagación de contexto
- OpenTelemetry: estándar de instrumentación
- Instrumentación automática vs. manual
- Backends de tracing: Jaeger, Zipkin, Tempo
- Cómo identificar cuellos de botella con trazas
- Correlación entre trazas, métricas y logs

### Seguridad en Infraestructura
- Principio de menor privilegio en sistemas
- Gestión de secretos: HashiCorp Vault, AWS Secrets Manager
- Escaneo de imagenes Docker: Trivy, Snyk
- Network policies en Kubernetes
- mTLS: autenticación mutua entre servicios
- Service mesh: Istio y Linkerd (concepto y motivación)
- SAST y DAST: análisis de seguridad estático y dinámico

### Gestión de Incidentes
- Qué es un incidente y cómo clasificarlo (severidad)
- On-call y rotaciones
- Runbooks: documentación operacional
- Post-mortem sin culpa (blameless post-mortem)
- Análisis de causa raíz: 5 Whys, fishbone diagram
- SRE como disciplina: principios generales

---

## Etapa 10: Paradigmas Avanzados (Scala y Sistemas Funcionales)

### Fundamentos de Programación Funcional
- ¿Qué es la programación funcional y de dónde viene?
- Funciones puras: misma entrada, misma salida, sin efectos secundarios
- Inmutabilidad: ventajas en sistemas concurrentes y distribuidos
- Funciones de orden superior: map, filter, reduce, flatMap
- Composición de funciones
- Transparencia referencial
- Recursión y recursión de cola (tail recursion)
- Lazy evaluation: concepto y beneficios

### Introducción a Scala
- ¿Por qué Scala? Multiparadigma, JVM, ecosistema
- Configuración del entorno: sbt, Scala CLI
- Sintaxis básica: val, var, def, tipos de datos
- Inferencia de tipos
- Clases, case classes y objects
- Traits: composicion de comportamiento
- Pattern matching: match/case, deconstrucción
- Option, Either, Try: manejo funcional de errores
- Colecciones inmutables: List, Vector, Map, Set
- For-comprehensions: azúcar sintáctico sobre flatMap/map

### Tipos Avanzados en Scala
- Generics y varianza: covarianza, contravarianza, invarianza
- Type bounds: upper bounds, lower bounds
- Implicit parameters y given/using (Scala 3)
- Type classes: concepto y definición en Scala
- Extension methods
- Opaque types: encapsulamiento de tipos
- Union types e Intersection types (Scala 3)

### Efectos y Manejo de la Complejidad Funcional
- El problema de los efectos secundarios en FP
- Functor: qué es y cómo se usa (map)
- Monad: concepto, flatMap, composición secuencial
- Applicative: independencia entre efectos
- Cats: biblioteca de abstracciones funcionales en Scala
- Cats Effect: IO monad, referential transparency, runtime
- Fibers: concurrencia ligera con Cats Effect
- Resource: gestión segura de recursos con bracket

### Akka y el Modelo de Actores
- ¿Qué es el modelo de actores?
- Actor: estado, comportamiento, buzón de mensajes
- ActorSystem y jerarquía de actores
- Typed Actors vs. Classic Actors en Akka
- Supervisión y tolerancia a fallos: let it crash
- Ask pattern vs. tell pattern
- Akka Streams: Source, Flow, Sink
- Backpressure en Akka Streams
- Akka HTTP: construcción de APIs con Akka
- Akka Cluster: distribución de actores en múltiples nodos (concepto)

### Programación Reactiva
- ¿Qué es la programación reactiva?
- Manifiesto Reactivo: responsive, resilient, elastic, message-driven
- Reactive Streams: especificación y backpressure
- Project Reactor (Java): Mono y Flux
- RxJava: Observable, Single, Flowable
- Spring WebFlux: endpoints reactivos no bloqueantes
- Cuándo usar programación reactiva y cuándo no

### Diseño de Sistemas a Escala
- Entrevistas de diseño de sistemas: cómo abordarlas
- Estimaciones de capacidad: usuarios, requests por segundo, almacenamiento
- Diseño de un sistema de URL shortener
- Diseño de un sistema de rate limiter
- Diseño de un feed de noticias
- Diseño de un sistema de notificaciones
- Diseño de un sistema de búsqueda
- Trade-offs: consistencia vs. disponibilidad, latencia vs. throughput
- Documentación de arquitectura: ADRs (Architecture Decision Records)



