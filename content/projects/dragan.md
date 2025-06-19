+++
draft = false
date = 2025-04-17T22:11:49-06:00
title = "dRAGan: AI Agent using the RAG Technique"
description = "Question-answering agent based on Retrieval-Augmented Generation (RAG) with LangChain, Chroma, and embeddings."
slug = "dragan"
authors = []
tags = ["RAG", "AI", "LangChain", "NLP"]
categories = ["AI", "Projects"]
externalLink = ""
series = []
+++

This project consists of a **question-answering agent using Retrieval-Augmented Generation (RAG)**, which responds to queries based solely on local documents (PDF or TXT). It was developed as part of an Artificial Intelligence course and aims to explore modern NLP architectures applied to specialized agents (of course, this is not a new idea, but implementing it helped me understand key concepts of this technology).

---

## ⚙️ General Workflow

1. **Input**: The user uploads `.pdf` or `.txt` documents.
2. **Question**: A natural language question is submitted.
3. **Semantic Search**: Similarities between the question and indexed fragments are calculated using **embeddings**.
4. **Generation**: A LLM (currently Phi3 Mini) is used to generate a response based only on the retrieved relevant context.

[Detailed explanation](../../posts/rag-structure)
---

## 🛠️ Tools Used

- **LangChain**: Orchestration of the RAG pipeline.
- **Chroma DB**: Vector store for semantic search.
- **Hugging Face Embeddings**: `all-MiniLM-L6-v2` used to transform text into vectors.
- **HNSW Algorithm**: Used by Chroma for nearest neighbor search.
- **Python**: Main programming language of the project.

---

[GitHub repository](https://github.com/c4mdax/dragan-agent-rag).
