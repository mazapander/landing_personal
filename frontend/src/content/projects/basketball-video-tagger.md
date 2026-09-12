---
title: Basketball Video Tagger
seoTitle: "Basketball Video Tagger: etiquetar vídeo y exportar clips"
description: "Etiquetado de partidos de baloncesto con acciones, rangos temporales y exportación de clips. Del vídeo completo a ejemplos revisables para análisis y ML."
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

## El problema: un partido completo es difícil de reutilizar

Un vídeo conserva el juego, pero no ofrece por sí solo una forma de recuperar todas las acciones de un tipo, volver a un momento revisado o preparar ejemplos para un modelo. Sin estructura temporal, cada análisis empieza buscando de nuevo dentro del partido.

Basketball Video Tagger construye esa capa intermedia: acciones localizables, segmentos y un registro que permite continuar el trabajo.

## Por qué construir un etiquetador

La motivación es que la revisión manual produzca algo reutilizable. Una etiqueta debe servir para volver al vídeo y también para preparar material de análisis, clips o datasets. Persistir el progreso evita que el valor de una sesión dependa de terminar todo el partido de una vez.

Dentro de [Basketball Intelligence](/proyectos/basketball-intelligence/), Tagger conecta el vídeo bruto con ejemplos revisables antes de introducir reconocimiento automático.

## Cómo funciona: de la galería al clip

1. **Seleccionar un partido.** Una galería conserva metadatos, histórico y estado de revisión.
2. **Etiquetar la línea temporal.** Las acciones pueden ser eventos instantáneos o rangos con inicio y fin.
3. **Guardar la sesión.** La persistencia permite continuar una revisión y conservar el trabajo realizado.
4. **Preparar segmentos.** Las etiquetas sirven para planificar clips, concatenar acciones o generar tramos complementarios.
5. **Exportar material.** Los clips y manifests proporcionan una base para análisis posterior y preparación de datasets.

Cuando el vídeo dispone de FPS, también se conserva el frame asociado. El timestamp mantiene la localización temporal de la acción.

## Decisiones: etiquetas que se puedan revisar

**Separar instantes y rangos.** Un evento puntual y una secuencia no necesitan la misma representación. Conservar ambas formas permite describir acciones sin forzar todas las etiquetas a una única duración.

**Mantener la relación con el vídeo original.** Un clip es útil para revisar, pero el contexto temporal permite volver al partido completo. Ese vínculo importa cuando una etiqueta necesita corregirse o interpretarse de nuevo.

**Separar revisión y exportación.** Registrar acciones y producir archivos de vídeo tienen costes y tiempos distintos. Planificar la exportación desde las etiquetas permite reutilizar la misma revisión para varias salidas.

## Estado actual y resultado

El proyecto está en construcción. El caso documenta biblioteca de vídeos, etiquetado temporal, persistencia y generación de clips y manifests. El repositorio público permite examinar el trabajo técnico asociado.

No se publica todavía una evaluación de concordancia entre revisores ni una mejora medida en velocidad de etiquetado. Un conjunto de clips generado no equivale automáticamente a un dataset validado para entrenamiento.

## Siguiente evolución

La dirección es que humano y modelo compartan un lenguaje de acciones. Antes de automatizar más, un caso útil sería revisar un conjunto pequeño de etiquetas, corregir ambigüedades y comprobar que las exportaciones conservan el contexto necesario.

Ese ejemplo permitiría documentar una decisión real del proceso de [construcción y revisión](/como-trabajo/) y preparar evidencia para Motion Lab.
