+++ 
draft = false
date = 2025-04-17T22:11:49-06:00
title = "dRAGan: Proyecto de IA por Generación Aumentada por Recuperación (RAG)"
description = ""
slug = "1"
authors = []
tags = []
categories = ["LLM's", "RAG"]
externalLink = ""
series = []
+++
Recientemente, a través de una asignatura en la Facultad, tuve la oportunidad de profundizar en el estudio teórico-práctico de Redes Neuronales, con especial enfoque en los **Modelos de Lenguaje a Gran Escala (LLMs)** (como lo es GPT, Gemini, LlaMa, Claude, etc). Entre los temas abordados, destaco el análisis de técnicas de Inteligencia Artificial Generativa aplicadas al **Procesamiento del Lenguaje Natural (PLN)**, en particular la Generación Aumentada por Recuperación (RAG), un paradigma que combina la capacidad generativa de los LLMs con la recuperación contextual de información externa. 

Para el final del curso, se nos pidió hacer un proyecto relacionado a los temas vistos en clase, a lo cual me remití a la arquitectura RAG para diseñar un agente capaz de, a partir de archivos de tipo PDF o de texto (.txt), generar respuestas concisas y precisas a la pregunta del usuario basándose únicamente en la información que contienen los documentos. Si quieres consultar más detalladamente el proyecto, lo encuentras aquí: [dRAGan: Agente de IA por técnica RAG](../../projects/dragan) (aunque vale la pena decir que con este proyecto tuve más la intención de aprender, que de generar algo útil más allá de otras tecnologías).

Así pues, sería de mi gusto explicar el funcionamiento del proyecto, recordando que esta sección de publicaciones también la uso para mi estudio propio.

# 💻 Funcionamiento final del Agente

#### Entrada de Datos
- Recibe documentos en formatos PDF (.pdf) y/o texto plano (.txt)  
**Caso de uso**: carpeta con artículos médicos sobre Tuberculosis.

#### Consulta del Usuario
- Procesa preguntas en lenguaje natural.  
**Caso de uso**: ¿Qué es la Tuberculosis?

#### Procesamiento de la Respuesta
- **Búsqueda contextual**: Extrae información relevante SOLO de los documentos.
- **Generación**: Crea respuestas concisas basadas en el contexto recuperado.
- **Manejo de errores**: Si no se encontró información suficiente (el agente necesita al menos 30% de contexto útil para generar la respuesta), invita al usuario a añadir más información.

Este funcionamiento garantiza que la respuesta sea generada basándose únicamente en los documentos proporcionados, evitando ambigüedades y asegurando veracidad en la respuesta (la veracidad depende por supuesto de la veracidad de los documentos).


# 🧠 Funcionamiento interno/matemático del Agente

#### Tokenización
El Agente utiliza un **tokenizador especializado** (como WordPiece o BPE) para dividir el texto en unidades significativas (como separar una receta en ingredientes individuales), y almacenar los tokens en un vector (imagina a un vector como una colección de elementos), por ejemplo:  

- Información del documento: `"Tuberculosis enfermedad infecciosa" → ["Tuberculosis", "enfemedad", "infecciosa"]` 
- Pregunta: `"¿Qué es la Tuberculosis?" → ["¿","Qué es","la","Tuberculosis","?"]`   
Este ejemplo es demasiado pobre, pero es importante reconocer que al _tokenizarse_ cada archivo, se generan vectores con demasiados elementos.

#### Transformación a Embeddings
Un _Embedding_ es una representación numérica de una palabra o frase. Mediante una estructura de datos llamada **diccionario**, cada token del vector se "mapea" a un número. por ejemplo:  

- Información del documento:   `["Tuberculosis", "enfermedad", "infecciosa"] → [5.3, 0.24, -3.12]`
- Pregunta: `["¿","Qué es","la","Tuberculosis","?"] → [-6.45, 21.3, 3.2, 5.3, -6.23]`  

La estructura de datos Diccionario garantiza que el mapeo numérico de un elemento siempre sea el mismo (suponiendo el diccionario que yo usé, el token "Tuberculosis" siempre se mapeará al número 5.3).

#### Búsqueda Semántica (Álgebra Lineal en Búsqueda Vectorial)
Calcula la **similitud coseno** entre los vectores de la pregunta y los fragmentos del documento. Esta medida indica qué tan cercanos (en significado) son dos vectores, siendo 1.0 (100%) la máxima similitud posible
```bash {class="my-class" id="my-codeblock" lineNos=inline tabWidth=2}
similitud = (vector_pregunta • vector_documento) / (||vector_pregunta|| * ||vector_documento||)

```
_dRAGan_ selecciona los 3 fragmentos con mayor similitud y se almacenan como contexto relevante.

#### Recuperación del contexto
El agente concatena los fragmentos más relevantes en un sólo bloque de texto, que será utilizado como _fuente de conocimiento_ para responder. Este paso se conoce como **context retrieval** y es clave en el enfoque RAG: el modelo no responde desde su entrenamiento general, sino desde lo que recupere.

#### Generación de la Respuesta 
_dRAGan_ le hace una petición a un modelo de lenguaje (LLM), en este caso Phi3 Mini, para que construya la respuesta a la pregunta del usuario basándose en el contexto recuperado. La generación de la respuesta es condicionada, es decir, está influenciada directamente por la información proporcionada. Antes de hacer la petición al LLM, el agente verifica que se haya encontrado al menos 30% de similitud promedio entre los fragmentos y la pregunta, si no se da el caso, el agente directamente devuelve la queja de que no se encontró información suficiente, invitiando al usuario a añadir más documentos.


_____
Este proyecto me permitió entender en la práctica cómo un LLM puede ser más controlable y preciso si lo conectamos con un mecanismo de recuperación (RAG), evitando respuestas inventadas (alucinaciones) típicas de los modelos generativos puros.

Además, reafirmé la importancia del preprocesamiento, el manejo de vectores, y la integración efectiva entre IA generativa y técnicas clásicas como la búsqueda vectorial.
