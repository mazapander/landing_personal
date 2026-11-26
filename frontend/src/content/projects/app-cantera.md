---
title: "App Cantera"
seoTitle: "App Cantera: gestión de equipos, scouting y pizarra de baloncesto"
description: "Una app para coordinar equipos de baloncesto, preparar el scouting del rival y dibujar jugadas y ejercicios."
status: "Demo pública · En pruebas con clubes"
featured: true
externalUrl: "https://democanteras.anderdata.es/"
links:
  - label: "Entrar en la demo pública"
    url: "https://democanteras.anderdata.es/"
draft: false
updatedAt: "2026-11-26"
updateSummary: "Ya se puede probar App Cantera en una demo pública: equipos, calendario, asistencia, seguimiento, scouting con vídeo y pizarra táctica."
stack:
  - React
  - TypeScript
  - Node.js
  - PostgreSQL
  - Docker
  - Keycloak
visual:
  label: De la preparación al seguimiento del equipo
  nodes: [Calendario, Asistencia, Scouting, Pizarra]
  outcome: Sesiones, informes y jugadas en un mismo sitio
  tone: green
architecture:
  - title: Aplicación web
    description: PWA para el calendario, la asistencia, el seguimiento de carga y la preparación de partidos.
  - title: API y datos
    description: API Node y PostgreSQL autohospedado para gestionar la actividad y los contenidos de los equipos.
  - title: Acceso por club y equipo
    description: Keycloak gestiona la identidad y la aplicación aplica los permisos de jugadores, staff y responsables.
capabilities:
  - Planificación de sesiones y registro de asistencia, esfuerzo y molestias.
  - Informes de scouting con vídeo, documentos y comentarios ligados a un momento del vídeo.
  - Pizarra de media pista o pista completa para dibujar jugadas y ejercicios paso a paso.
  - Listín de jugadas por equipo y material de scouting con acceso reservado al staff cuando corresponde.
facts:
  - value: "Scouting"
    label: vídeo e informes
  - value: "Pizarra"
    label: jugadas y ejercicios
  - value: "Multi-rol"
    label: acceso por equipo
---

## El problema

Como entrenador, preparo sesiones, reviso vídeo y hago seguimiento de los jugadores. Es fácil acabar con el calendario en un sitio, los cortes del rival en otro y las jugadas repartidas entre mensajes y documentos.

## Qué permite hacer

Además de llevar el calendario, la asistencia y la carga, el staff puede preparar el scouting de un rival, adjuntar material y dejar un comentario en el segundo exacto del vídeo en el que ocurre la acción. En la pizarra puede dibujar movimientos por pasos y guardar las jugadas en el listín del equipo. La misma pizarra sirve para preparar los ejercicios de un entrenamiento.

## Estado actual

La app sigue evolucionando y ya la están probando varios clubes. También hay una [demo pública](https://democanteras.anderdata.es/) para explorar sus módulos y probar los flujos disponibles sin necesitar acceso a los datos de un club real.

## Prueba la demo

Entra en **[democanteras.anderdata.es](https://democanteras.anderdata.es/)** y descubre cómo se conectan la organización del equipo, los entrenamientos y la preparación de partidos. Si entrenas o trabajas en un club, me interesa especialmente saber qué te resulta útil y qué mejorarías.
