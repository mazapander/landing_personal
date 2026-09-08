---
title: Industrial Cutting Optimizer
description: Sistema de decisión para asignar piezas a stock y reducir desperdicio de materia prima bajo restricciones de fabricación.
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

## Un problema de decisión, no otro CRUD

Cuando una operación corta materia prima, una pequeña mejora en cómo se asignan piezas a barras puede traducirse en menos desperdicio y mejores decisiones de stock.

El proyecto explora cómo convertir ese problema en un sistema revisable en lugar de ocultar la decisión dentro de una fórmula.

## Primero las restricciones

Antes de optimizar hay que representar correctamente el dominio: dimensiones, material, stock disponible, compatibilidades y decisiones que debe conservar el operario.

Por eso el solver vive separado de la capa de aplicación. Esto permite comparar una estrategia baseline con motores de optimización más avanzados sin acoplar toda la solución a una única implementación.

## Optimización con revisión humana

La UI permite limitar explícitamente qué barras entran en una ejecución de optimización. El objetivo es que la herramienta proponga una asignación útil sin eliminar el contexto operativo del usuario.

La dirección técnica contempla un motor con OR-Tools y una capa de adaptación preparada para futuras fuentes de stock.

## Por qué está en AnderData

Es una pieza diferente a los proyectos de IA generativa: demuestra que resolver un problema con software puede significar modelar restricciones, construir un sistema de decisión y utilizar optimización matemática cuando es la herramienta adecuada.
