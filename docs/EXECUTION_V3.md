# AnderData — Execution Plan V3

> Estado: plan activo de ejecución por fases sobre `master`.
> Principio: cambios pequeños, revisables y alineados con `BRAND_SYSTEM.md` y `CONTENT_ARCHITECTURE.md`.

## 0. Reglas de ejecución

1. No rehacer la app desde cero.
2. No introducir librerías visuales nuevas salvo necesidad demostrada.
3. No crear una abstracción antes de tener al menos dos usos claros.
4. Un commit = una hipótesis principal revisable.
5. Mantener Astro + React y el sistema actual de contenido salvo que una fase justifique explícitamente cambiarlo.
6. Cada fase debe reducir o mantener la complejidad visual.
7. Cada cambio visual debe revisarse contra 320, 375, 430, 768, 1024, 1280 y 1440 px.
8. `npm run verify` debe pasar antes de dar una fase por cerrada cuando exista ejecución disponible.

## Fase 0 — Contratos

**Estado:** DONE  
**Commit:** `b08325125ce2b8c77fbeaa7ceb205f7c71d58e63`

Entregables:

- [x] posicionamiento de AnderData como personal technology lab;
- [x] reglas visuales duras/blandas;
- [x] arquitectura de contenido V3;
- [x] brand system V3;
- [x] plan de ejecución V3.

Decisión principal:

> AnderData se diseña como marca personal tecnológica reconocible, no como consultora, CV web o catálogo de repositorios.

## Fase 1 — Brand foundation + Hero

**Estado:** DONE  
**Commit:** `d4602b474f7b0e3c1010e68bff9429d224619156`

Entregado:

- [x] Hero `ink` a ancho completo;
- [x] `signal` coral como acento de marca;
- [x] logo completo usado como brand stamp de gran formato;
- [x] `AF` mantenido como mark pequeño por legibilidad;
- [x] technical stamp `AD / PERSONAL TECHNOLOGY LAB`;
- [x] copy del primer viewport reducido;
- [x] CTA principal + enlace secundario;
- [x] responsive fluido sin saltos manuales;
- [x] soporte de `prefers-reduced-motion`.

Ficheros principales:

- `frontend/src/components/Layout/Header.astro`
- `frontend/src/features/home/Home.astro`
- `frontend/src/styles/home.css`
- `frontend/src/styles/shell.css`
- `frontend/src/styles/tokens.css`

Fuera de scope respetado:

- no se añadieron dependencias;
- no se creó un dark mode global;
- no se rediseñaron case studies;
- no se añadieron animaciones complejas.

## Fase 2 — Families on Home

**Estado:** PARTIAL — foundation shipped  
**Commit:** `33f516726c2843e42e35540a16e14a776699a134`

Entregado:

- [x] modelo ligero de historias/familias para la Home;
- [x] máximo cuatro historias principales;
- [x] IA Compra Pisos como producto destacado;
- [x] Basketball Intelligence como ecosistema;
- [x] AnderData Systems como ecosistema;
- [x] Connected Home Lab como ecosistema;
- [x] Automations presentado como extensión del Lab;
- [x] Building how I build presentado como extensión del Lab;
- [x] Industrial Cutting Optimizer añadido como proyecto sin crear una categoría prematura;
- [x] Basketball Video Tagger añadido como proyecto propio;
- [x] la Home lee `Currently building` desde Astro Content en vez de duplicar esos datos en `data/projects.ts`.

Contenido nuevo:

- `frontend/src/content/projects/basketball-intelligence.md`
- `frontend/src/content/projects/anderdata-systems.md`
- `frontend/src/content/projects/connected-home-lab.md`
- `frontend/src/content/projects/basketball-video-tagger.md`
- `frontend/src/content/projects/industrial-cutting-optimizer.md`

Pendiente para cerrar completamente la fase:

- [x] llevar la misma jerarquía de familias a `/proyectos/`;
- [ ] revisar qué contenido legacy de `data/projects.ts` puede retirarse sin romper usos;
- [ ] validar visualmente las cuatro historias en todas las anchuras objetivo.

## Fase 3 — Projects information architecture

**Estado:** DONE — implementation shipped  
**Commits:** `427b59988ac4b38b6178ce8cff1e0d3123b0cc28`, `e2bdbea4d7a68eee3f6ddad3eefa98c9fb512117`

**Objetivo:** convertir `/proyectos/` en la puerta de entrada al trabajo construido.

Entregado:

