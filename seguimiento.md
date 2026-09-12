# Seguimiento de la migración

Este documento registra las decisiones que cambian la arquitectura o el alcance. `cambios.md` conserva la propuesta inicial; aquí queda el estado real del repositorio.

## Decisiones vigentes

- Astro genera las páginas estáticas y React queda reservado para interacciones ya existentes o futuras.
- La navegación usa rutas públicas estables: Inicio, Proyectos, Servicios, Lab, Cómo trabajo, Sobre mí, Notas y Contacto.
- No se crea `/go/:project`: los CTA usarán eventos Umami y UTM. Un redirector solo tendrá sentido con registro backend.
- Umami usa eventos estables y atributos comunes; solo se carga cuando existe `PUBLIC_UMAMI_WEBSITE_ID`.
- El CV no tendrá API ni descarga privada por ahora. Se elimina `cv-api/`, su proxy Nginx, Compose, variables de entorno, modal y estilos asociados.
- El contenido no se concentra en un JSON: datos actuales en `src/data/*.ts`; proyectos, servicios y notas se validan con colecciones Astro.

## Commits realizados

### 1. `892cc16` — migrate frontend from Vite to Astro

**Hecho**

- Sustituido Vite por Astro 5 con integración React y alias `@/*`.
- Movido el documento HTML a `src/pages/index.astro` y preservados metadatos y Umami.
- Adaptados Docker Compose, Dockerfile y variables públicas al prefijo `PUBLIC_`.

**Decisión**

La UI existente se mantiene como una isla React única. Convertirla ahora en componentes Astro supondría mezclar la migración técnica con el rediseño de la home.

**Validado**

- `npx tsc --noEmit`
- `npm run build`

### 2. `4ba9ff6` — create layouts and design foundations

**Hecho**

- Añadido `BaseLayout`, cabecera, navegación responsive, pie y enlace de salto accesible.
- Separados tokens, reset, estilos globales, utilidades, shell y estilos por componente.
- La página actual usa el shell sin cambiar su contenido de producto.

**Decisión**

La navegación se publica antes de crear las páginas destino para fijar la arquitectura de información. Las vistas llegarán en los commits de cada funcionalidad.

**Validado**

- `npx tsc --noEmit`
- `npm run build`

### 3. `325ad2d` — content models and API removal

**Hecho**

- Separados perfil, proyectos, tecnologías, experiencia y formación en módulos tipados.
- Definidos esquemas de colecciones para proyectos, servicios y notas.
- Eliminado el backend de CV y todas sus referencias operativas.

**Decisión**

Las colecciones empiezan vacías deliberadamente: añadir casos de estudio o servicios corresponde a sus commits de contenido, no al modelo.

### 4. `db43851` — home de portfolio

**Alcance**

- Hero, propuesta de valor, proyectos destacados, resumen profesional y CTA.
- La home se construye con Astro y los datos tipados ya existentes.

**Decisión**

No incorpora tracking, rutas finales ni casos de estudio: esos cambios siguen teniendo commits propios para mantener el diff revisable.

### 5. `5121603` — sistema de casos de estudio

**Alcance**

- Índice de proyectos, tarjetas y rutas estáticas por slug.
- Layout reutilizable con breadcrumbs, contenido Markdown, arquitectura, capacidades y enlaces.
- Prueba de generación de URLs para rutas simples, anidadas y con caracteres no ASCII.

**Decisión**

El sistema no añade casos ficticios: el índice muestra un estado vacío hasta el siguiente commit de contenido. Así cada caso se revisa por separado.

### 6. `7dab180` — primeros casos de estudio

**Alcance**

- Casos de WhatsApp SaaS, IA Compra Pisos y StatsFEB como Markdown validado.
- IA Compra Pisos se presenta como caso en evolución; no se inventan métricas ni resultados.

**Decisión**

Payload CMS se pospone como opción editorial después de estabilizar el portfolio. Sus colecciones, administración, API y control de acceso son adecuados cuando la edición requiera usuarios no técnicos, pero hoy añadirían base de datos, autenticación y operación innecesarias.

### 7. `fe377b9` — página profesional Sobre mí

**Hecho**

- Creada `/sobre-mi` con propuesta profesional, experiencia, resultados relevantes, capacidades, forma de trabajo y perfiles.
- Recuperados selectivamente de `feature/company-experience-widget` los cuatro registros de experiencia y sus SVG; no se ha fusionado el componente ni la hoja de estilos monolíticos.
- Añadida una prueba mínima para el agrupado de tecnologías por capacidad.

