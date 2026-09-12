---
title: Industrial Cutting Optimizer
seoTitle: "Industrial Cutting Optimizer: optimización de cortes y stock"
description: "Optimización de cortes de materia prima: asignar piezas a barras, modelar restricciones y revisar propuestas de stock con control humano."
status: Prototype
featured: false
externalUrl: https://github.com/mazapander/CortesMateriaPrima
stack:
  - Python
  - OR-Tools
  - Optimization
  - APIs
architecture:
  - title: Domain constraints
    description: Piezas, barras, calidades de material y restricciones se modelan antes de pedir al solver una solución.
  - title: Solver layer
    description: El motor de optimización se mantiene desacoplado para poder comparar baseline, heurísticas y OR-Tools.
  - title: Human decision
    description: El usuario mantiene control sobre el stock considerado y puede revisar la propuesta antes de aceptarla.
capabilities:
  - Modelado de restricciones operativas.
  - Optimización de materia prima y reducción de desperdicio.
  - Separación entre dominio, solver e integración.
  - Base preparada para integración con fuentes de stock o ERP.
links:
  - label: Repositorio público
    url: https://github.com/mazapander/CortesMateriaPrima
---

## El problema: aprovechar material bajo restricciones reales

Asignar piezas a barras de materia prima exige algo más que sumar longitudes. Importan las dimensiones, la compatibilidad del material, el stock disponible y las decisiones que deben conservarse en la operación.

Industrial Cutting Optimizer explora cómo representar ese contexto y generar una propuesta revisable. Reducir desperdicio es el objetivo; para evaluar una propuesta primero debe ser válida para la fabricación.

## Por qué construir un sistema de decisión

El interés está en sacar los criterios de asignación de una fórmula opaca y convertirlos en un modelo que pueda inspeccionarse. El usuario necesita saber qué stock participa y poder revisar la solución antes de aceptarla.

Este proyecto representa otra forma de resolver problemas con software: modelado de restricciones y optimización matemática. La elección de un solver viene después de entender la decisión operativa.

## Cómo funciona: del stock a una propuesta

1. **Representar el dominio.** Modelar piezas, barras, dimensiones, materiales y compatibilidades.
2. **Delimitar el stock.** El usuario selecciona qué barras pueden participar en una ejecución.
3. **Calcular una asignación.** La capa de solver produce una propuesta a partir de esas entradas y restricciones.
4. **Revisar el resultado.** La decisión humana conserva el contexto operativo antes de aceptar la propuesta.

La separación entre dominio, solver e integración permite comparar estrategias sin trasladar las reglas de fabricación a cada interfaz o fuente de datos.

## Decisiones: validez antes de optimización

**Desacoplar el solver.** La dirección técnica permite contrastar una estrategia de referencia, heurísticas y un motor con OR-Tools. Cambiar el método de búsqueda no debería exigir reescribir la definición de una pieza o una barra.

**Hacer explícito el stock elegible.** Una barra disponible en el sistema puede no ser la que el operario quiere utilizar en una ejecución. Mantener esa selección como entrada evita que la optimización elimine una decisión que corresponde al usuario.

**Separar el resultado de su aceptación.** Una asignación calculada es una propuesta. Presentarla para revisión conserva la posibilidad de detectar restricciones o circunstancias que todavía no estén modeladas.

## Estado actual y resultado

Es un prototipo con repositorio público. La documentación describe selección de barras desde la interfaz y separación del dominio y el solver. OR-Tools y la adaptación a fuentes de stock forman parte de la dirección técnica; no se afirma una integración ERP completada.

Tampoco se atribuye al prototipo un porcentaje de reducción de desperdicio ni un óptimo demostrado. Esos resultados requieren comparar ejecuciones sobre el mismo stock, demanda y restricciones.

## Siguiente evolución

La siguiente evidencia útil es un caso reproducible con datos saneados: entradas, restricciones, propuesta de referencia y propuesta del solver. La revisión debería comprobar primero la validez y después comparar desperdicio y tiempo de cálculo.

Ese caso puede alimentar [Building how I build](/como-trabajo/) con una decisión verificable sobre cuándo una capa de optimización aporta valor y qué complejidad merece introducir.
