---
title: Connected Home Lab
seoTitle: "Connected Home Lab: domótica local con Home Assistant"
description: "Domótica local con Home Assistant, sensores y Zigbee: estado del garaje, consumo y rutinas. Decisiones y límites de una arquitectura entre viviendas."
status: Active lab
featured: true
stack:
  - Home Assistant
  - Zigbee
  - MQTT
  - ESP32
  - Automation
visual:
  label: Del evento físico a un estado confirmado
  nodes: [Sensor, Evento, Regla local, Estado observado]
  outcome: Automatización doméstica trazable
  tone: amber
architecture:
  - title: Multi-home
    description: Un sistema central con dispositivos y nodos distribuidos entre distintas ubicaciones, manteniendo separación lógica por vivienda.
  - title: Local first
    description: Sensores, relés y automatizaciones funcionan de forma local siempre que es posible, reduciendo dependencia de servicios externos.
  - title: Physical events
    description: NFC, consumos, aperturas y estados físicos se convierten en eventos que pueden medirse, automatizarse o registrarse.
capabilities:
  - Integración de dispositivos y protocolos IoT.
  - Automatización de accesos y rutinas domésticas.
  - Monitorización de energía y estados de dispositivos.
  - Diseño de nodos distribuidos y control central.
updatedAt: "2026-09-28"
updateSummary: "Historia actualizada con diagramas del caso e hitos verificables."
facts:
- value: Home Assistant
  label: plataforma del laboratorio
- value: Orden ≠ estado
  label: criterio de confirmación
- value: Local first
  label: dirección de diseño
milestones:
- title: Modelo de orden y confirmación definido
  description: Separación entre una orden enviada y un cambio físico observado.
  status: done
  evidence:
    label: Ver el caso documentado
    href: /ideas/domotica-orden-y-estado/
- title: Integración de garaje, energía y rutinas
  description: Casos activos de sensores y automatización doméstica.
  status: in-progress
- title: Prueba ante desconexión
  description: Documentar el resultado observado cuando se pierde la señal.
  status: planned
- title: Patrón entre viviendas
  description: Reutilizar el caso conservando contexto y separación por ubicación.
  status: planned
evidence:
- title: 'Garaje: actuar y comprobar'
  kind: Diagrama documentado
  caption: Diseño documentado del caso de garaje. El sensor confirma el estado, no el envío de la
    orden.
  steps:
  - title: Orden
    detail: Solicitud de actuación
  - title: Contacto seco
    detail: Acciona el mecanismo
  - title: Sensor
    detail: Observa el estado físico
  - title: Confirmación
    detail: Relaciona orden y observación
  source:
    label: Ver explicación
    href: /ideas/domotica-orden-y-estado/
- title: Qué mostrar cuando falta una señal
  kind: Diagrama documentado
  caption: Escenario de diseño para la futura prueba de desconexión; no es una prueba ya ejecutada.
  steps:
  - title: Última observación
    detail: Estado conocido y su fecha
  - title: Pérdida de señal
    detail: Falta confirmación actual
  - title: Estado desconocido
    detail: Conservar el límite de información
  - title: Nueva observación
    detail: Actualizar el estado confirmado
  source:
    label: Ver explicación
    href: /ideas/domotica-orden-y-estado/
---

## El problema: una orden no confirma lo que ha ocurrido

Una aplicación puede indicar que ha enviado una orden sin saber si el dispositivo actuó. En domótica esa diferencia importa: un acceso, un electrodoméstico o una rutina tienen un estado físico que debe observarse, no deducirse únicamente de un comando.

Connected Home Lab explora cómo conectar esas señales con software útil y mantenible. El centro del proyecto son sensores, energía, accesos y rutinas cotidianas.

## Estado actual y resultado

El laboratorio trabaja sobre garaje, energía y rutinas con Home Assistant. El criterio de orden y confirmación está documentado; la integración y la arquitectura entre viviendas siguen en desarrollo. El siguiente entregable es una prueba de desconexión de un caso doméstico.

## Por qué construirlo

La motivación es integrar dispositivos y eventos físicos sin depender siempre de abrir una aplicación. Home Assistant proporciona la plataforma; Zigbee, MQTT y nodos ESP32 forman parte del espacio de integración del laboratorio.

La dirección es local siempre que resulte posible, con separación entre viviendas y una gestión que permita entender qué sucede en cada ubicación. La prueba de desconexión figura como un hito explícito del laboratorio.

## Cómo funciona: observar, interpretar y actuar

**Acceso al garaje.** El caso combina contacto seco y sensores de estado. La orden de actuación y la observación de la puerta cumplen funciones diferentes; la segunda permite comprobar el resultado de la primera.

**Consumo energético.** La medición puede aportar señales sobre estados y ciclos de electrodomésticos. El interés está en convertirlas en eventos útiles para avisos, histórico o reglas domésticas.

**Presencia y rutinas.** NFC y sensores permiten registrar actividades mediante una interacción física sencilla. El evento puede iniciar un registro o una automatización sin convertir cada acción cotidiana en una sesión de uso de la app.

**Varias viviendas.** La arquitectura en exploración contempla dispositivos y nodos distribuidos con una capa central de gestión. La separación lógica conserva el contexto de cada ubicación.

## Decisiones: el estado físico es parte del modelo

**Distinguir orden y confirmación.** Un comando enviado y un cambio observado deben poder contarse como cosas diferentes. Esto evita presentar como completada una acción cuyo resultado aún no se conoce.

**Elegir qué debe seguir funcionando localmente.** La capa central es útil para gestionar, pero cada caso necesita revisar qué pasa si pierde conectividad. Esa decisión forma parte del diseño, no se resuelve solo eligiendo un protocolo.

**Empezar por rutinas concretas.** Un sensor aporta valor cuando su señal permite una acción o una explicación útil. La expansión del laboratorio debe seguir esos casos, no el número de dispositivos disponibles.

## Siguiente evolución

El siguiente paso es convertir un caso doméstico en un patrón reproducible: señal de entrada, comportamiento esperado, confirmación y respuesta ante una desconexión. Documentar esa prueba permitiría reutilizarlo sin asumir que todas las viviendas tienen las mismas condiciones.

La operación y observabilidad conectan con [AnderData Systems](/proyectos/anderdata-systems/); aquí el criterio adicional es que el estado del software refleje el del dispositivo.
