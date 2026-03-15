+++ 
draft = false
date = 2026-02-26T14:53:05-06:00
title = "Taxonomía Juego de la Vida de Conway"
description = "Taxonomía: Estructuras y Jerarquías en el Juego de la Vida de Conway"
slug = ""
authors = ["Luis Angel Moreno Delgado"]
tags = []
categories = ["Automata Theory", "Cellular Automata", "Conway's GoL"]
externalLink = ""
series = []
math = true
+++
En el autómata celular de Conway, una estructura se define como una configuración de células vivas que presenta un comportamiento predecible bajo las reglas de transición estándar. Ésta taxonomía clasifica los objetos en función de su evolución temporal y su interacción con el entorno.

## 1. Objetos Estacionarios (Still Life)

Son configuraciones que permanecen inalteradas a través de las generaciones ($t+1 = t$). Para que una estructura sea un *Still Life*, cada célula viva debe tener exactamente 2 o 3 vecinos vivos, y cada célula muerta debe tener un número de vecinos distinto de 3 para evitar el nacimiento.

* **Bloque (Block):** La estructura estable más pequeña (2x2).
* **Hogaza (Loaf) y Bote (Boat):** Estructuras comunes de mayor complejidad geométrica.
* **Comedores (Eaters):** Subclase de objetos estables capaces de consumir naves espaciales y recuperar su forma original, actuando como sumideros de información en circuitos lógicos.

## 2. Osciladores (Oscillators)

Estructuras que regresan a su estado inicial tras un número finito de generaciones $k$. Se definen por su periodo $P$, donde la configuración en el tiempo $T$ es idéntica a $T+k$.

* **Periodo 2:** El parpadeador (Blinker) y el sapo (Toad).
* **Periodo superior:** El Pulsar ($P=3$) y el Pentadecatlón ($P=15$).
* **Importancia:** Funcionan como relojes (clocks) en la construcción de sistemas computacionales complejos dentro del autómata.

## 3. Naves Espaciales (Spaceships)

Son osciladores que se desplazan a traves de la rejilla. Después de $k$ generaciones, la estructura recupera su forma original pero en una posición relativa distinta $(x+dx, y+dy)$.

* **Glider (Planeador):** La unidad mínima de transmisión de información. Se desplaza diagonalmente a una velocidad de $c/4$.
* **Naves Ligeras (LWSS):** Se desplazan ortogonalmente.
* **Velocidad ($v$):** Se mide en relación a la velocidad de la luz del autómata ($c=1$ celda por generación).

## 4. Generadores y Estructuras de Crecimiento Infinito

Objetos que aumentan la población total del sistema de manera perpetua.

* **Cañones (Guns):** Estructuras estacionarias que emiten naves espaciales periódicamente. El *Cañón de Gliders de Gosper* fue la primera estructura descubierta de este tipo.
* **Fumadores (Puffers):** Naves que avanzan dejando un rastro de "basura" o cenizas (objetos estables u osciladores) detrás de ellas.
* **Criadores (Breeders):** Estructuras que muestran un crecimiento cuadrático ($t^2$) al emitir generadores que, a su vez, emiten naves.

## 5. Fenómenos Transitorios (Methuselahs)

Configuraciones pequeñas que tardan un tiempo desproporcionadamente largo en estabilizarse.
* **R-pentomino:** A partir de solo 5 células, evoluciona durante 1103 generaciones antes de convertirse en un conjunto estable de 116 células (cenizas).
* **Diehard:** Una configuración que desaparece por completo tras un largo periodo de actividad intensa.

---

## 6. Relevancia Computacional: Turing Completitud

La combinación de naves espaciales (datos), comedores (control) y cañones (relojes) permite la construcción de compuertas lógicas (AND, OR, NOT), todo ésto mediante el paradigma de [Cómputo basado en Colisiones](../collision-based-computing/), demostrando que el Juego de la Vida es **Turing Completo**, pudiendo simular cualquier algoritmo computable, incluyendo una instancia del propio Juego de la Vida dentro de sí mismo.
