+++
draft = false
date = 2024-11-19T21:03:00-06:00
title = "HiddenInk: LSB Steganography"
description = "Hide and extract messages in PNG images using the Least Significant Bit (LSB) technique."
slug = "lsb-hiddenink"
authors = []
tags = ["C", "Security", "Steganography", "LSB"]
categories = ["Systems", "Projects"]
externalLink = ""
series = []
+++

This project is a tool written in **C language** to hide and extract messages inside images using the **LSB (Least Significant Bit) steganography** technique. It was developed with the goal of exploring simple methods for hiding information in images without producing visible changes.

---

## ⚙️ General Operation

1. **Input**:
   - The user provides a PNG image and a text file.
2. **Hiding (mode `-h`)**:
   - The image size is analyzed, and the least significant bit of each color channel is replaced with bits from the message.
3. **Extraction (mode `-u`)**:
   - The image is scanned to reconstruct the hidden message from the modified bits.

---

## 🛠️ Tools Used

- **C language**: Main implementation language.
- **libpng**: Library for handling PNG files.
- **SDL2 / SDL2_image**: Graphics libraries for image manipulation.
- **gcc**: Compiler used to build all program modules (`hider.c`, `revealer.c`, etc.).

---

[GitHub repository](https://github.com/c4mdax/LSB-Steganography)
