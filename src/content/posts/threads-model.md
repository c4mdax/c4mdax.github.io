---
title: "Concurrencia: Paradigma de hilos y memoria compartida"
description: "Estudio del paradigma tradicional de Threads para soluciones en cómputo concurrente."
pubDate: "2026-07-13"
categories: ["Backend", "Concurrencia", "Java"] 
draft: false
isBlog: false
---

## Introducción 

El modelo de hilos (*Threads*) basado en memoria compartida es el enfoque clásico y fundamental para la concurrencia en la mayoría de los sistemas operativos y lenguajes tradicionales. En este paradigma, múltiples secuencias de instrucciones (hilos) se ejecutan concurrentemente dentro del mismo proceso, compartiendo el mismo espacio de direcciones de memoria.

A diferencia del Modelo de Actores donde el estado está estrictamente aislado, aquí el estado global es accesible y mutable por cualquier hilo en cualquier momento, lo que traslada la responsabilidad de la consistencia directamente a la capa de desarrollo.

---

## El Heap, el Stack y la Visibilidad

Para entender la concurrencia en la arquitectura de la JVM hay que entender qué areas de memoria lógica se encuentran:
- **Stack (Pila):** Cada hilo tiene su propio *stack* aislado. Las variables locales y llamadas a métodos son inherentemente seguras contra concurrencia (*thread-safe*).
- **Heap (Montículo):** Es la memoria global donde residen todos los objetos. Cualquier hilo con una referencia a un objeto en el *heap* puede leer o mutar su estado.

Este diseño introduce el problema de la **visibilidad**. Las arquitecturas de CPU modernas utilizan memorias caché (L1, L2, L3) por núcleo. Un hilo ejecutándose en un núcleo puede modificar una variable en su caché local sin que los hilos en otros núcleos vean la actualización en la memoria principal de forma inmediata.

---

## Formalización de la Inconsistencia

Sea $S$ un estado global compartido (ej. un contador $S = 0$).
Sean $T_1$ y $T_2$ dos hilos ejecutando concurrentemente una operación de incremento. A nivel de hardware, un incremento no es atómico, sino una composición de "sub-operaciones"":
1. $r \leftarrow Leer(S)$
2. $r' \leftarrow r + 1$
3. $Escribir(S, r')$

Si la ejecución de $T_1$ y $T_2$ se entrelaza temporalmente sin coordinación, tenemos una **condición de carrera**:

$$
\begin{matrix}
\text{Tiempo} & T_1 & T_2 & S \\
\hline
t_0 & r_1 \leftarrow Leer(0) & & 0 \\
t_1 & & r_2 \leftarrow Leer(0) & 0 \\
t_2 & r_1' \leftarrow 1 & & 0 \\
t_3 & & r_2' \leftarrow 1 & 0 \\
t_4 & Escribir(S, 1) & & 1 \\
t_5 & & Escribir(S, 1) & \mathbf{1}
\end{matrix}
$$
> Goetz, B., Peierls, T., Bloch, J., Bowbeer, J., Holmes, D., & Lea, D. (2006). Java Concurrency in Practice. Addison-Wesley Professional.

El resultado final es $S = 1$, cuando debería ser $S = 2$. El sistema se vuelve **no determinista**.

---

## Exclusión Mutua y Monitores

Para resolver este no determinismo, se requiere un mecanismo que garantice que ciertas operaciones sean atómicas. El modelo conceptual para esto es la **exclusión mutua** (Mutex).

Java implementa este concepto a través de **Monitores** (*Intrinsic Locks*). Cada objeto instanciado en la JVM posee un monitor interno. Al usar la palabra clave `synchronized`, un hilo adquiere el monitor del objeto, bloqueando (suspendiendo) a cualquier otro hilo que intente adquirir ese mismo monitor hasta que el hilo original termine su bloque de ejecución.

Esto fuerza un orden secuencial estricto temporal: $S' = \delta_2(\delta_1(S))$ o $S' = \delta_1(\delta_2(S))$.

---

## Implementación conceptual en Java

```java
// Código conceptual en Java
public class ContadorCompartido {
    // Estado compartido en el Heap
    private int contador = 0;

    // Método SIN sincronización (vulnerable a Race Conditions)
    public void incrementarPeligrosisimo() {
        this.contador++; // no es atómico
    }

    // Método CON sincronización (Thread-safe)
    // El hilo debe adquirir el monitor del objeto 'this'
    public synchronized void incrementarSeguro() {
        this.contador++; 
    }

    public synchronized int obtenerValor() {
        return this.contador;
    }
}
```

En sistemas backend de alto rendimiento, el uso excesivo de `synchronized` puede generar **contención** (hilos encolados esperando CPU) o **deadlocks** (abrazos mortales). Por ello, el ecosistema Java (a través de `java.util.concurrent`) ha evolucionado ofreciendo *Locks* explícitos, estructuras no bloqueantes basadas en operaciones atómicas CAS (*Compare-And-Swap*) y, más recientemente, Hilos Virtuales (Project Loom) para abaratar el costo de bloqueo en I/O.

---

## Notas crudas/palabras clave
- Memoria compartida (*shared memory*),
- Race conditions,
- Deadlocks,
- mutex,
- Monitor / Intrinsic lock,
- synchronized y volatile,
- Visibilidad (caché de CPU),
- Operaciones atómicas,
- Thread-safe.
