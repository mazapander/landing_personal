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

### 10. Este commit — taxonomía de eventos Umami

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

## Próximo alcance

El siguiente commit implementará SEO técnico: canonical, sitemap, robots, metadatos por ruta, OG, JSON-LD, breadcrumbs y 404.

## Próximo alcance

El siguiente commit implementará la taxonomía de eventos Umami para CTA, proyectos, servicios, demos y contacto.
