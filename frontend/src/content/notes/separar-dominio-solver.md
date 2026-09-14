---
title: "Por qué separar las reglas de corte del solver de optimización"
description: "Cómo mantener restricciones, selección de stock y revisión humana al comparar estrategias para asignar piezas a barras de materia prima."
publishedAt: 2026-09-12
category: Desarrollo
projects:
  - industrial-cutting-optimizer
---

## El algoritmo no define qué solución es válida

En un problema de corte, el objetivo puede ser aprovechar material. Pero una asignación que utilice una barra incompatible o un stock que el usuario ha excluido no sirve, por poco desperdicio que prometa.

Industrial Cutting Optimizer parte de esa separación: las piezas, las barras y las restricciones representan el problema; el solver busca una propuesta dentro de ese contexto.

## Qué conviene mantener en el dominio

Las dimensiones, la compatibilidad del material y el stock elegible deben poder explicarse sin depender del motor de optimización elegido. Son entradas y reglas de la decisión operativa.

El solver necesita una representación de esas reglas para calcular. Separarlo no significa que pueda ignorarlas, sino que el criterio que las define sigue siendo reconocible cuando cambia el método de búsqueda.

Una frontera pequeña entre entradas del problema y resultado calculado suele bastar para empezar. No hace falta construir un catálogo de motores intercambiables antes de tener una comparación real que realizar.

## Una comparación útil exige las mismas entradas

Supongamos un ejemplo de evaluación pendiente: una estrategia de referencia y un solver reciben la misma demanda y el mismo conjunto de barras autorizadas.

Antes de comparar desperdicio o tiempo, hay que revisar que ambas propuestas respetan las restricciones. Si una usa material excluido y la otra no, la comparación de rendimiento deja de responder a la misma pregunta.

Un registro de evaluación sencillo puede conservar las entradas, las restricciones consideradas, la propuesta y el tiempo de ejecución. Así se puede repetir el caso cuando cambie la estrategia.

## La selección de stock es una decisión del usuario

Una barra presente en el inventario no tiene por qué estar disponible para esa ejecución. Permitir al usuario delimitar el stock mantiene una parte del contexto operativo fuera de las decisiones automáticas del solver.

Este control está documentado en el prototipo. La integración futura con otra fuente de stock debería conservar esa distinción entre inventario conocido y material elegible.

## Cuándo merece la pena añadir complejidad

La separación es útil si permite probar otra estrategia, revisar restricciones o integrar una fuente sin rehacer todo el sistema. Si una abstracción no facilita ninguno de esos cambios, conviene mantener una implementación más directa.

OR-Tools forma parte de la dirección técnica del proyecto. El caso todavía necesita una comparación reproducible antes de atribuir mejoras cuantitativas o afirmar que una solución es óptima.

La siguiente prueba debería responder primero si las propuestas son válidas y después qué mejora aporta el método elegido. Ese orden mantiene la optimización al servicio de la decisión.
