---
title: IA Compra Pisos
seoTitle: "IA Compra Pisos: análisis de vivienda con datos públicos"
description: "Análisis de vivienda con datos públicos: cómo estructurar precios, contexto y criterios comparables para apoyar una decisión de compra."
status: Caso en evolución
featured: true
stack:
  - Python
  - IA
  - Datos
visual:
  label: De fuentes públicas a una señal comparable
  nodes: [Fuentes públicas, Contexto normalizado, Indicadores, Comparación]
  outcome: Una decisión inmobiliaria con contexto
  tone: coral
architecture:
  - title: Fuentes de información
    description: El caso parte de datos y señales dispersas que necesitan una estructura común.
  - title: Capa de análisis
    description: La IA se plantea como apoyo para clasificar, resumir y priorizar información.
capabilities:
  - Normalización de información inmobiliaria.
  - Priorización de señales para análisis posterior.
  - Base preparada para iterar sobre criterios de decisión.
updatedAt: "2026-09-28"
updateSummary: "Historia actualizada con diagramas del caso e hitos verificables."
facts:
- value: Vivienda
  label: dominio de análisis
- value: Fuentes públicas
  label: origen del contexto
- value: Precio + esfuerzo
  label: pregunta de producto
milestones:
- title: Criterios de comparación definidos
  description: Territorio, periodo, unidad y fuente forman el contrato de comparación.
  status: done
  evidence:
    label: Ver el caso documentado
    href: /ideas/comparar-datos-vivienda/
- title: Normalización y análisis
  description: Estructurar las señales para comparar vivienda con su contexto.
  status: in-progress
- title: Comparación reproducible
  description: Publicar un ejemplo con fuentes, periodos y criterios visibles.
  status: planned
evidence:
- title: Qué hace comparable un dato
  kind: Diagrama documentado
  caption: Contrato de comparación descrito en la nota del proyecto; no representa un resultado de
    mercado.
  steps:
  - title: Fuente
    detail: Procedencia y definición
  - title: Territorio y periodo
    detail: Mismo ámbito de observación
  - title: Unidad
    detail: Precio, superficie o índice
  - title: Comparación
    detail: Señales con contexto compatible
  source:
    label: Ver explicación
    href: /ideas/comparar-datos-vivienda/
- title: Del precio a la pregunta de compra
  kind: Diagrama documentado
  caption: Mapa del enfoque de análisis documentado. La demostración reproducible figura como próximo
    hito.
  steps:
  - title: Precio aislado
    detail: Una cifra de partida
  - title: Contexto territorial
    detail: Qué se está comparando
  - title: Esfuerzo
    detail: Qué representa para la compra
  - title: Criterio revisable
    detail: Volver a la fuente y a sus límites
  source:
    label: Ver explicación
    href: '#cómo-funciona-de-la-fuente-a-una-señal-revisable'
---

## El problema: comparar viviendas sin un contexto común

Un precio de venta aislado explica poco. Para interpretar una vivienda hace falta situarla en un territorio, entender qué se está comparando y conocer de dónde procede la información. Cuando esas señales están dispersas, una comparación puede mezclar ámbitos geográficos, periodos y criterios distintos sin que el lector lo perciba.

IA Compra Pisos nace para explorar esa distancia entre disponer de datos y poder utilizarlos en una decisión. La pregunta de producto es concreta: ¿qué contexto ayuda a entender un precio y el esfuerzo que representa?

## Estado actual y resultado

La base editorial del proyecto fija los criterios de comparación: fuente, territorio, periodo y unidad. La normalización y el análisis están en evolución. El siguiente entregable es una comparación reproducible con su contexto visible.

## Por qué construirlo

El interés está en convertir datos públicos de vivienda en una lectura comprensible. Un panel con muchos indicadores puede seguir dejando al usuario con la misma duda. El proyecto busca una base en la que cada señal tenga una explicación y pueda contrastarse, antes de añadir más capas de análisis.

La dirección es apoyar la comparación y hacer explícitos sus criterios. El caso no presenta una tasación individual ni una promesa de encontrar oportunidades rentables.

## Cómo funciona: de la fuente a una señal revisable

1. **Reunir información.** Identificar las fuentes y el contexto que aporta cada una al análisis de vivienda.
2. **Estructurarla.** Dar una forma común a datos que llegan con distintos nombres, periodos o niveles de detalle.
3. **Construir criterios comparables.** Explicar qué se puede relacionar y dónde la comparación pierde sentido.
4. **Presentar contexto.** Facilitar una lectura de precio y esfuerzo que permita volver al dato de origen.

Este es el flujo que guía el caso. La [ingesta periódica de datos](/automations/periodic-data-ingestion/) desarrolla el patrón de validación, normalización y persistencia que necesita una base analítica mantenible.

## Decisiones: estructura antes de interpretación

**Hacer visibles los límites de comparación.** Un dato agregado describe un contexto; no identifica por sí solo el valor de una vivienda concreta. Mantener esa distinción evita que una cifra precisa aparente responder a una pregunta diferente.

**Usar IA sobre una base revisable.** Clasificar o resumir puede ayudar a explorar información, pero no resuelve las inconsistencias de origen. La dirección técnica empieza por estructurar datos y criterios, y reserva la IA como apoyo a la lectura.

**Priorizar una pregunta de usuario.** Añadir indicadores tiene sentido cuando mejora una comparación. El criterio de producto es qué decisión aclara cada dato, no cuántas métricas caben en pantalla.

## Siguiente evolución

La siguiente evidencia útil será una comparación reproducible: fuentes identificadas, ámbito y periodo visibles, criterios explicados y límites señalados. Ese ejemplo permitirá revisar si el producto aclara una pregunta real antes de ampliar su alcance.

El proceso de convertir esa pregunta en un contrato revisable conecta con [Building how I build](/como-trabajo/).