**Decisión**

La descarga del CV se resuelve por correo, sin restaurar la API eliminada. La rama histórica no aporta datos verificables de formación o certificaciones, por lo que la página no inventa credenciales y dirige al CV actualizado.

**Validado**

- `npm test`
- `npx tsc --noEmit`
- `npm run build`

### 8. `73267a5` — servicios y flujo de conversión

**Hecho**

- Publicadas las rutas `/servicios/` y `/contacto/` con tres servicios editables desde la colección Astro.
- Añadido un formulario único reutilizado en ambas rutas, con diálogo nativo, validación HTML y estado de correo preparado.
- Añadida prueba del enlace `mailto:` para conservar asunto y contexto de la consulta.

**Decisión**

No se incorpora un proveedor de formularios ni un endpoint propio. El flujo prepara un correo en el cliente del visitante, por lo que no almacena datos personales ni reintroduce infraestructura de backend antes de necesitarla.

**Validado**

- `npm test`
- `npx tsc --noEmit`
- `npm run build`

### 9. `2974b2e` — Lab y Cómo trabajo

**Hecho**

- Añadidas `/lab/` y `/como-trabajo/` como rutas Astro estáticas.
- Lab reutiliza los proyectos publicados con URL externa; hoy muestra WhatsApp SaaS y StatsFEB.
- Documentado el proceso desde el problema hasta la evolución, con principios de utilidad, claridad y operación.
- Añadida una prueba que evita publicar en Lab borradores o casos sin enlace público.

**Decisión**

No se han creado demos ficticias ni una capa de datos adicional. IA Compra Pisos conserva su caso de estudio hasta que tenga una demo o enlace público verificable.

**Validado**

- `npm test`
- `npx tsc --noEmit`
- `npm run build`

### 10. `8f6c17c` — taxonomía de eventos Umami

**Hecho**

- Centralizado el tracking de clics en el layout mediante atributos `data-track-*` y un único módulo cliente.
- Instrumentados CTA, navegación, apertura de proyectos y casos, demos de Lab, servicios, perfiles y contacto.
- Los eventos incluyen `page_path`, `placement`, destino, proyecto o servicio cuando aplica y UTM (`source`, `medium`, `campaign`, `term`, `content`).
- Añadida una prueba de normalización del contexto y de envío a Umami.

**Decisión**

La taxonomía no construye nombres dinámicos: usa `cta_click`, `project_open`, `project_case_open`, `demo_open`, `service_contact`, `contact_open`, `contact_submit`, `profile_open` y `navigation_open`. Esto permite agrupar datos sin una capa de transformación posterior.

**Validado**

- `npm test`
- `npx tsc --noEmit`
- `npm run build`

### 11. `4886b81` — SEO técnico

**Hecho**

- Centralizados canonical, descripción, Open Graph, Twitter Cards y JSON-LD de tipo `WebPage` en `BaseLayout`.
- Añadidos `robots.txt`, `sitemap.xml` estático con las rutas y casos publicados, `site` en Astro y `404.html` con `noindex`.
- Los casos de estudio añaden JSON-LD `BreadcrumbList` alineado con la miga de pan visible.
- Añadida una prueba que excluye los borradores del sitemap.

**Decisión**

El sitemap se genera con Astro y la colección existente, sin dependencia adicional. No lista `/notas/` porque aún no existe una página pública para esa ruta.

**Validado**

- `npm test`
- `npx tsc --noEmit`
- `npm run build`

### 12. Este commit — controles de calidad y documentación

**Hecho**

- Añadido `npm run verify`: `astro check`, pruebas unitarias, build y smoke tests sobre `dist/`.
- Incorporada la página `/notas/` como estado vacío con `noindex`, para que la navegación no tenga enlaces rotos antes de publicar notas.
- Los smoke tests comprueban rutas, enlaces internos, SEO básico, idioma, título, salto al contenido, texto alternativo y enlaces externos seguros.
- Actualizado README con el comando de validación previo al despliegue.

**Decisión**

Se usa `node:test` y lectura de HTML estático para la cobertura básica. Un navegador automatizado se añadirá solo si aparecen interacciones que no puedan verificarse con el build y pruebas unitarias.

**Validado**

