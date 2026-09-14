---
title: "Cómo comparar datos de vivienda sin mezclar contextos"
description: "Periodo, territorio, unidad y fuente: cuatro comprobaciones para interpretar datos de vivienda sin confundir una media con un inmueble concreto."
publishedAt: 2026-09-12
category: Datos
projects:
  - ia-compra-pisos
---

## La comparación empieza antes del gráfico

Dos cifras pueden parecer comparables porque ambas hablan de vivienda. Sin embargo, una puede describir precios de oferta de una ciudad y la otra operaciones cerradas en una provincia. Dibujarlas juntas no elimina esa diferencia.

En IA Compra Pisos, la dirección de producto parte de estructurar la información antes de interpretarla. Esta nota desarrolla ese criterio: qué contexto conviene conservar para que una comparación se pueda revisar.

## Cuatro preguntas para cada dato

- **¿Qué mide?** Precio total y precio por superficie responden a preguntas distintas. También importa si se trata de una media, una mediana o un índice.
- **¿Dónde?** Una provincia no es un barrio. La granularidad condiciona qué se puede inferir del dato.
- **¿Cuándo?** El periodo observado puede ser diferente de la fecha en la que se publica o se descarga.
- **¿De dónde sale?** La fuente y su definición permiten comprobar cómo se obtiene la cifra y si ha cambiado el criterio.

Guardar ese contexto junto al valor permite que una revisión posterior no dependa de recordar cómo se preparó el gráfico.

## Un ejemplo de comparación que conviene separar

Imagina dos entradas ficticias: una media de precios anunciados para una ciudad en un mes y una media de compraventas para toda la provincia durante un año. Aunque ambas se expresen en euros por metro cuadrado, difieren en origen, territorio y periodo.

Una salida útil puede mostrar las dos como contexto, con sus etiquetas completas. Lo que no debería hacer es presentar su diferencia como una variación temporal del mismo indicador.

La primera decisión del producto consiste en determinar si existe una base común. Si no existe, explicar el límite es más útil que producir un porcentaje aparentemente preciso.

## Qué aporta la normalización

Normalizar ayuda a unificar unidades, nombres y formatos. No convierte fuentes distintas en equivalentes. Una estructura común debe conservar las diferencias relevantes, no borrarlas para que todas las filas encajen.

Un recorrido sencillo es guardar el valor y su contexto, validar los campos necesarios y construir solo las comparaciones que ese contexto permite. Después puede añadirse una explicación legible de la señal obtenida.

## El límite de la interpretación

Un agregado territorial aporta contexto para explorar una zona; no describe por sí solo un inmueble concreto. Esta distinción forma parte del diseño de IA Compra Pisos y evita atribuir al dato una precisión que no contiene.

La siguiente evidencia del proyecto debe ser una comparación reproducible con fuentes, periodos y criterios visibles. Esta nota explica el criterio de diseño; no presenta una evaluación del producto ni una recomendación de compra.