- [x] navegación secundaria `Featured / Lab / Systems / Automations`;
- [x] listado editorial en vez de grid SaaS;
- [x] cuatro historias destacadas con prioridad explícita;
- [x] Basketball Intelligence presentado como ecosistema `structured data → labelled video → computer vision`;
- [x] AnderData Systems y Connected Home agrupados como sistemas, no como listas de herramientas;
- [x] Automations presentado como librería extensible sin crear rutas vacías antes de Fase 4;
- [x] WhatsApp Appointments e Industrial Cutting Optimizer mantenidos como proyectos secundarios con identidad propia;
- [x] `Cómo trabajo` reubicado conceptualmente como `Building how I build` dentro de Projects;
- [x] `/como-trabajo/` reescrito alrededor de `IDEA → CONTRACT → PLAN → BUILD → REVIEW → SHIP`;
- [x] eliminada de esa página la narrativa de servicios/consultoría y sustituida por el framework real de trabajo con agentes;
- [x] rutas existentes mantenidas, por lo que no hacen falta redirects en esta fase;
- [x] no se añadieron nuevas pestañas al header principal;
- [x] no se añadieron dependencias ni abstracciones nuevas.

Ficheros principales:

- `frontend/src/pages/proyectos/index.astro`
- `frontend/src/styles/case-studies.css`
- `frontend/src/pages/como-trabajo/index.astro`
- `frontend/src/styles/practice.css`

Decisiones:

- `/proyectos/` explica primero historias y universos; GitHub sigue siendo el lugar donde viven los repositorios.
- `Automations` existe ya como lenguaje y flujo visual, pero la colección de contenido se reserva para Fase 4.
- `Building how I build` demuestra proceso mediante artefactos, contratos y revisión; no se vende como metodología abstracta.
- Las tecnologías siguen siendo evidencia secundaria frente al problema y al sistema construido.

Verificación:

- La implementación evita `<main>` anidados y mantiene semántica del `BaseLayout`.
- Se han mantenido los breakpoints existentes de marca y los nuevos layouts degradan a una columna en móvil.
- GitHub no expone actualmente un check de CI asociado a estos commits; no se marca `npm run verify` como ejecutado desde el conector.

## Fase 4 — Automations library

**Estado:** NEXT

**Objetivo:** añadir contenido incremental de bajo coste editorial.

Scope:

- [ ] colección `automations` en Astro Content;
- [ ] schema pequeño y estable;
- [ ] índice de automatizaciones;
- [ ] detalle SEO solo cuando haya contenido suficiente;
- [ ] primera tanda: vehicle report, data ingestion, reminders, infrastructure alert/check.

Criterio de aceptación:

- añadir una automatización nueva requiere principalmente un fichero de contenido, no tocar componentes.

## Fase 5 — Project stories + SEO

**Objetivo:** convertir proyectos fuertes en activos de descubrimiento.

Prioridad:

1. IA Compra Pisos;
2. Basketball Intelligence;
3. AnderData Systems;
4. Connected Home Lab;
5. Basketball Video Tagger;
6. Industrial Cutting Optimizer.

Cada página debe responder:

- problema;
- por qué se construyó;
- cómo funciona a alto nivel;
- decisiones interesantes;
- resultado/estado;
- siguiente evolución;
- tecnologías secundarias.

## Fase 6 — Ideas

**Objetivo:** construir autoridad temática sin obligación editorial artificial.

Scope:

- [ ] migrar Notas dentro de Ideas;
- [ ] taxonomía mínima;
- [ ] enlazado entre notas y proyectos;
- [ ] páginas pensadas para long-tail SEO.

## Fase 7 — Polish

Solo después de que estructura y contenido funcionen.

- [ ] revisión visual completa;
- [ ] hover/focus;
- [ ] accesibilidad;
- [ ] performance;
- [ ] Open Graph por proyecto;
- [ ] sitemap;
- [ ] structured data cuando aporte valor;
- [ ] revisión de Core Web Vitals;
- [ ] limpiar CSS y componentes que hayan quedado obsoletos.

## Formato de cierre de fase

```md
### Fase X — Nombre
Estado: DONE | PARTIAL | BLOCKED
Commit: <sha>

Cambios:
- ...

Ficheros principales:
- ...

Decisiones:
- ...

Pendiente / siguiente fase:
- ...
```

## Criterio final

El proyecto no se considera mejor porque tenga más secciones.

Se considera mejor cuando:

- la marca se reconoce;
- los flujos se entienden;
- los proyectos convencen;
- el contenido es descubrible;
- añadir trabajo nuevo cuesta poco;
- y la web sigue sintiéndose limpia.
