---
title: SaaS de citas por WhatsApp
description: Gestiona reservas, cambios y recordatorios por WhatsApp con un flujo que sigue por texto si una plantilla falla durante la conversación.
status: En desarrollo
featured: true
updatedAt: "2026-11-25"
updateSummary: "El flujo de citas puede seguir por texto dentro de la ventana de atención. La app ya crea, versiona y retira las plantillas de WhatsApp automáticamente."
externalUrl: https://citas.anderdata.es/comercial
stack:
  - TypeScript
  - React
  - FastAPI
  - PostgreSQL
  - Docker
  - LangChain
  - Twilio
visual:
  label: De una conversación a una cita gestionada
  nodes: [Mensaje, Reglas, Agenda, Recordatorio]
  outcome: Reservas trazables con menos trabajo manual
  tone: green
architecture:
  - title: Canal conversacional
    description: WhatsApp ofrece botones cuando hay una plantilla utilizable y puede mostrar las mismas opciones en texto durante la ventana de atención.
  - title: Reglas e IA
    description: Las reglas controlan los pasos de la reserva y el modelo ayuda a interpretar mensajes en lenguaje natural.
  - title: Plantillas definidas en código
    description: La aplicación sincroniza con Twilio las versiones de las plantillas y conserva la versión activa mientras se aprueba su sustituta.
capabilities:
  - Reservas, cambios de cita, cancelaciones y recordatorios.
  - Continuidad del flujo por texto si falta una plantilla válida dentro de la ventana de atención de WhatsApp.
  - Alta, solicitud de aprobación, activación y retirada automatizadas de las plantillas gestionadas por la app.
links:
  - label: Web del producto
    url: https://citas.anderdata.es/comercial
facts:
  - value: WhatsApp
    label: canal de atención
  - value: Citas
    label: gestión de agenda
  - value: Recordatorios
    label: automatización
---

## El problema

Uno de los fallos que más tiempo me ha llevado resolver aparecía en mitad de una reserva. Si la plantilla que mostraba los huecos no estaba disponible, la conversación se interrumpía y alguien tenía que retomarla.

## Cómo sigue la conversación

Dentro de la ventana de atención de 24 horas, si la plantilla falta, no está aprobada o falla al enviarse, la app puede mandar el mismo paso en texto con opciones numeradas. La persona puede seguir eligiendo su cita en la misma conversación.

## Cómo se gestionan las plantillas

Las plantillas se definen y versionan en código. La app las crea en Twilio, solicita su aprobación y mantiene la versión anterior activa hasta que la nueva está aprobada. Entonces activa la nueva versión y retira la anterior. Así, la gestión habitual queda automatizada y se conserva el paso de aprobación de WhatsApp.
