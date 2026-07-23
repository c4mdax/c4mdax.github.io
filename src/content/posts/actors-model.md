---
title: "Concurrencia: Paradigma de Modelo de Actores"
description: "Estudio del paradigma de Modelo de Actores para soluciones en cómputo concurrente."
pubDate: "2026-07-09"
categories: ["Backend", "Concurrencia"] 
draft: false
isBlog: false
---

## Introducción 

El Modelo de Actores es un modelo matemático y conceptual para el cómputo concurrente que trata a los "actores" como las primitivas universales de la ejecución simultánea. 
A diferencia de los enfoques tradicionales basados en hilos (*threads*) que comparten memoria, este paradigma abstrae la concurrencia delegando el trabajo a entidades independientes y aisladas que se comunican exclusivamente a través del paso de mensajes.

Propuesto originalmente por Carl Hewitt en 1973 ha ganado relevancia en el diseño de sistemas distribuidos y backend de alta concurrencia gracias a su tolerancia a fallos y eliminación de bloqueos lógicos.

---

## El problema de la memoria compartida

En la concurrencia tradicional con threads múltiples hilos de ejecución intentan acceder y mutar un mismo bloque de memoria de forma simultánea, requiriendo mecanismos de sincronización en la capa de software (semáforos, *mutexes*, *locks*).

El problema recae en que la sincronización explícita es propensa a dos fallos críticos en sistemas complejos:
- **Condiciones de carrera (Race conditions):** Modificaciones simultáneas que dejan el estado del sistema corrupto o inconsistente.
- **Interbloqueos (Deadlocks):** Dos o más hilos se bloquean mutuamente esperando liberar un recurso, deteniendo la ejecución de la máquina de estados.

---

## La Abstracción del Actor

La abstracción fundamental del modelo elimina la memoria compartida. En su lugar, el sistema se compone de actores.

Un **actor** encapsula su propio estado interno y comportamiento. Ningún otro hilo o actor puede leer o modificar el estado de un actor directamente; la única forma de interactuar con él es enviándole un mensaje asíncrono. 

---

## Anatomía y Reglas

Cuando un actor recibe un mensaje, de forma atómica y aislada, puede realizar únicamente tres operaciones fundamentales:

1. **Crear** un número finito de nuevos actores.
2. **Enviar** un número finito de mensajes a otros actores que conoce.
3. **Designar** el comportamiento (o estado) que usará para procesar el *siguiente* mensaje recibido.

Cada actor posee un **Buzón (Mailbox)**, que actúa como una cola FIFO (First-In, First-Out) por defecto. Los mensajes llegan de forma concurrente desde el exterior, pero el actor procesa los mensajes de su buzón **secuencialmente, uno a la vez**. Esto garantiza que no haya mutaciones concurrentes en el estado interno del actor, eliminando la necesidad de *locks*.

---

## Formalización del comportamiento

Sea:
- $S$: El estado interno del actor.
- $M$: El conjunto de todos los mensajes posibles que el actor puede entender.
- $B$: El buzón del actor, representado como una secuencia finita de mensajes $[m_1, m_2, ..., m_n]$.

El procesamiento de un mensaje $m \in M$ actúa como la función de transición de una máquina de estados discreta (me encanta como teoría de autómatas permea explícitamente a todo) para el actor:

$$
\delta(S, m) = S'
$$

Donde $S'$ es el nuevo estado interno del actor para el siguiente mensaje en la cola $B$. 
Dado que $\delta$ se evalúa secuencialmente para cada mensaje en $B$, el estado muta de forma determinista desde la perspectiva del propio actor, aunque la llegada de los mensajes sea asíncrona y no determinista.

---

## Implementación conceptual en Scala

En ecosistemas como la JVM, el modelo de actores se materializa en bibliotecas como Apache Pekko o Akka. Aquí, la mutación de estado ($S \rightarrow S'$) se representa retornando un nuevo *Behavior* (comportamiento) al procesar un mensaje.

```scala
/** Código de Scala 3 usando un ESTILO TIPADO (Pekko/Akka Typed). 
Aún no entro de lleno a Scala, pero es útil entender la implemntación 
básica de este paradigma.
**/

import org.apache.pekko.actor.typed.Behavior
import org.apache.pekko.actor.typed.scaladsl.Behaviors

// 1. Se definen de los mensajes (el dominio es M)
enum MensajeContador:
  case Incrementar
  case ObtenerValor(replyTo: ActorRef[Int])

object Contador:
  // 2. Estado inicial S = 0
  def apply(): Behavior[MensajeContador] = comportamiento(0)

  // 3. La implementación de la función de transición discreta
  private def comportamiento(estadoActual: Int): Behavior[MensajeContador] =
    Behaviors.receiveMessage {
      case MensajeContador.Incrementar =>
        // Designa el comportamiento para el siguiente mensaje (S')
        comportamiento(estadoActual + 1)
        
      case MensajeContador.ObtenerValor(replyTo) =>
        // Envía mensaje a otro actor (la respuesta)
        replyTo ! estadoActual
        // Mantiene el mismo estado
        Behaviors.same
    }
```

En este ejemplo:
- La variable `estadoActual` nunca es modificada in-place (no hay `var`), se pasa recursivamente.
- Si 10,000 hilos envían `Incrementar` simultáneamente, el buzón los encola y el actor los procesa secuencialmente uno a uno. No hay *race conditions*.

---

## Notas crudas/palabras clave
- paso de mensajes (message passing), 
- encapsulamiento de estado estricto, 
- no compartición de memoria (shared-nothing), 
- mutexes
- buzón (mailbox), 
- eliminación de locks,
- tolerancia a fallos,
- Carl Hewitt,
- Behavior
- similitud con sistemas distribuidos
- race conditions
