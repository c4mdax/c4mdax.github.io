---
title: "¿Cómo pudo haber pensado Leslie Lamport para inventar Paxos?"
description: "¿Cómo pensó Leslie Lamport para ser capaz de inventar el algoritmo del consenso distribuido Paxos?"
pubDate: "2026-07-01"
categories: ["Sistemas Distribuidos", "Leslie Lamport ", "Consenso Distribuido", 'Paxos'] 
draft: true
---
## "Why should you pay attention to me?"

Estudiando el curso _"Lamport TLA+ Course"_, me resultó muy curiosa la forma de manejar la enseñanza e investigación de Leslie Lamport (sin mencionar los curiosos sombreros que utiliza en sus lecciones). En la lección 1: _"Introduction to TLA+"_,  el presenta su biografía con una pregunta con suma gracia e ingenio: _"what kind of clown am i claiming that i know what can make you think better... why should you pay attention to me?"_. 
Esto me hizo pensar en la creatividad de Lamport, quien, mediante una analogía tan peculiar como la de una isla ficticia de la antigua Grecia, bautizó a su algoritmo más famoso de consenso distribuido: **Paxos**.

Así, con creatividad, comencé a pensar, ¿cómo?, ¿cómo logró Lamport inventar tan complejo y consistente algoritmo? ¿Lo hizo iterando sobre reglas hasta concebirlas en un mismo algoritmo?, ¿requirió pruebas masivas?, ¿fue producto de iluminación divina con suerte de Terry  Davis?... 

## Motivación
En este post no pretendo explicar Paxos, si lo hiciera, perdería cabello en el proceso (suponiendo que logro concretar una explicación total de Paxos, misma para la que aún no me considero adeucado).

Pretendo hacer una reflexión personal e inferir cómo pudo haber sido el proceso intelectual de Lamport detrás de la creación de Paxos, basándome en sus publicaciones, conferencias y en la forma en que suele abordar el diseño de algoritmos.

## Inicio 
