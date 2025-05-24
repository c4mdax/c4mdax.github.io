+++
draft = false
date = 2025-04-17T22:11:49-06:00
title = "Proyecto de IA: Agente por RAG"
description = "Agente de respuestas por recuperación aumentada (RAG) con LangChain, Chroma y embeddings."
slug = "rag-agente"
authors = []
tags = ["RAG", "IA", "LangChain", "NLP"]
categories = ["IA", "Proyectos"]
externalLink = ""
series = []
+++

Este proyecto consiste en un **agente de respuestas mediante Recuperación Aumentada por Generación (RAG)**, que responde preguntas con base únicamente en documentos locales (PDF o TXT). Fue desarrollado como parte de un curso de Inteligencia Artificial y tiene como objetivo explorar arquitecturas modernas de PLN aplicadas a agentes especializados (por supuesto no es algo nuevo, pero esta implementación me ayudó a entender los temas competentes a esta tecnología).

---

## ⚙️ Funcionamiento General

1. **Entrada**: El usuario carga documentos en `.pdf` o `.txt`.
2. **Pregunta**: Se formula una pregunta en lenguaje natural.
3. **Búsqueda Semántica**: Se calculan similitudes entre la pregunta y fragmentos indexados mediante **embeddings**.
4. **Generación**: Se usa un LLM (Actualmente Phi3 Mini) para construir una respuesta solo con el contexto relevante recuperado.

---

## 🛠️ Herramientas Utilizadas

- **LangChain**: Orquestación del pipeline RAG.
- **Chroma DB**: Vector store para búsqueda semántica.
- **Hugging Face Embeddings**: `all-MiniLM-L6-v2` para transformar texto a vectores.
- **Algoritmo HNSW**: Usado por Chroma para búsqueda de vecinos más cercanos.
- **Python**: Lenguaje principal del proyecto.

---

## 🚧 Desafíos y Estado Actual

A pesar de que el proyecto no es aún portable (quiero conocer la mejor ruta para portabilidad ya sea SAAS o implementación web), puedes encontrarlo en mi [repositorio de GitHub](https://github.com/c4mdax/dragan-agent-rag).
- Próximamente planeo:
  - Mejorar la portabilidad, teniendo en mente Docker
  - Integrar **memoria conversacional**
  - Añadir **caché de respuestas** para optimizar desempeño.

---

Este agente lo considero una base de exploración introductoria en IA. Estoy en constante mejora para convertirlo en una herramienta práctica, accesible y confiable.
