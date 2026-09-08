---
title: AnderData Systems
description: Infraestructura autoalojada para desplegar, conectar, proteger y observar los productos y experimentos de AnderData.
status: Running
featured: true
stack:
  - Ubuntu
  - Docker
  - Networking
  - PostgreSQL
  - Observability
architecture:
  - title: Secure access
    description: Separación entre servicios públicos y privados, acceso remoto controlado e identidad para reducir exposición innecesaria.
  - title: Shared services
    description: Persistencia, almacenamiento y servicios comunes reutilizados por distintos proyectos sin acoplarlos entre sí.
  - title: Observability
    description: Métricas, estado de servicios y monitorización del host para detectar problemas antes de que un proyecto dependa de ellos.
capabilities:
  - Despliegue y operación de servicios autoalojados.
  - Acceso privado y exposición controlada de aplicaciones.
  - Monitorización de infraestructura y servicios.
  - Integración de sistemas con alertas y reporting.
---

## Más que un VPS

AnderData Systems es la infraestructura sobre la que pruebo muchas de las cosas que construyo.

El objetivo no es acumular servicios. Es disponer de un entorno propio donde pueda desplegar productos, conectarlos entre sí, controlar cómo se accede a ellos y aprender qué ocurre cuando una demo pasa a estar encendida todos los días.

## Vehicle Tracking System

Uno de los sistemas desplegados recibe posiciones de vehículos y mantiene histórico de recorridos. Sobre esa información he construido automatizaciones para generar alertas e informes de uso y kilómetros.

La parte interesante no es el producto base utilizado, sino la cadena completa:

```text
position → event → history → automation → report
```

## Secure Service Exposure

No todos los servicios deben estar directamente expuestos a Internet.

La infraestructura separa accesos públicos y privados y utiliza capas de red, proxy e identidad para que cada herramienta tenga únicamente la superficie necesaria.

En esta web se explica la arquitectura por capacidades y decisiones. No se publican IPs, puertos internos, credenciales ni topología operativa sensible.

## Observability

Un servicio desplegado también necesita poder diagnosticarse.

El lab mantiene monitorización del servidor Ubuntu y de distintos servicios para revisar disponibilidad, recursos y estado operativo. La siguiente evolución es hacer que alertas y automatizaciones formen una capa común para todos los proyectos.

## Visión

AnderData Systems debe evolucionar hacia una base sencilla para añadir servicios nuevos con patrones repetibles de despliegue, acceso, datos, observabilidad y automatización.
