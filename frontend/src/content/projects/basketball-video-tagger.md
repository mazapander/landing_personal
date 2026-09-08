---
title: Basketball Video Tagger
description: Herramienta para convertir partidos completos en acciones etiquetadas, segmentos de vídeo y datasets revisables.
status: Building
featured: false
externalUrl: https://github.com/mazapander/Etiquetador_Acciones_basket
stack:
  - Python
  - React
  - SQLite
  - FFmpeg
  - Video
architecture:
  - title: Video library
    description: Galería de partidos con metadata, histórico y estado de revisión.
  - title: Temporal tagging
    description: Acciones instantáneas y rangos temporales con timestamp y frame cuando existe FPS disponible.
  - title: Clip export
    description: Planificación y generación de clips por acción, concatenación o exclusión de segmentos.
capabilities:
  - Etiquetado temporal de vídeo deportivo.
  - Persistencia de sesiones y progreso de revisión.
  - Generación automática de clips y manifests.
  - Preparación de datasets para análisis y ML.
links:
  - label: Repositorio público
    url: https://github.com/mazapander/Etiquetador_Acciones_basket
---

## Del partido completo a datos revisables

Un vídeo de un partido contiene mucha información, pero hasta que no existe una estructura temporal es difícil utilizarlo para análisis, datasets o entrenamiento de modelos.

Basketball Video Tagger crea esa capa intermedia.

## Qué permite hacer

La aplicación mantiene una galería de vídeos, permite abrir un partido y registrar acciones sobre la línea temporal.

Las etiquetas pueden representar eventos instantáneos o rangos con inicio y fin. Cuando el vídeo dispone de FPS, también se conserva el frame asociado.

El histórico queda persistido para poder continuar una revisión y estimar cuánto material ha sido etiquetado.

## De etiquetas a clips

La herramienta no termina en guardar timestamps. Puede planificar y exportar segmentos de vídeo asociados a una etiqueta, concatenar acciones o generar los tramos complementarios.

Esto permite pasar de:

```text
full game → tagged actions → clips → dataset
```

## Por qué forma parte de Basketball Intelligence

El etiquetador sirve de puente entre el vídeo bruto y Motion Lab. Permite crear y revisar ejemplos antes de pedir a un modelo que los reconozca automáticamente.

La intención a largo plazo es que humano y modelo compartan el mismo lenguaje de acciones y que el etiquetado manual se concentre en los casos que realmente aportan información.