- `npm run verify`: Astro check sin errores, siete pruebas unitarias y build correcto.
- `npm run test:smoke`: dos pruebas sobre la salida estática.
- `docker compose config -q`: configuración válida.
- El motor Docker local no estaba iniciado, por lo que no se pudo comprobar un contenedor en ejecución.
- `npm audit --omit=dev`: 5 vulnerabilidades altas y 1 baja en la cadena actual de Astro 5; la solución automática propone Astro 7 y requiere una migración mayor separada.

## Auditoría de cumplimiento frente a `cambios.md`

| Commit | Estado | Evidencia y límite relevante |
|---|---|---|
| 1. Migración Astro | Cumple | Astro, React, TypeScript, aliases, Docker y Nginx estático (`892cc16`). |
| 2. Shell y diseño | Cumple | Layout, navegación, footer, tokens y estilos modulares (`4ba9ff6`). |
| 3. Modelos y CV | Cumple | Colecciones y datos tipados; `cv-api` eliminado (`325ad2d`). |
| 4. Home | Cumple | Hero, capacidades, proyectos, resumen y CTA (`db43851`). |
| 5. Casos | Cumple | Índice, rutas, layout, Markdown, arquitectura y breadcrumbs (`5121603`). |
| 6. Contenido | Cumple | WhatsApp SaaS, IA Compra Pisos y StatsFEB (`7dab180`). |
| 7. Sobre mí | Cumple con dato pendiente | Trayectoria, tecnologías y perfiles (`fe377b9`); formación no se inventa y se deriva al CV. |
| 8. Servicios | Cumple con entrega por correo | Servicios, diálogo y estados (`73267a5`); el envío prepara `mailto:` y no almacena datos. |
| 9. Lab y metodología | Cumple | Solo muestra productos con URL pública verificable (`2974b2e`). |
| 10. Umami | Cumple | Eventos normalizados, contexto y UTM (`8f6c17c`). |
| 11. SEO | Cumple | Canonical, sitemap, robots, OG, JSON-LD, breadcrumbs y 404 real (`4886b81`). |
| 12. Calidad y documentación | Cumple | `npm run verify`, smoke, accesibilidad estática, README y control de enlaces. |

La fila opcional de Payload no forma parte del `cambios.md` local actual. Sigue siendo una decisión futura, no una carencia del portfolio estático: solo tiene sentido al necesitar edición por usuarios no técnicos y operación de base de datos.

## Escenario actual

```text
Visitante
  │
  ├── enlaces, SEO y páginas Astro estáticas
  ▼
Proxy público ──► Nginx del contenedor ──► dist/ de Astro
                         │                    ├── HTML/CSS estático
                         │                    ├── casos Markdown publicados
                         │                    ├── sitemap.xml, robots.txt y 404.html
                         │                    └── isla React: formulario de contacto
                         │
                         ├── Umami opcional (solo con PUBLIC_UMAMI_WEBSITE_ID)
                         └── mailto: del visitante (sin backend ni persistencia)
```

## Cambios respecto al plan y al repositorio inicial

```text
Antes: Vite/React + profile.json + fallback SPA + cv-api
                    │
                    ├── contenido tipado y Markdown
                    ├── Astro estático y Nginx con 404 real
                    ├── React solo para el diálogo de contacto
                    ├── tracking Umami uniforme y opcional
                    └── SEO y calidad ejecutables en un comando
                    ▼
Ahora: portfolio estático verificable, sin API de CV ni CMS operativo
```

- Se conserva la decisión original de no crear `/go/:project`; los CTA registran el contexto en el navegador.
- La rama histórica se reutilizó solo para datos y logotipos, no para su componente ni CSS monolíticos.
- `/notas/` se añadió como placeholder `noindex` para corregir la navegación mientras no haya publicaciones; por eso no figura en sitemap.
- Payload permanece aplazado y no se han creado demos ni métricas ficticias.
- Docker Desktop ha validado la imagen de producción, Nginx y las respuestas HTTP `200` de un caso publicado y `404` de una ruta inexistente.
- Astro y sus integraciones se han actualizado de forma explícita, sin aplicar una corrección automática indiscriminada de dependencias.

## Actualización posterior — Astro 7 y validación Docker

**Hecho**

