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
architecture:
  - title: Fuentes de información
    description: El caso parte de datos y señales dispersas que necesitan una estructura común.
  - title: Capa de análisis
    description: La IA se plantea como apoyo para clasificar, resumir y priorizar información.
capabilities:
  - Normalización de información inmobiliaria.
  - Priorización de señales para análisis posterior.
  - Base preparada para iterar sobre criterios de decisión.
---

## El problema: comparar viviendas sin un contexto común

Un precio de venta aislado explica poco. Para interpretar una vivienda hace falta situarla en un territorio, entender qué se está comparando y conocer de dónde procede la información. Cuando esas señales están dispersas, una comparación puede mezclar ámbitos geográficos, periodos y criterios distintos sin que el lector lo perciba.

IA Compra Pisos nace para explorar esa distancia entre disponer de datos y poder utilizarlos en una decisión. La pregunta de producto es concreta: ¿qué contexto ayuda a entender un precio y el esfuerzo que representa?

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

## Estado actual y resultado

El caso continúa en evolución. La documentación disponible define la dirección de análisis y normalización; no aporta todavía una evaluación pública de precisión, ahorro de tiempo o impacto en decisiones de compra. Por eso esta historia explica el enfoque sin atribuirle resultados cuantitativos.

## Siguiente evolución

La siguiente evidencia útil será una comparación reproducible: fuentes identificadas, ámbito y periodo visibles, criterios explicados y límites señalados. Ese ejemplo permitirá revisar si el producto aclara una pregunta real antes de ampliar su alcance.

El proceso de convertir esa pregunta en un contrato revisable conecta con [Building how I build](/como-trabajo/).
