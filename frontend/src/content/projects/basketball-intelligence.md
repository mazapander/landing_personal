---
title: Basketball Intelligence
description: Un laboratorio que conecta datos de competiciones, etiquetado de vídeo y computer vision para entender mejor lo que ocurre en una pista.
status: Active lab
featured: true
stack:
  - Python
  - FastAPI
  - PostgreSQL
  - Video
  - Computer Vision
architecture:
  - title: Structured data
    description: StatsFEB construye histórico y contexto sobre partidos, jugadores y competiciones.
  - title: Labelled video
    description: El etiquetador convierte partidos completos en acciones y segmentos temporales revisables.
  - title: Computer vision
    description: Motion Lab explora cómo detectar y medir acciones a partir de vídeo para reducir trabajo manual.
capabilities:
  - Ingesta y modelado de datos deportivos.
  - Herramientas de etiquetado temporal y generación de clips.
  - Experimentación con modelos de visión por computador.
---

## No son tres proyectos aislados

La parte interesante aparece cuando las piezas se conectan.

`StatsFEB` aporta datos estructurados e histórico. `Basketball Video Tagger` permite convertir vídeo completo en acciones etiquetadas y datasets revisables. `Motion Lab` utiliza ese contexto para experimentar con detección y medición automática mediante computer vision.

```text
structured data → labelled video → computer vision
```

## Qué estoy intentando resolver

Gran parte del análisis de baloncesto sigue dependiendo de observar, registrar y conectar manualmente información que ya existe en vídeo o en fuentes públicas.

Este laboratorio intenta reducir esa distancia: datos más accesibles, vídeo más estructurado y modelos que puedan ayudar a medir acciones de forma reproducible.

## Piezas actuales

- **StatsFEB** — ingesta, histórico, boxscores y analytics de competiciones FEB.
- **Basketball Video Tagger** — etiquetado de acciones, rangos, frames y exportación de clips.
- **Motion Lab** — pruebas de computer vision y modelos para identificar momentos y métricas en vídeo.

## Estado

Es un laboratorio activo. Cada pieza puede evolucionar por separado, pero la dirección común es construir una cadena de datos y vídeo que permita entrenar, validar y revisar modelos con mejor contexto.
