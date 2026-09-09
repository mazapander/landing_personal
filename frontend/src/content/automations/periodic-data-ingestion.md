---
title: Periodic Data Ingestion
description: Automatiza la actualización de fuentes públicas para que los productos trabajen con datos recientes sin rehacer cargas completas ni revisar cada fuente a mano.
number: 2
status: Running
flow:
  - Source
  - Validate
  - Normalize
  - Persist
  - Alert
tools:
  - n8n
  - APIs
  - PostgreSQL
  - Python
relatedProject: ia-compra-pisos
---

## El problema

Los productos basados en datos públicos pierden valor si actualizar una fuente exige acordarse de ejecutar un script, descargar un fichero o repetir una carga completa.

## El flujo

La automatización consulta la fuente con la frecuencia adecuada, valida que la respuesta sea utilizable, normaliza los datos y persiste únicamente lo necesario. Si algo no cuadra, el flujo termina en una alerta en vez de ocultar el fallo.

```text
source → validate → normalize → persist → alert
```

n8n se utiliza para coordinar tareas periódicas y conectar fuentes, procesos de transformación y notificaciones. La lógica específica sigue viviendo donde resulta más fácil de probar y mantener.

## Resultado

Las ingestas pasan de ser una tarea de mantenimiento manual a una capacidad del producto. El objetivo es que una nueva fuente pueda añadirse siguiendo el mismo patrón sin duplicar toda la infraestructura.

## Siguiente evolución

Unificar métricas de ejecución, última actualización y errores para poder observar varias ingestas desde una misma capa operativa.
