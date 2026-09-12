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
---

## El problema: una orden no confirma lo que ha ocurrido

Una aplicación puede indicar que ha enviado una orden sin saber si el dispositivo actuó. En domótica esa diferencia importa: un acceso, un electrodoméstico o una rutina tienen un estado físico que debe observarse, no deducirse únicamente de un comando.

Connected Home Lab explora cómo conectar esas señales con software útil y mantenible. El centro del proyecto son sensores, energía, accesos y rutinas cotidianas.

## Por qué construirlo

La motivación es integrar dispositivos y eventos físicos sin depender siempre de abrir una aplicación. Home Assistant proporciona la plataforma; Zigbee, MQTT y nodos ESP32 forman parte del espacio de integración del laboratorio.

La dirección es local siempre que resulte posible, con separación entre viviendas y una gestión que permita entender qué sucede en cada ubicación. No se da por resuelto el funcionamiento sin conexión por el simple hecho de utilizar componentes locales.

## Cómo funciona: observar, interpretar y actuar

**Acceso al garaje.** El caso combina contacto seco y sensores de estado. La orden de actuación y la observación de la puerta cumplen funciones diferentes; la segunda permite comprobar el resultado de la primera.

**Consumo energético.** La medición puede aportar señales sobre estados y ciclos de electrodomésticos. El interés está en convertirlas en eventos útiles para avisos, histórico o reglas domésticas.

**Presencia y rutinas.** NFC y sensores permiten registrar actividades mediante una interacción física sencilla. El evento puede iniciar un registro o una automatización sin convertir cada acción cotidiana en una sesión de uso de la app.

**Varias viviendas.** La arquitectura en exploración contempla dispositivos y nodos distribuidos con una capa central de gestión. La separación lógica conserva el contexto de cada ubicación.

## Decisiones: el estado físico es parte del modelo

**Distinguir orden y confirmación.** Un comando enviado y un cambio observado deben poder contarse como cosas diferentes. Esto evita presentar como completada una acción cuyo resultado aún no se conoce.

**Elegir qué debe seguir funcionando localmente.** La capa central es útil para gestionar, pero cada caso necesita revisar qué pasa si pierde conectividad. Esa decisión forma parte del diseño, no se resuelve solo eligiendo un protocolo.

**Empezar por rutinas concretas.** Un sensor aporta valor cuando su señal permite una acción o una explicación útil. La expansión del laboratorio debe seguir esos casos, no el número de dispositivos disponibles.

## Estado actual y resultado

Es un laboratorio activo. Los casos de garaje, energía y rutinas marcan el trabajo de integración; la arquitectura entre viviendas permanece en exploración. La documentación no acredita todavía una validación completa de fallos de conectividad ni una medición de ahorro energético.

El resultado que se busca demostrar es trazabilidad entre un evento físico, la regla aplicada y el estado observado después.

## Siguiente evolución

El siguiente paso es convertir un caso doméstico en un patrón reproducible: señal de entrada, comportamiento esperado, confirmación y respuesta ante una desconexión. Documentar esa prueba permitiría reutilizarlo sin asumir que todas las viviendas tienen las mismas condiciones.

La operación y observabilidad conectan con [AnderData Systems](/proyectos/anderdata-systems/); aquí el criterio adicional es que el estado del software refleje el del dispositivo.
