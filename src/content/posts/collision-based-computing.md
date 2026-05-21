---
title: "Computación basada en Colisiones"
description: "Explicación del cómputo basado en colisiones y su conexión con autómatas celulares en la construcción de sistemas computacionales."
pubDate: "2026-04-26"
categories: ["Computación basada en colisiones", "Teoría de Autómatas", "Turing completitud"] 
draft: false
---

Leyendo *Collision-Based Computing*, editado por Andrew Adamatzky, encontré una idea particularmente interesante: la posibilidad de realizar computación sin arquitectura centralizada ni separación estricta entre memoria y procesamiento.

En este paradigma, la información es representada por entidades moviles dentro de un sistema dinámico, y el cálculo emerge a partir de sus colisiones.

Dichas entidades pueden ser:
- partículas,
- ondas,
- excitaciones químicas,
- o *spaceships* dentro de un autómata celular.

---

## ¿Qué es el cómputo basado en colisiones?

La idea central puede resumirse así:

> La información es representada por objetos móviles, y la computación ocurre cuando éstos interactúan.

Durante una colisión, las entidades pueden:
- aniquilarse,
- fusionarse,
- desviarse,
- o generar nuevas estructuras.

Cada interacción representa una transformación lógica.

A diferencia de la computación clásica, aquí no existe necessriamente un “procesador” central; el sistema completo actúa como medio computacional.

---

## El Juego de la Vida como sistema computacional

El *Game of Life* de Conway resulta especialmente interesante porque contiene:
- estructuras móviles,
- objetos estacionarios,
- osciladores,
- mecanismos de crecimiento,
- y colisiones complejas.

Los *gliders* funcionan como señales binarias móviles:
- presencia → `1`
- ausencia → `0`

Mientras tanto, objetos estacionarios pueden actuar como:
- memoria,
- reflectores,
- absorbentes,
- sincronizadores,
- o direccionadores de señales.

Esto permite construir circuitos lógicos enteros dentro del propio autómata.

---

## Colisiones como lógica

Cuando dos *gliders* colisionan, el resultado depende de:
- sincronización,
- fase,
- ángulo,
- y posición relativa.

Algunss colisiones destruyen señales; otras generan nuevas trayectorias o preservan información.

Estas interacciones permiten implementar compuertas booleanas como:
- AND,
- OR,
- NOT.

La consecuencia más importante es la siguiente:

> Si un sistema puede transmitir, almacenar y transformar información, entonces puede realizar computación universal.

Precisamente por ello, el *Game of Life* es considerado Turing-completo.

---

## Emergencia computacional

Quizá lo más interesante es que las reglas locales del sistema no contienen explícitamente:
- memoria,
- compuertas,
- arquitectura,
- ni intención computacional.

Sin embargo, la interacción colectiva de patrones termina produciendo todos estos fenómenos.

La computación emerge espontáneamente a partir de dinámica local extremadamente simple.

---

## Reflexión final

Existe algo particularmente inquietante en observar cómo entidades tan simples como los *gliders* terminan produciendo computación universal.

Especialmente porque dichas entidades no fueron diseñadas para “pensar” o “calcular”; simplemente obedecen reglas locales.

Quizá una de las ideas más profundas detrás del cómputo basado en colisiones es precisamente esa:

> La computación puede emerger allí donde exista dinámica suficientemente rica.

---

### Recursos

- Andrew Adamatzky (ed.), *Collision-Based Computing*
- Stephen Wolfram, *A New Kind of Science*
- Tommaso Toffoli & Norman Margolus, *Cellular Automata Machines*

[-> Recurso](https://www.semanticscholar.org/paper/Collision-Based-Computing-Adamatzky-Durand-Lose/e0d199d9ae0ebfdf18f589dee027f26e05c44ec5)
