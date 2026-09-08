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

**Estado:** en ejecución.

Entregables:

- [x] posicionamiento de AnderData como personal technology lab;
- [x] reglas visuales duras/blandas;
- [x] arquitectura de contenido V3;
- [x] brand system V3;
- [x] plan de ejecución V3.

Criterio de cierre:

- cualquier developer puede decidir si un cambio encaja sin reinterpretar conversaciones previas.

## Fase 1 — Brand foundation + Hero

**Objetivo:** hacer que una captura de la home empiece a ser reconocible como AnderData.

Scope:

- [ ] convertir el Hero en el principal bloque `ink` de la web;
- [ ] introducir `signal` como acento único y controlado;
- [ ] usar el logo completo como brand stamp de gran formato y baja interferencia;
- [ ] mantener `AF` como mark pequeño hasta disponer de simplificación específica;
- [ ] incorporar technical stamp `AD / PERSONAL TECHNOLOGY LAB`;
- [ ] reducir aún más el copy del primer viewport;
- [ ] revisar CTA principal/secundario;
- [ ] asegurar responsive sin saltos manuales;
- [ ] añadir soporte de `prefers-reduced-motion` para cualquier microinteracción nueva.

Fuera de scope:

- rediseñar todos los case studies;
- dark mode global;
- nuevas dependencias;
- animaciones complejas.

Criterio de aceptación:

- primer viewport entendible en <5 s;
- Hero identificable en una captura sin ver el dominio;
- no parece consultora ni SaaS;
- funciona de 320 a 1440+ px;
- no aumenta el número de CTAs.

## Fase 2 — Families on Home

**Objetivo:** dejar de enseñar repos aislados y empezar a enseñar ecosistemas.

Scope:

- [ ] crear un modelo ligero de familias de proyecto;
- [ ] `Data & AI Products`;
- [ ] `Basketball Intelligence`;
- [ ] `AnderData Systems`;
- [ ] `Connected Home Lab`;
- [ ] `Automations`;
- [ ] `Building how I build`;
- [ ] incluir `Industrial Cutting Optimizer` sin crear todavía una categoría independiente;
- [ ] limitar destacados en home a 3–4 historias.

Criterio de aceptación:

- la home no se convierte en catálogo;
- cada familia explica una capacidad mediante piezas reales;
- tecnologías quedan en segundo plano.

## Fase 3 — Projects information architecture

**Objetivo:** convertir `/proyectos/` en la puerta de entrada al trabajo construido.

Scope:

- [ ] navegación secundaria `Featured / Lab / Systems / Automations`;
- [ ] listado editorial en vez de grid SaaS cuando sea posible;
- [ ] páginas paraguas para Basketball Intelligence, AnderData Systems y Connected Home;
- [ ] reubicar `Cómo trabajo` como contenido contextual del framework;
- [ ] mantener rutas existentes o redirects si cambian.

## Fase 4 — Automations library

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

## Seguimiento

Formato para cerrar cada fase:

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
