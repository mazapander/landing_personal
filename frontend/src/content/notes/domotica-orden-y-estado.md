---
title: "Domótica: enviar una orden no confirma el estado del dispositivo"
description: "Cómo distinguir una orden enviada, un cambio observado y un estado desconocido al diseñar automatizaciones domésticas con sensores."
publishedAt: 2026-09-12
category: Sistemas
projects:
  - connected-home-lab
  - anderdata-systems
---

## Dos eventos que no significan lo mismo

Una automatización manda una orden y la interfaz muestra éxito. ¿Qué ha tenido éxito: el envío, la recepción o el cambio físico? Si el sistema no distingue esos momentos, puede comunicar una certeza que todavía no tiene.

Connected Home Lab utiliza el caso del garaje para plantear esta diferencia. El contacto seco permite actuar; el sensor aporta una observación del estado. Son dos funciones distintas dentro de la misma automatización.

## Modelar lo que se sabe

Una estructura mínima puede conservar tres datos: la orden solicitada, la última observación y el momento en el que se recibió esa observación. No hace falta empezar con un motor general de estados para explicar esa diferencia.

Cuando llega una orden, el sistema registra la intención. Cuando llega una señal del sensor, actualiza la observación. Si no llega confirmación, la ausencia de información no debería convertirse en un estado físico inventado.

Esto permite que la interfaz distinga mensajes como «orden enviada» y «estado confirmado», en lugar de utilizar una única etiqueta de éxito para todo el recorrido.

## Un escenario de prueba sencillo

Considera este ejemplo conceptual, no una prueba ya realizada en el laboratorio:

1. El sistema recibe una petición de actuación.
2. Se envía la orden al dispositivo.
3. La comunicación con el sensor se interrumpe.
4. La interfaz conserva la última observación e indica que falta confirmación actual.

El resultado esperado no es asumir que el dispositivo se movió, ni que permaneció igual. Es reconocer que la observación disponible no permite confirmar el resultado de esa orden.

## Por qué importa la antigüedad de la señal

Una observación válida hace un rato puede no explicar lo que sucede ahora. Conservar su fecha ayuda a distinguir el último estado conocido de una confirmación reciente.

La regla para considerar una señal demasiado antigua depende del caso y de cómo informa el sensor. Lo importante es que sea una decisión explícita y que el usuario pueda entender cuándo el sistema está esperando información.

## Del dispositivo a la operación

El mismo criterio conecta con la observabilidad de AnderData Systems: recibir una señal no equivale a conocer todo el estado del sistema. Conviene identificar qué prueba cada comprobación y qué deja sin resolver.

En Connected Home, el siguiente paso documentado es probar una rutina concreta ante una desconexión. La nota fija el criterio de diseño; no acredita todavía tolerancia a fallos validada ni describe una instalación eléctrica.
