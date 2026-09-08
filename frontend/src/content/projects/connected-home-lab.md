---
title: Connected Home Lab
description: Un laboratorio de domótica local para conectar sensores, energía, accesos y rutinas físicas entre distintas viviendas.
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

## Domótica como laboratorio de integración

Connected Home no nace para llenar una casa de dispositivos. El interés está en conectar señales físicas con software de una manera útil y mantenible.

Home Assistant actúa como plataforma de integración, pero no es el producto de la historia. Las piezas interesantes son los problemas que se resuelven alrededor.

## Multi-home architecture

Estoy explorando una arquitectura en la que distintas viviendas puedan compartir una capa central de gestión sin perder su separación lógica.

Eso obliga a pensar en conectividad, disponibilidad, dispositivos distribuidos y qué debe seguir funcionando cuando un nodo o una conexión falla.

## Garage access

Uno de los casos conecta una puerta de garaje con un relé de contacto seco y sensores de estado. El objetivo no es únicamente abrir o cerrar: es conocer el estado real, poder automatizar acciones y evitar asumir que una orden equivale a una acción completada.

## Energy monitoring

Medir consumo permite inferir estados y ciclos de electrodomésticos y generar automatizaciones sin modificar el aparato original.

La información energética puede convertirse en eventos útiles para avisos, histórico o reglas domésticas.

## Presence & routines

Etiquetas NFC, sensores y otros eventos físicos permiten registrar actividades sin depender siempre de abrir una aplicación. Es una forma sencilla de experimentar con interfaces donde el mundo físico es parte de la UI.

## Siguiente dirección

El objetivo es construir patrones reutilizables para sensores, energía, accesos y nodos remotos, manteniendo una arquitectura local, sencilla y observable.
