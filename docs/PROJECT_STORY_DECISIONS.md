# Registro inicial de decisiones — Project stories

Artefacto de Fase 5 para la evolución de [Building how I build](./HOW_I_BUILD_EVOLUTION.md). Fuente común: `CONTENT_ARCHITECTURE.md` y contenido de proyectos del commit `56e6d9956dddf1f44ef652f6dcb8997e998f1014`. Esta recopilación editorial no sustituye contratos originales, benchmarks ni revisión de los repositorios enlazados.

## 01 — Estructura antes de IA

- Proyecto y fuente: `frontend/src/content/projects/ia-compra-pisos.md`.
- Problema: señales inmobiliarias dispersas y criterios de comparación poco explícitos.
- Decisión documentada: estructurar primero; usar IA como apoyo para clasificar, resumir y priorizar.
- Consecuencia: la interpretación depende de la consistencia y el contexto de origen.
- Evidencia pendiente: ejemplo reproducible con fuentes, periodos, ámbitos y límites de comparación.

## 02 — Piezas independientes con dirección común

- Proyecto y fuente: `frontend/src/content/projects/basketball-intelligence.md`.
- Problema: datos de competiciones, vídeo y modelos separados.
- Decisión documentada: StatsFEB, Tagger y Motion Lab pueden evolucionar independientemente alrededor de datos → vídeo etiquetado → visión.
- Consecuencia: el ecosistema no implica integración completa ya validada.
- Evidencia pendiente: recorrido de una pregunta desde partido identificado hasta clip y revisión del modelo.

## 03 — Separar acceso público y privado

- Proyecto y fuente: `frontend/src/content/projects/anderdata-systems.md`.
- Problema: desplegar varios servicios sin exponer innecesariamente las herramientas internas.
- Decisión documentada: capas de red, proxy e identidad; observabilidad del host y servicios.
- Consecuencia: operar cada servicio incluye acceso y diagnóstico.
- Evidencia pendiente: ejemplo de incorporación y diagnóstico saneado, sin topología operativa, credenciales ni localizaciones personales.

## 04 — Orden y estado observado son distintos

- Proyecto y fuente: `frontend/src/content/projects/connected-home-lab.md`.
- Problema: mandar una orden al garaje no acredita el cambio físico.
- Decisión documentada: combinar contacto seco y sensores de estado; explorar funcionamiento local y separación por vivienda.
- Consecuencia: la confirmación debe venir de la observación, no solo del envío de un comando.
- Evidencia pendiente: secuencia de eventos anonimizada y prueba ante pérdida de conectividad.

## 05 — Registrar instantes y rangos

- Proyecto y fuente: `frontend/src/content/projects/basketball-video-tagger.md`.
- Problema: revisar vídeo debe producir etiquetas reutilizables y localizables.
- Decisión documentada: eventos y rangos temporales, frame cuando hay FPS, persistencia y exportación de clips/manifests.
- Consecuencia: una sesión de revisión puede dar lugar a distintas salidas; las etiquetas requieren control de calidad.
- Evidencia pendiente: manifest saneado, ejemplo autorizado de etiqueta y revisión de la exportación.

## 06 — Dominio separado del solver

- Proyecto y fuente: `frontend/src/content/projects/industrial-cutting-optimizer.md`.
- Problema: asignar piezas a stock respetando restricciones operativas.
- Decisión documentada: separar dominio, solver e integración; mantener la selección de barras por el usuario.
- Consecuencia: se pueden comparar estrategias sin acoplar toda la aplicación a un motor.
- Evidencia pendiente: caso saneado con stock y demanda idénticos, validación de restricciones y comparación de desperdicio/tiempo.

## Uso posterior

Antes de publicar un caso maduro, adjuntar el artefacto original saneado, el criterio de aceptación y el resultado observado. Si falta evidencia, mantener la ficha como decisión documentada con validación pendiente. No inventar un antes/después ni un intercambio con agentes.
