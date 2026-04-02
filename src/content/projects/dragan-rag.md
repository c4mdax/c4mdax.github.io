---
title: "dRAGan"
title_en: "dRAGan"
description: "Asistente de estudio PDF y TXT impulsado por IA con arquitectura RAG."
description_en: "PDF and TXT Study assistant driven by IA and RAG arquitecture."
tags: ["Python","IA", "RAG", "API"]
cover: "../../assets/projects-images/dragan-rag-agent.png"
---
# Español
### 🔘 Descripción

dRAGan es un agente que permite a los usuarios consultar información en Lenguaje Natural y obtener respuestas precisas fundamentadas exclusivamente en los documentos (PDF o TXT) que ellos mismos cargan, eliminando las alucinaciones típicas de los LLMs.

Es impulsado por Inteligencia Artificial, utilizando la arquitectura RAG (_Retrieval Augmented Genration_)

### 🔘 Funcionamiento
La interfaz funciona como un ChatBot, en el que el usuario, para comenzar la conversación, tiene que cargar los documentos PDF o TXT que quiera consultar. Al cargarlos, el usuario podrá formular preguntas, mismas que serán respondidas únicamente en base a los archivos cargados. Si la información es insuficiente, la interfaz notificará de la falta de información, invitando al usuario a alimentar con más información al agente.

La veracidad de las respuestas están sujetas, por supuesto, a la veracidad de los documentos, pues el agente hará una paráfrasis de la información, pero no inventará conceptos que no contengan los mismos.

### 🔘 Tecnologías usadas
**Lenguajes**:
- Python, JavaScript, HTML, CSS

**Frameworks y herramientas**:
- **Backend & APIs**: FastAPI, Pydantic, Uvicorn, manejo de archivos con `python-multipart`.
- **Inteligencia Artificial y NLP**: LangChain, Groq API (Modelos Llama 3), HuggingFace (`sentence-transformers/all-MiniLM-L6-v2` para embeddings).
- **Procesamiento de Documentos (RAG)**: PyPDF para extracción de texto, fragmentación de texto (Text Splitting).
- **Base de datos**: ChromaDB (Vector Database local para búsqueda semántica).
- **Frontend**: JavaScript (Vanilla), CSS3, HTML5

---
# English
### 🔘 Description

dRAGan is an agent that allows users to query information using Natural Language and obtain accurate answers grounded exclusively in the documents (PDF or TXT) they upload themselves, eliminating the typical hallucinations of LLMs.

It is powered by Artificial Intelligence, using the RAG (_Retrieval-Augmented Generation_) architecture.

### 🔘 How it Works
The interface works as a ChatBot where the user, to start the conversation, must upload the PDF or TXT documents they wish to query. Once uploaded, the user can ask questions, which will be answered based solely on the uploaded files. If the information is insufficient, the interface will notify the user of the lack of data, inviting them to feed more information to the agent.

The accuracy of the answers is, of course, subject to the veracity of the documents, as the agent will paraphrase the information but will not invent concepts that are not contained within them.

### 🔘 Technologies Used
**Languages**:
- Python, JavaScript, HTML, CSS

**Frameworks and tools**:
- **Backend & APIs**: FastAPI, Pydantic, Uvicorn, file handling with `python-multipart`.
- **Artificial Intelligence & NLP**: LangChain, Groq API (Llama 3 Models), HuggingFace (`sentence-transformers/all-MiniLM-L6-v2` for embeddings).
- **Document Processing (RAG)**: PyPDF for text extraction, Text Splitting.
- **Database**: ChromaDB (Local Vector Database for semantic search).
- **Frontend**: JavaScript (Vanilla), CSS3, HTML5
___