- Actualizados Astro a `7.3.1`, `@astrojs/react` a `6.0.5` y `@astrojs/check` a `0.9.10`.
- Adaptadas las colecciones al cargador `glob`, y sus consumidores a las APIs `id` y `render(entry)` de Astro 7.
- Añadido `frontend/.dockerignore` para no enviar `node_modules` ni `dist` al contexto de construcción.

**Decisión**

Se conserva el contenido Markdown y las pruebas existentes: el cambio es una migración de API, no un rediseño del modelo de datos. El `.dockerignore` evita transportar dependencias que Docker instala dentro de la imagen.

**Validado**

- `npm run check`: 0 errores y 0 avisos.
- `npm test`: 7 pruebas superadas; `npm run test:smoke`: 2 superadas.
- `npm run build`: 12 rutas estáticas generadas, incluidos los tres casos de estudio.
- `npm audit --omit=dev --audit-level=high`: 0 vulnerabilidades.
- `docker compose build anderdata-landing`, Nginx válido y contenedor en ejecución; `GET /proyectos/stats-feb/` devuelve 200 y una ruta inexistente devuelve 404.

## Actualización posterior — jerarquía visual y navegación

**Hecho**

- Integrados el logotipo existente, nombre y descriptor profesional en la cabecera global, junto a accesos directos a LinkedIn y GitHub.
- La navegación conserva sus etiquetas y añade referencias numéricas discretas; en móvil se desplaza horizontalmente y en tablet pasa a dos filas sin desbordar.
- La home incorpora una ficha profesional y señales basadas en casos y capacidades publicadas, reduciendo el espacio vacío inicial y dando contexto antes de los proyectos.
- Compactados los espacios finales de los encabezados de inicio, servicios, contacto, sobre mí y cómo trabajo.

**Decisión**

Se reutiliza el favicon como marca y CSS nativo para los estados interactivos. No se añaden iconos externos, animaciones ni cifras comerciales inventadas: la mejora se apoya exclusivamente en el contenido ya verificable.

## Ajuste posterior — navegación reducida

**Hecho**

- La cabecera muestra cuatro destinos principales y un CTA de contacto; los accesos secundarios se trasladan a los slugs relevantes.
- En móvil y tablet el menú se despliega mediante `details`, de forma que el header conserva una sola fila y no depende de un carrusel horizontal.
- Añadidos enlaces de continuidad entre proyectos, Lab, metodología y notas.

**Decisión**

La jerarquía de navegación prima la intención de un potencial cliente. Los contenidos secundarios siguen accesibles desde su contexto y desde el menú móvil, sin competir con los recorridos principales en escritorio.

## Corrección posterior — header contextual y escala fluida

**Hecho**

- El header obtiene el contexto desde la ruta: trabajo, perfil o inicio presentan cuatro destinos distintos y relacionados.
- Escritorio y menú móvil comparten el mismo grupo contextual; desaparece el listado secundario completo del desplegable.
- Centralizado el ancho principal en `--page-width: min(90vw, 1280px)` y aplicado a home, servicios, contacto, perfil, metodología, header y footer.
- Reducida y acotada la escala fluida de los títulos en todas las familias de páginas para evitar cortes en pantallas de portátil.

**Validado**

- `npm run check`, 7 pruebas unitarias, build de 12 páginas y 4 smoke tests.
- Los smoke tests verifican que Proyectos muestra Servicios y Arquitectura, mientras Sobre mí muestra Cómo trabajo y Notas.


## AnderData V3 — Fase 5: Project stories + SEO

Estado: implementación terminada y validación funcional superada; QA visual pendiente por falta de navegador ejecutable.

- Ampliadas las seis historias prioritarias desde la base `56e6d9956dddf1f44ef652f6dcb8997e998f1014`.
- SEO específico por historia, índice desde headings, lectura con ancho acotado, enlaces contextuales y tecnologías al final.
- Conservadas rutas, canonical, sitemap, datos estructurados y navegación global.
- Contrato y mapa SEO en `docs/PROJECT_STORIES_SEO.md`; seis fichas para futuros casos en `docs/PROJECT_STORY_DECISIONS.md`.
- `npm run verify`: 0 errores/avisos de Astro, 7 unit tests, build de 23 páginas y 5 smoke tests. `git diff --check` correcto.
- Chromium no pudo descargarse (timeout/502); las siete anchuras siguen pendientes de inspección visual. No se afirma publicación en producción.
- Próxima fase: Fase 6 — Ideas. Imágenes OG propias y polish global permanecen en Fase 7.
