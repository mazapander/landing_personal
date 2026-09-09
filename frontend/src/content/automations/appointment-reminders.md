---
title: Appointment Reminders
description: Convierte una cita confirmada en una secuencia de recordatorios y respuestas controladas para reducir seguimiento manual sin dejar la conversación a una IA abierta.
number: 3
status: Building
flow:
  - Appointment
  - Schedule
  - Reminder
  - Response
  - Update
tools:
  - FastAPI
  - WhatsApp
  - Scheduler
  - PostgreSQL
relatedProject: whatsapp-saas
---

## El problema

Una cita no termina cuando se guarda en la agenda. Confirmaciones, recordatorios y cambios generan trabajo repetitivo y son especialmente fáciles de olvidar cuando hay varias conversaciones abiertas.

## El flujo

El sistema programa recordatorios a partir del estado de la cita y utiliza mensajes estructurados para cubrir respuestas previsibles. La conversación solo necesita más flexibilidad cuando el usuario sale de esos caminos controlados.

```text
appointment → schedule → remind → respond → update state
```

Aquí la automatización vive principalmente en el backend y el scheduler. No fuerzo n8n cuando la lógica forma parte directa del dominio de reservas.

## Resultado esperado

Reducir seguimiento manual manteniendo estados claros y auditables. La automatización debe saber qué hacer en los casos repetibles y dejar visible cuándo una conversación necesita intervención distinta.

## Siguiente evolución

Medir confirmaciones, cambios y no-respuestas para ajustar cuándo y cómo se envían los recordatorios sin aumentar ruido para el usuario.
