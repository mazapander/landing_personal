---
title: AnderData Systems
seoTitle: "AnderData Systems: infraestructura autoalojada y observabilidad"
description: "Infraestructura autoalojada con Docker, acceso controlado, monitorización y reporting de vehículos. Decisiones de operación del laboratorio AnderData."
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

## El problema: una aplicación necesita seguir funcionando

Desplegar una demo resuelve el primer acceso. Mantener varios productos encendidos introduce otras preguntas: quién puede entrar, dónde persisten los datos, cómo detectar una caída y cómo revisar un comportamiento inesperado.

AnderData Systems es la infraestructura propia donde esas preguntas se convierten en trabajo de operación. Da soporte a productos y experimentos sin convertir cada despliegue en un entorno completamente distinto.

## Por qué construir una base compartida

El objetivo es disponer de un entorno donde desplegar, conectar y observar servicios con criterios repetibles. Ubuntu, Docker y los servicios de datos son herramientas de esa base; la historia está en cómo permiten operar sistemas que tienen que seguir siendo útiles después de la primera demostración.

Autoalojar también implica asumir mantenimiento y diagnóstico. Por eso acceso, persistencia y observabilidad forman parte del proyecto desde su definición.

## Cómo funciona: del servicio al resultado

La infraestructura combina acceso controlado, servicios compartidos de datos y almacenamiento, y monitorización del host y las aplicaciones.

Un caso concreto es el sistema de seguimiento de vehículos: recibe posiciones, conserva un histórico de recorridos y utiliza automatizaciones para producir alertas e informes de uso y kilómetros. La secuencia conecta posición, evento, histórico y reporte.

El [informe diario de vehículos](/automations/vehicle-daily-report/) explica esa transformación desde eventos hasta una salida útil. El [chequeo de infraestructura](/automations/infrastructure-health-check/) desarrolla el patrón de revisar una señal de salud antes de generar una alerta.

## Decisiones: acceso, separación y diagnóstico

**Separar servicios públicos y privados.** La necesidad de acceder remotamente a una herramienta no exige que todas las aplicaciones sean públicas. Las capas de red, proxy e identidad delimitan el acceso que necesita cada servicio.

**Compartir capacidades sin unir los productos.** La persistencia y el almacenamiento comunes reducen trabajo repetido. El criterio es reutilizar la operación sin obligar a que los proyectos dependan de los detalles internos de otros.

**Observar para poder actuar.** Saber que un proceso arrancó no basta para diagnosticar un sistema. La monitorización del host y de servicios aporta contexto sobre disponibilidad, recursos y estado operativo.

La arquitectura pública se describe mediante capacidades y decisiones. Los ejemplos se mantienen libres de configuración de acceso y datos de localización personales.

## Estado actual y resultado

La infraestructura está en funcionamiento. El caso documenta servicios autoalojados, seguimiento de vehículos con histórico, alertas e informes, y monitorización de Ubuntu y aplicaciones.

No se publica un objetivo de disponibilidad cumplido ni un ahorro operativo medido. La evidencia descrita es funcional: sistemas desplegados y flujos de información utilizados para observarlos y producir reportes.

## Siguiente evolución

La dirección es unificar patrones de despliegue, acceso, datos y alertas para incorporar servicios nuevos con menos trabajo repetido. Un futuro caso puede mostrar una incorporación concreta y los pasos necesarios para diagnosticarla.

[Connected Home Lab](/proyectos/connected-home-lab/) comparte el interés por sistemas observables, pero añade una exigencia distinta: comprobar lo que sucede en el mundo físico.
