# Fase 5 — Project stories + SEO

Base: `56e6d9956dddf1f44ef652f6dcb8997e998f1014`.

## Contrato editorial

Cada historia explica problema, motivación, funcionamiento, decisiones, estado y siguiente evolución. La fuente es el contenido y la arquitectura documentados en este repositorio a la fecha de la fase; esta entrega no audita las implementaciones de los repositorios de cada producto.

Separar hechos documentados, dirección técnica y validación pendiente. No atribuir métricas ni integración completa a un prototipo. Las tecnologías aparecen después de la historia. Cada pieza debe permitir seguir hacia un caso relacionado, automatización o proceso de construcción.

## Mapa de intención y rutas conservadas

| Ruta bajo `/proyectos/` | Intención editorial | Continuidad |
| --- | --- | --- |
| `ia-compra-pisos/` | Análisis de vivienda con datos públicos y criterios comparables | Ingesta periódica, proceso |
| `basketball-intelligence/` | Datos y análisis de vídeo de baloncesto | StatsFEB, Tagger |
| `anderdata-systems/` | Infraestructura autoalojada y observabilidad | Reporting de vehículos, health check, Connected Home |
| `connected-home-lab/` | Domótica local, Home Assistant y estado físico | Systems |
| `basketball-video-tagger/` | Etiquetar partidos y exportar clips | Basketball Intelligence, proceso |
| `industrial-cutting-optimizer/` | Optimización de cortes y asignación de stock | Proceso, repositorio |

Estas intenciones son una hipótesis editorial; no proceden de un estudio de volumen de búsqueda. No se promete posicionamiento. No se cambian slugs ni hacen falta redirects.

## Implementación

- `seoTitle` opcional en la colección; fallback al título de proyecto para contenido existente.
- Títulos y descripciones específicos propagados al SEO y metadatos sociales existentes del `BaseLayout`.
- Canonical, sitemap, WebPage y BreadcrumbList existentes conservados y comprobados.
- Índice generado desde los H2 reales de Markdown, sin mantener una segunda lista editorial. Sidebar en escritorio, flujo normal en móvil.
- Lectura con ancho acotado, enlaces visibles, encabezados con margen de desplazamiento y tecnologías al final.
- Plantilla Markdown actualizada para futuras historias. Sin dependencias adicionales.
- Imágenes Open Graph específicas y polish global siguen en Fase 7.

## Artefactos para Building how I build

El [registro de decisiones](./PROJECT_STORY_DECISIONS.md) recopila seis fichas reutilizables. Son síntesis de decisiones ya documentadas, no una recreación de sesiones de desarrollo. Cada ficha identifica fuente y evidencia aún necesaria para convertirse en un caso completo.

## Validación

`npm run verify`: Astro check, unit tests, build estático y smoke tests. La cobertura adicional comprueba las seis historias: título y descripción únicos, canonical exacto, sitemap, un H1, índice con anclas existentes, enlaces internos y breadcrumb JSON válido.

La validación de UI se registra al cerrar la fase en `EXECUTION_V3.md`. El build local no demuestra un despliegue ni la indexación en buscadores.
