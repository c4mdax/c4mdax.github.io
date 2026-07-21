---
title: "Estudiando TLA+: Introducción"
description: "\"Lecture 1: Introduction to TLA+\""
pubDate: "2026-07-02"
categories: ["TLA+", "Métodos Formales"] 
isBlog: false
---

## Introducción 

TLA+ es un lenguaje **de alto nivel** para la modelación de sistemas digitales durante la etapa de diseño (previa a la implementación en código).
El significado de alto nivel radica en que el proceso se encuentra sobre la capa de diseño lógico del programa, implicando la modelación sistemática matemática previa a la codificación.

TLA+ fue diseñado para modelar principalmente sistemas concurrentes y distribuidos, permitiendo identificar y corregir errores que mediante el testing tradicional serían dificiles de alcanzar.

---

## Abstracción

La abstracción es el proceso de simplificación del escenario real (reglas de negocio mayormente) para la eliminación de detalles y redundancia al momento de diseñar el sistema.

---

## ¿Qué se puede verificar en TLA+?
El objetivo con TLA+ es asegurar que un sistema funcione correctamente según las funcionalidades requeridas, satisfaciendo y siendo robusto ante estas mismas.
Las propiedades que TLA+ puede verificar son condiciones que se encuentran EN EJECUCIONES INDIVIDUALES, aislando funcionalidades para, implícitamente, hacer honor a "divide y vencerás".

