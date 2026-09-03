# Seguimiento de la migración

Este documento registra las decisiones que cambian la arquitectura o el alcance. `cambios.md` conserva la propuesta inicial; aquí queda el estado real del repositorio.

## Decisiones vigentes

- Astro genera las páginas estáticas y React queda reservado para interacciones ya existentes o futuras.
- La navegación usa rutas públicas estables: Inicio, Proyectos, Servicios, Lab, Cómo trabajo, Sobre mí, Notas y Contacto.
- No se crea `/go/:project`: los CTA usarán eventos Umami y UTM. Un redirector solo tendrá sentido con registro backend.
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

### 3. En curso — content models and API removal

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

### 5. En curso — sistema de casos de estudio

**Alcance**

- Índice de proyectos, tarjetas y rutas estáticas por slug.
- Layout reutilizable con breadcrumbs, contenido Markdown, arquitectura, capacidades y enlaces.
- Prueba de generación de URLs para rutas simples, anidadas y con caracteres no ASCII.

**Decisión**

El sistema no añade casos ficticios: el índice muestra un estado vacío hasta el siguiente commit de contenido. Así cada caso se revisa por separado.

## Próximo alcance

El siguiente commit añadirá los tres primeros casos de estudio: WhatsApp SaaS, IA Compra Pisos y StatsFEB.
