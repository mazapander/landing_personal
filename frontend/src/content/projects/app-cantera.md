---
title: "App Cantera"
seoTitle: "App Cantera: coordinación y gestión de equipos deportivos"
description: "Aplicación de gestión de cantera en pruebas con un par de clubes."
status: "En pruebas con un par de clubes"
featured: true
draft: false
updatedAt: "2026-10-29"
updateSummary: "La aplicación está en pruebas con un par de clubes."
stack:
  - React
  - TypeScript
  - Node.js
  - PostgreSQL
  - Docker
visual:
  label: De la planificación al seguimiento
  nodes: [Calendario, Asistencia, Carga, Seguimiento]
  outcome: Coordinación y contexto compartido para el equipo
  tone: green
architecture:
  - title: Aplicación web
    description: PWA React para calendario, disponibilidad, asistencia y seguimiento.
  - title: API y datos
    description: API Node y PostgreSQL autohospedado para permisos, datos y operaciones de equipos.
  - title: Roles
    description: Diferentes permisos para jugadores, staff y responsables según club y equipo.
capabilities:
  - Planificación y consulta de actividades por equipo.
  - Registro de asistencia, percepción del esfuerzo y molestias.
  - Gestión de equipos, perfiles e invitaciones.
  - Diseño para aislar datos y permisos por organización.
facts:
  - value: "React / PWA"
    label: interfaz
  - value: "API + Postgres"
    label: plataforma de datos
  - value: "Multi-rol"
    label: acceso
---

## El problema

La organización deportiva reparte calendario, asistencia, disponibilidad y seguimiento del esfuerzo entre conversaciones y documentos. La aplicación reúne esas tareas en una interfaz común.

## Qué se está construyendo

Una PWA con calendario y seguimiento para personas con distintos roles. El repositorio documenta una transición desde una versión de datos anterior hacia API Node y PostgreSQL, con la autenticación y los permisos separados de la lógica del cliente.

## Estado actual

La aplicación está en pruebas con un par de clubes. No se publican detalles de los clubes, resultados de las pruebas, capturas ni información de jugadores.
