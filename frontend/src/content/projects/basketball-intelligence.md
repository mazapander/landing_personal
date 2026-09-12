---
title: Basketball Intelligence
seoTitle: "Basketball Intelligence: datos y análisis de vídeo de baloncesto"
description: "Datos de competiciones, etiquetado de partidos y visión por computador: un laboratorio de análisis de baloncesto con evidencia revisable."
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

## El problema: datos y vídeo cuentan partes distintas del partido

Una estadística permite localizar un patrón, pero no siempre explica la acción que lo produjo. Un vídeo conserva ese contexto, aunque revisarlo y registrar lo relevante requiere trabajo manual. Cuando ambos viven separados, el análisis obliga a reconstruir una y otra vez la relación entre partido, jugador y acción.

Basketball Intelligence organiza ese problema en tres piezas: datos de competiciones, vídeo etiquetado y experimentación con visión por computador.

## Por qué construir un ecosistema

La motivación es acercar el análisis deportivo a una cadena de información revisable. Cada pieza puede ser útil por separado, pero juntas plantean una dirección más interesante: que una pregunta sobre el juego pueda contrastarse con datos y ejemplos de vídeo.

Agruparlas no significa que exista ya una integración automática completa. Es una arquitectura de trabajo que permite avanzar sin condicionar todos los proyectos al mismo ritmo.

## Cómo funciona: tres capas de contexto

1. **Datos estructurados.** [StatsFEB](/proyectos/stats-feb/) trabaja la ingesta, el histórico y los boxscores de competiciones FEB. Es la capa que organiza partidos, jugadores y competiciones.
2. **Vídeo etiquetado.** [Basketball Video Tagger](/proyectos/basketball-video-tagger/) registra acciones y segmentos temporales. Convierte un partido completo en ejemplos localizables y revisables.
3. **Visión por computador.** Motion Lab explora detección y medición a partir de vídeo. Su papel es experimentar con reconocimiento automático y contrastarlo con observación humana.

El recorrido conceptual es datos estructurados, acciones etiquetadas y modelos contrastables. El dato aporta contexto; el vídeo permite volver a observar lo que sucedió.

## Decisiones: conservar el camino de vuelta a la acción

**Dar identidad propia a cada pieza.** La ingesta deportiva y la edición temporal de vídeo tienen necesidades diferentes. Mantenerlas separadas permite mejorar una herramienta sin rehacer las otras.

**Etiquetar antes de automatizar.** Un ejemplo revisado ayuda a precisar qué se considera una acción. Ese lenguaje compartido es una base más útil para evaluar un modelo que una demostración visual sin criterio de comparación.

**Tratar los modelos como experimentos.** Detectar un movimiento no implica haber medido correctamente una acción deportiva. El laboratorio necesita ejemplos, revisión y límites explícitos antes de convertir una salida del modelo en una métrica de uso habitual.

## Estado actual y resultado

Es un laboratorio activo con tres líneas de trabajo documentadas. StatsFEB aporta el trabajo sobre datos e histórico; Tagger desarrolla la estructura temporal y los clips; Motion Lab mantiene la exploración de visión por computador.

No se presenta todavía un benchmark común ni un flujo integrado validado de extremo a extremo. El resultado de esta organización es una dirección técnica compartida con piezas que pueden evolucionar por separado.

## Siguiente evolución

El siguiente caso demostrable debería seguir una pregunta concreta desde el dato hasta el clip y su revisión. Hará falta identificar el partido, definir la acción y comprobar si los ejemplos permiten evaluar una detección de forma consistente.

Ese recorrido puede convertirse después en un caso de [Building how I build](/como-trabajo/), mostrando decisiones y límites con artefactos reales.
