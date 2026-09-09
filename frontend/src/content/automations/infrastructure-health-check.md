---
title: Infrastructure Health Check
description: Reúne señales de disponibilidad y estado de servicios para convertir fallos de infraestructura en alertas accionables antes de descubrirlos al abrir una aplicación.
number: 4
status: Building
flow:
  - Metrics & health
  - Evaluate
  - Enrich
  - Alert
  - Review
tools:
  - Monitoring
  - n8n
  - Ubuntu
  - Docker
relatedProject: anderdata-systems
---

## El problema

Un servidor puede estar encendido y, aun así, una aplicación concreta haber dejado de responder. Revisar manualmente host, contenedores y servicios no escala cuando la infraestructura empieza a sostener varios proyectos.

## El flujo

La automatización recoge señales de salud y disponibilidad, evalúa condiciones relevantes y añade contexto antes de generar una alerta.

```text
health signal → evaluate → enrich → alert → review
```

La intención no es alertar por cualquier cambio. El flujo debe reducir ruido y señalar situaciones que realmente requieren revisar un servicio o el host.

## Resultado esperado

Detectar antes los fallos y evitar que la primera señal sea intentar usar un producto y descubrir que no está disponible.

## Siguiente evolución

Distinguir mejor entre host, servicio y dependencia, incorporar histórico de incidencias y reutilizar el mismo patrón de alertas en nuevos servicios desplegados en AnderData Systems.
