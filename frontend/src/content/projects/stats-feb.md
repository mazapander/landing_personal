---
title: StatsFEB
description: "Analítica de baloncesto FEB con un histórico de partidos y jugadores, fichas interactivas en desarrollo y comparativas de jornada."
status: En desarrollo
featured: true
updatedAt: "2026-11-25"
updateSummary: "He reforzado el cruce de jugadores entre fuentes FEB. Estoy desarrollando fichas interactivas de jugador, fichas de scouting e informes de jornada."
stack:
  - Python
  - SQL
  - PostgreSQL
  - FastAPI
  - React
  - Docker
visual:
  label: De los datos FEB a los informes
  nodes: [Partidos, Identidad, Histórico, Informes]
  outcome: Equipos y jugadores comparables por temporada
  tone: violet
architecture:
  - title: Captura y modelado
    description: La ingesta reúne datos de partidos, equipos y competiciones en un histórico consultable.
  - title: Identidad de jugadores
    description: El boxscore sirve de referencia para cruzar las fuentes del partido y dejar constancia de los casos sin resolver.
  - title: Análisis e informes
    description: El histórico alimenta los informes y las fichas de jugador y jornada que estoy desarrollando.
capabilities:
  - Histórico de más de 1.000 partidos y 3.000 jugadores.
  - Cruce de jugadores entre boxscore, mapa de tiro y acciones destacadas con trazabilidad del origen.
  - Fichas de jugador en desarrollo con mapa de tiro, evolución entre temporadas y contexto de minutos en pista.
  - Prototipo de informe de jornada para comparar los partidos entre sí y a cada equipo con su rendimiento habitual.
facts:
  - value: FEB
    label: competiciones
  - value: Boxscores
    label: referencia de partido
  - value: Informes
    label: equipos y jugadores
---

## El problema

El boxscore, el mapa de tiro y las acciones destacadas de un mismo partido pueden identificar de formas distintas al mismo jugador. Si ese cruce falla, un tiro puede acabar fuera de su ficha y el histórico deja de ser fiable.

## Cómo se resuelve la identidad

He reforzado el cruce de jugadores usando la lista del boxscore como referencia de cada partido. El sistema guarda de dónde viene la identificación y deja pendientes los casos ambiguos. También comprueba las fichas oficiales de la FEB y conserva los perfiles ya verificados si una consulta posterior falla.

## Fichas de jugador

Estoy trabajando en una ficha más visual que permite explorar el tiro por zonas, comparar etapas por equipo y temporada y ver en qué tramos del partido suele jugar. El siguiente paso es abrirla desde un buscador con filtros por temporada, liga y equipo.

## Scouting e informes de jornada

Estoy preparando fichas de scouting y probando un formato de informe que arranca por la jornada completa. El prototipo de Segunda FEB compara los partidos entre sí, la jornada con las anteriores y a cada equipo con su propio rendimiento habitual. A partir de ahí, el informe entra en los partidos y actuaciones que más se salieron de lo habitual.
