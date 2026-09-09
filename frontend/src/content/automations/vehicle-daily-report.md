---
title: Vehicle Daily Report
description: Convierte posiciones e histórico de recorridos en un resumen diario de kilómetros y actividad sin revisar manualmente el sistema de tracking.
number: 1
status: Running
flow:
  - Position data
  - Daily aggregation
  - Distance & events
  - Report
  - Notification
tools:
  - n8n
  - APIs
  - Tracking data
  - Telegram
relatedProject: anderdata-systems
---

## El problema

Tener histórico de posiciones no significa tener información útil. Revisar recorridos uno a uno para saber cuánto se ha utilizado un vehículo o cuántos kilómetros ha hecho convierte un sistema de tracking en otra tarea manual.

## El flujo

La automatización consulta los datos del periodo, agrupa las posiciones y eventos relevantes, prepara un resumen del recorrido y entrega un informe compacto.

```text
tracking data → aggregate → calculate → report → notify
```

n8n actúa como capa de orquestación: conecta la fuente, ejecuta las transformaciones necesarias y entrega el resultado sin acoplar el reporting al sistema que almacena las posiciones.

## Resultado

El histórico deja de ser algo que hay que abrir y revisar. La información llega ya convertida en un resumen operativo de uso y kilómetros.

## Siguiente evolución

Comparar periodos, detectar anomalías sencillas y reutilizar la misma base para informes mensuales sin duplicar lógica.