En este punto, es importante entender qué se entiende por verificar, al menos en el contexto de TLA+.
Verificar consiste en responder preguntas de tipo "¿Existe alguna secuencia posible de eventos/ejecuciones que viole la propiedad $X$?". El TLC (_model checker_) explora aquellas [ejecuciones](#ejecución-de-sistema) (estados en otras notas) que pueden violar dicha propiedad, mostrando el camino a dicha ejecución.

**No demuestra que un programa esté libre de errores**.

---

## Definición formal
Sea:

- $S$: un sistema.
- $\mathcal{B}(S)$: el conjunto de todos los comportamientos (*behaviors*) del sistema.
- $P$: una propiedad, entendida como un conjunto de comportamientos.

Entonces,

$$
S \models P
\iff
\mathcal{B}(S)\subseteq P.
$$

_Un sistema satisface una propiedad sí y solo sí todo comportamiento del sistema la satisface_

---

## _Behavior_
Un _behavior_ es la representación de una ejecución del sistema, mismo que está dado por una **secuencia de estados con pasos discretos**.

En TLA+:


- **Estado:** una asignación de valores a todas las variables del sistema en un instante determinado. Puede entenderse como una *instantánea* completa del sistema. Formalmente, si `Vars` es el conjunto de variables y `Values` el conjunto de valores posibles, un estado es una función
  $$
  s : Vars \rightarrow Values.
  $$
- **Paso:** la transición de un estado a otro. Un paso está determinado por una **acción**, que especifica qué pares de estados (actual y siguiente) son válidos.
- **Secuencia:** una función finita cuyo dominio es el conjunto de enteros consecutivos desde $1$ hasta $n$. En TLA+ las secuencias no son un tipo primitivo, sino un caso particular de función:
  $$
  s : 1..n \rightarrow V,
  $$
  donde $V$ es el conjunto de posibles valores de sus elementos.

El objetivo es describir y especificar todas las posibles ejecuciones (behaviors) de un sistema.

---

## Máquinas de estado
Cuando se quiere describir un sistema digital, según sea el contexto, se recurren a recursos como lenguajes de programación (codificación) o autómatas y máquinas de Turing.

Éstos recursos se pueden factorizar en un concepto: **máquinas de estado**.
Leslie Lamport describe una máquina de estado como:
- Todos los estados iniciales
- Estados que pueden seguir a cualquier otro estado

Una máquina de estados se detiene cuando no hay otro estado al que se pueda continuar desde una transición válida.

---

## Ejemplo con problema de determinismo

```c
// Código en C
int i;

void main() {
    i = numeroAleatorio();
    i = i + 1;
}
```
En este ejemplo:

- **Variables:** $i$.
- **Estado inicial:** $i = 0$.
- **Paso 1:** asigna un valor arbitrario a $i$.
- **Paso 2:** incrementa el valor de $i$ en una unidad.


Una posible ejecución del programa es:

$$
[i = 0]\rightarrow [i = 777] \rightarrow\ [i = 778]
$$

Otra posible ejecución del programa es:

$$
[i = 0]\rightarrow [i = 776] \rightarrow\ [i = 777]
$$

En la primera ejecución, desde $i = 777$ hay un posible valor en el estado próximo, es decir, $i= 778$.
En la segunda ejecución, desde igualmente $i=777$, no hay un valor posible para el estado próximo, pues no hay estado y la máquina ha terminado.

En una máquina de estados tradicional, tenemos una función de transición **determinista**, es decir 

$$
\forall q \in Q: \exists! q' \in Q \text{ tal que } \delta(q) = q'
$$

_Para todo estado $q$ en el conjunto de estados $Q$, existe un **único** estado $q'$ tal que la función de transición $δ$ mapea $q$ a $q'$_.

Para el programa anterior:
- $Q = \mathbb{N} \cup \{\text{fin}\}$
- $\delta(777)$ debería ser un único valor

Pero en realidad:
- Ejecución 1: $\delta(777) = 778$
- Ejecución 2: $\delta(777) = \text{fin}$ (no hay transición)

Como $\delta(777)$ no es único, NO se cumple:
$$\forall q \in Q: \exists! q' \in Q \text{ tal que } \delta(q) = q'$$

Por lo tanto, **no es una máquina de estados determinista**, y es imposible modelarla como una máquina de estados EN ESTE CONTEXTO.

---

## Solución del no determinismo: El Program Counter (pc)

Lamport propone una solución elegante: **añadir una variable de control** llamada `pc` (program counter) que indique en qué línea del programa estamos. Esto convierte un sistema no determinista en uno determinista **ampliando el estado**.

Representación con pc:

Ahora el estado no es solo $i$, sino la **tupla** $(pc, i)$:

$$
\text{Estado} = (pc, i)
$$

Donde:
- $pc$ indica la línea actual del programa
- $i$ es el valor de la variable


```c
int i;

void main() {
L0: i = numeroAleatorio();  // pc = "L0"
L1: i = i + 1;              // pc = "L1"
L2: return;                 // pc = "L2" (estado final)
}
```

---

## Función de Transición Determinista

Con `pc`, podemos definir una función de transición **determinista**:

$$
\delta(pc, i) = \begin{cases}
  (L1, x) & \text{si } pc = L0 \text{ y } x \text{ es el valor aleatorio generado} \\
  (L2, i+1) & \text{si } pc = L1 \\
  \text{fin} & \text{si } pc = L2
\end{cases}
$$

**ESTO SIGUE SIENDO NO DETERMINISTA** en $L0$ porque el número aleatorio puede ser cualquier valor. Sin embargo, ahora tenemos una **transición determinista por cada posible valor**.

**Formalización Correcta**

La propuesta aquí es **parametrizar** la transición:

Para cada posible valor $x \in \mathbb{N}$:

$$
\delta_x(L0, i) = (L1, x)
$$

Y para $L1$:

$$
\delta(L1, i) = (L2, i+1)
$$

Ahora podemos ver las dos ejecuciones con estados ampliados:

**Ejecución 1:**
$$
[(L0, 0)] \rightarrow [(L1, 777)] \rightarrow [(L2, 778)] \rightarrow \text{fin}
$$

**Ejecución 2:**
$$
[(L0, 0)] \rightarrow [(L1, 776)] \rightarrow [(L2, 777)] \rightarrow \text{fin}
$$

Con esta implementación el funcionamiento ya es correcto y robusto, pues:

1. **El estado incluye $pc$**, así que $(L1, 777)$ y $(L2, 777)$ son **estados diferentes**
2. Desde $(L1, 777)$ **siempre** vamos a $(L2, 778)$
3. Desde $(L2, 777)$ **no hay transición** (el programa terminó)

Entonces: $(L1, 777) \neq (L2, 777)$.

En TLA+ esto se escribe naturalmente como:

```tla
VARIABLES pc, i

Init == pc = "L0" ∧ i = 0

L0 == pc = "L0" ∧ ∃ x ∈ 1..1000: pc' = "L1" ∧ i' = x
L1 == pc = "L1" ∧ pc' = "L2" ∧ i' = i + 1
L2 == pc = "L2" ∧ UNCHANGED ⟨pc, i⟩

Next == L0 ∨ L1 ∨ L2

Spec == Init ∧ □[Next]_⟨pc, i⟩
```
---

## Notas crudas/palabras clave
- Lenguaje de alto nivel,
- abstracción
- Chris Newcombe, primer ingeniero en proponer el uso de TLA+ para AWS,
- especificaciones (modelos de alto nivel),
- behavior,
- máquina de estados,
- determinismo y no determinismo,
- program counter para máquinas de estados.
