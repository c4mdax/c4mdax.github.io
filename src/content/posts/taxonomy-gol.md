---
title: "Juego de la Vida de Conway: Taxonomía"
description: "Clasificación esclarecida de las entidades más importantes en el autómata celular de Conway."
pubDate: "2026-01-12"
categories: ["Teoría de Autómatas", "Autómatas Celulares", "Autómata de Conway"] 
---
Leyendo más sobre _Conway's Game of Life_, encontré varios recursos que particularizan la clasificación, lógica y comportamiento de entidades dentro de un autómata celular; en particular: [Conway's "Game of Life" and the Epigenetic Principle](https://pmc.ncbi.nlm.nih.gov/articles/PMC4905947/). 

Dado que este espacio también sirve como espacio público de estudio personal, me propongo recuperar e interpretar dicha clasificación, haciendo un ligero paralelismo con la noción de taxonomía biológica.

---
> Conway identifies three distinctive emergent forms. “Still life” configurations are stable over many iterations, like a block of 4 adjacent squares. “Oscillators” are stable over a cycle, returning to an initial state. Such cycles can be short or very long. Finally there is a rare, small set we call “movers,” which include “gliders,” which move across the grid.

---
### Still Life (Objetos estacionarios)
Los *still lifes* son configuraciones que permanecen invariantes bajo la dinámica del sistema; es decir, tras cada iteración del autómata, su estructura no sufre modificación alguna.

Formalmente, un *still life* corresponde a un patrón que constituye un **punto fijo** de la evolución del sistema. Esto implica que cada célula viva tiene exactamente dos o tres vecinos vivos, mientras que las células muertas adyacentes no satisfacen la condición de nacimiento.

Desde una perspectiva estructural, representan estados de equilibrio local dentro del sistema, y pueden interpretarse como las “unidades estables” sobre las cuales interactúan patrones más complejos.

Desde otra perspectiva, suerte de sociedad, podrían representar territorios altamente definidos y rígidos, y en sentido más aparatoso, **El equilibrio de Nash** o una **sociedad pacífica**.

---

### Oscillators (Osciladores)
Los *oscillators* son configuraciones que evolucionan de manera periódica, retornando a su estado inicial tras un número finito de generaciones.

Sea $T$ el operador de evolucion del sistema, un oscilador de periodo $n$ satisface:

$$
T^n(P) = P, \quad n > 1
$$

donde $P$ es la configuración inicial y $n$ es el menor entero positivo que cumple esta propiedad.

A diferencia de los *still lifes*, los osciladores no son puntos fijos, sino **órbitas periódicas** dentro del espacio de configuraciones. 

_Nota: en el estudio de sistemas dinámicos discretos, una órbita es la sucesión de puntos $${x_0, x_1, x_2, ...}$$ generada al aplicar repetidamente una función $f$ a un punto $x_0$, ésta última la semilla._

Nuevamente, desde una perspectiva de suerte social, éstos representan un fallo al intentar alcanzar el equilibrio de Nash: ecosistemas inherentemente inestables y condenados a la repetición.

---

### Movers (Osciladores desplazados)
Los *movers*, o mayormente conocidos como  *spaceships*, son configuraciones que, además de evolucionar periódicamente, presentan un desplazamiento neto en la cuadrícula.
Formalmente, un patrón $P$ es un *spaceship* si existe un vector de traslación $ \vec{v} $ y un entero $ n > 0 $ tales que:

$$
T^n(P) = P + \vec{v}
$$

donde $P + \vec{v}$ denota la traslación espacial del patrón.

Estos objetos son particularmente relevantes, ya que pueden interpretarse como mecanismos de **transmisión de información** dentro del sistema. El ejemplo más representativo es el *glider*, cuya simplicidad contrasta con su papel fundamental en construcciones más complejas, incluyendo sistemas computacionales dentro del propio autómata, fundamentándose en [Cómputo basado en colisiones](collision-based-computing)

De igual forma que con los osciladores y objetos estacionarios, podemos ver a éstos objetos (sin afán de forzar alguna conexión con lo social, pero recordando que un autómata celular se puede transferir a dinámica de poblaciones) como especies invasoras, altamente agresivas, y constantemente migratorias. 

---

Existe una cuarta categoría que me resulta importante agregar:
### Generadores / Estructuras de Crecimiento Infinito
Estos objetos, como su nombre indica, aumentan la población total del sistema de manera perpetua mediante generación de objetos más simples. Pueden ser:

- **Cañones (guns)**: estructuras estacionarias sin desplazamiento que emiten *spaceships* periódicamente. El _Cañón de Gliders de Gosper_ fue la primer estructura descubierta de este tipo.
- **Fumadores (puffers)**: *spaceships* que avanzan dejando un "rastro de basura" o "cenizas" (pueden ser objetos estables u osciladores) detrás de ellas.

---

Por último, un quinto concepto relacionado a configuraciones de patrones:
### Fenómenos transitorios
Son configuraciones pequeñas que tardan un tiempo desproporcionadamente largo en estabilizarse. Las principales:
- **R-pentomino**: a partir de solo 5 células, evoluciona durante 1103 generaciones antes de convertirse en un conjunto estable de 116 células (cenizas).
- **Diehard**: esta configuración, tras un largo periodo de actividad evolutiva intensa (130 generaciones en el caso tradicional), desaparece por completo.
---
