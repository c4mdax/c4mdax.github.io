---
title: "Autómatas celulares"
description: "Explicación y exploración superficial de los usos y alcances multidisciplinarios de los autómatas celulares."
pubDate: "2026-02-18"
categories: ["Teoría de Autómatas", "Autómatas Celulares"] 
draft: false
---

## Motivación

Estudiando el libro de Stephen Wolfram, *A New Kind of Science*, me resulta muy fantástico lo complejo que puede resultar un sistema, a partir de reglas simples, y como el autor lo plantea, _un nuevo tipo de ciencia_. 
	
¿Un autómata celular puede exhibir adecuadamente un sistema complejo? Esta pregunta nos lleva directamente a una vieja discrepancia entre dos formas de entender la realidad: ¿puede comprenderse dicho sistema a partir de sus componentes básicos y las leyes que los gobiernan (_reduccionismo_)? ¿o es, acaso, más que la simple suma de sus partes (_emergentismo/holismo_)?

En este post no abordaré tanto dicha pregunta, pues considero que debo tener juicio y postura que requiere de un estudio riguroso de sistemas complejos, área de la que, por supuesto, no tengo experiencia desde mi prematuro estudio.

Me limitaré a explicar superficialmente lo que es un autómata celular, sus aplicaciones, consideraciones, y foco en el autómata de Conway o _Juego de la Vida_.

## Definición vaga

A grandes rasgos, un autómata celular consiste en una cuadrícula de células donde cada una:
- posee un estado,
- interactúa únicamente con sus vecinos
- y evoluciona simultáneamente mediante reglas discretas.

A pesar de esta simplicidad estructural, dichos sistemas pueden producir:
- estabilidad,
- periodicidad,
- propagación,
- caos,
- autoorganización,
- e incluso computación universal.

---

## Formalización

Un autómata celular puede definirse formslmente como una tupla:

$$
A = (L, S, N, f)
$$

donde:

- $L$ representa la retícula o espacio celular,
- $S$ el conjunto finito de estados posibles,
- $N$ la vecindad,
- y $f$ la función de transición local.

La evolución del sistema ocurre en pasos discretos de tiempo.  
El estado de una célula en el instante $t+1$ depende únicamente de:
- su estado actual,
- y los estados de las células pertenecientes a su vecindad.

Formalmente:

$$
s_i^{t+1} = f(N_i^t)
$$

donde:
- $s_i^{t+1}$ representa el nuevo estado de la célula $i$,
- y $N_i^t$ corresponde a la configuración local de vecinos en el tiempo $t$.

La característica más importante es que no existe coordinación centralizada:
el comportamiento global emerge exclusivamente de interacciones locales.

---

## Emergencia

Quizá el aspecto más interesante de los autómatas celulares es la emergencia.

Las reglas individuales suelen ser extremadamente pequeñas y simples; sin embargo, la interacción colectiva entre células produce patrones globales inesperadamente sofisticados.

Dependiendo de las reglas utilizadas, el sistema puede:
- estabilizarse,
- oscilar,
- propagarse indefinidamente,
- o evolucionar hacia dinámicas caóticas.

El *Game of Life* de Conway es probablemente el ejemplo más representativo de este fenómeno.

---

## El Juego de la Vida

En el *Game of Life*, cada célula únicamente puede:
- sobrevivir,
- morir,
- o nacer,

dependiendo del número de vecinos vivos que la rodean.

Formalmente:
- una célula viva sobrevive si posee 2 o 3 vecinos vivos,
- una célula muerta nace si posee exactamente 3 vecinos vivos.

A pesar de estas reglas mínimas, emergen:
- objetos estacionarios,
- osciladores,
- estructuras móviles,
- mecanismos de crecimiento,
- y patrones capaces de transmitir información.

Particularmente interesantes resultan los *gliders*, pequeñas estructuras móviles que pueden interpretarse como señales dentro del sistema.

A partir de colisiones entre estos patrones es posible construir:
- memoria,
- sincronización,
- compuertas lógicas,
- e incluso computación universal.

---

## Aplicaciones

Los autómatas celulares han sido utilizados para modelar fenómenos en múltiples áreas:

- dinámica de poblaciones,
- propagación de incendios,
- tráfico vehicular,
- crecimiento cristalino,
- fluidos,
- sistemas biológicos,
- física estadística,
- y teoría de la computación.

Esto se debe a que muchos sistemas reales también presentan:
- interacciones locales,
- evolución discreta,
- y comportamiento colectivo emergente.

---

## Sobre complejidad

Existe algo particularmente fascinante en observar cómo reglas locales tan pequeñas terminan produciendo estructuras tan complejas.

Especialmente porque el sistema:
- no posee intención,
- no posee conocimiento global,
- ni arquitectura centralizada.

Simplemente evoluciona.

Y aun así, aparecen:
- patrones organizados,
- transmisión de información,
- estabilidad,
- adaptación,
- e incluso computación.

Quizá por ello los autómatas celulares resultan tan importantes: muestran que la complejidad puede emerger espontáneamente a partir de reglas extremadamente simples.

---

### Recursos

- Stephen Wolfram, *A New Kind of Science*
- John Conway, *The Game of Life*
- Tommaso Toffoli & Norman Margolus, *Cellular Automata Machines*
- Andrew Adamatzky, *Collision-Based Computing*
