Revisión de la propuesta

Coincido con el diagnóstico general, pero cambiaría tres cosas:

El “primer commit” propuesto es demasiado grande. Migración, rutas, SEO, contenido, tracking y tres casos de estudio juntos dificultarían revisar o revertir cambios.
/sobre-mi debe tener más peso. Ahí incluiremos experiencia profesional, formación y tecnologías, organizadas por capacidades y no como una cronología interminable de logos.
No implementaría /go/:project como se plantea inicialmente. Un 302 ejecutado por Nginx no permite a Umami registrar primero el evento en el navegador. Usaremos eventos Umami en los CTA y enlaces con UTM; solo crearemos un redirector si también registramos el evento en backend.

También he encontrado la rama feature/company-experience-widget, diez commits por delante de master. Contiene información y logos de AnderData, Ferchau, Helix y Tubacex, pero no la fusionaría directamente: añade un componente de 227 líneas y una hoja CSS de 401 líneas, justo lo contrario de la estructura modular que buscamos. Recuperaremos selectivamente sus datos y recursos.

Arquitectura funcional acordada

La navegación principal quedaría:

Inicio
Proyectos
Servicios
Lab
Cómo trabajo
Sobre mí
Notas
Contacto

Cambiaría “Arquitectura” por “Cómo trabajo” en la navegación. Es más comprensible para clientes, aunque internamente la página y su SEO sí hablarán de arquitectura, escalabilidad, datos y producto.

Sobre mí tendrá:

Presentación y propuesta profesional.
Experiencia y empresas.
Resultados o responsabilidades relevantes.
Formación académica y certificaciones.
Tecnologías agrupadas por capacidad.
Forma de trabajar.
Enlace al CV y perfiles profesionales.

La home solo mostrará un resumen de esto. Su objetivo será llevar al visitante hacia proyectos, servicios o contacto.

Plan de commits
Commit	Alcance	Resultado verificable
1. chore: migrate frontend from Vite to Astro	Astro, integración React, TypeScript, aliases, Docker y Nginx estático	La web compila y despliega con la nueva base sin introducir todavía el rediseño
    Done - Commit: `892cc16`
2. refactor: create layouts and design foundations	BaseLayout, cabecera, navegación, footer, tokens, tipografía y estilos globales separados	Shell común responsive y sin grandes hojas CSS monolíticas
    Done - Commit: `4ba9ff6`
3. feat: define portfolio content models	Colecciones y esquemas para proyectos, servicios y notas; datos tipados para perfil, experiencia, formación y tecnologías	El contenido deja de depender de un único profile.json
    Done - Commit: `325ad2d`
4. feat: build portfolio home	Hero, propuesta de valor, “Construyo/Conecto/Ordeno”, proyectos destacados, resumen profesional y CTA	Nueva home completa con textos editables
    Done - Commit: `db43851`
5. feat: add project case study system	Índice, tarjetas, layout de caso, arquitectura, capacidades, enlaces y breadcrumbs	Plantilla reutilizable para todos los proyectos
    Done - Commit: `5121603`
6. content: add first three case studies	WhatsApp SaaS, IA Compra Pisos y StatsFEB	Tres casos completos y revisables por separado dentro del commit
    Done - Commit: `7dab180`
7. feat: build professional about page	Experiencia, empresas, formación, tecnologías y CV; reutilización selectiva de la rama anterior	/sobre-mi demuestra trayectoria y conocimientos sin parecer un inventario
    Done - Commit: `fe377b9`
8. feat: add services and conversion flow	Servicios concretos, formulario, modal y estados de envío	Recorrido freelance claro desde problema hasta contacto
    Done - Commit: `73267a5`
9. feat: add lab and how-i-work pages	Demos, productos accesibles y metodología de arquitectura/producto	Evidencia interactiva y explicación de cómo construyes
    Done - Commit: `2974b2e`
10. feat: implement Umami event taxonomy	Eventos normalizados, CTA, proyectos, demos, servicios, contacto, UTM y atributos comunes	Tracking consistente sin nombres dinámicos difíciles de explotar
    Done - Commit: this commit
11. feat: implement technical SEO	Canonical, sitemap, robots, metadatos por ruta, OG, JSON-LD, breadcrumbs y 404 real	Todas las páginas públicas salen indexables desde el build
    Done
12. test: add quality gates and deployment docs	Astro check, tests unitarios, smoke tests, accesibilidad básica, enlaces y README	Refactor reproducible y protegido frente a regresiones
    Done
13. feat: improve visual hierarchy and navigation	Cabecera de marca responsive, enlaces de perfiles, señales de especialidad y ritmo vertical más compacto	La web comunica más contexto sin introducir contenido ficticio ni dependencias visuales

Cada commit deberá:

Compilar correctamente.
Mantener Docker operativo.
No mezclar contenido, arquitectura y rediseño sin necesidad.
Incluir tests correspondientes cuando introduce lógica.
Evitar componentes “contenedor” gigantes.
Estructura propuesta
frontend/
├── public/
│   ├── images/
│   ├── logos/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── seo/
│   │   └── ui/
│   ├── features/
│   │   ├── analytics/
│   │   ├── contact/
│   │   ├── cv/
│   │   ├── experience/
│   │   └── projects/
│   ├── islands/
│   ├── layouts/
│   ├── pages/
│   │   ├── proyectos/
│   │   ├── servicios/
│   │   ├── lab/
│   │   ├── notas/
│   │   ├── sobre-mi.astro
│   │   └── contacto.astro
│   ├── content/
│   │   ├── projects/
│   │   ├── services/
│   │   └── notes/
│   ├── data/
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   └── technologies.ts
│   ├── lib/
│   └── styles/
│       ├── tokens.css
│       ├── reset.css
│       ├── global.css
│       └── utilities.css
└── astro.config.mjs

En Astro, pages/ serán las vistas. React se reservará para elementos que realmente necesiten interacción: modales, filtros, formularios complejos, visualizaciones o demos.

Refuerzo visual posterior

- `Layout/Header.astro` concentra marca, navegación contextual y accesos profesionales; cada ruta selecciona un grupo corto de destinos relacionados.
- La identidad se apoya en el favicon ya existente, sin crear otro activo de marca ni descargar una librería de iconos.
- La home añade una ficha profesional y señales verificables derivadas de los casos y capacidades publicadas; no se introducen métricas de negocio no demostrables.
- Los contenedores comparten un ancho del `90vw` con límite máximo y títulos fluidos acotados; por debajo de `860px`, el header cambia a un menú desplegable de una sola fila.

Revisión de navegación

- Inicio muestra Inicio, Proyectos, Servicios y Quién soy; el área de trabajo muestra Proyectos, Servicios, Arquitectura y Lab; el área personal muestra Quién soy, Cómo trabajo, Notas y Proyectos.
- Contacto permanece como CTA y el menú móvil reproduce únicamente el contexto de la ruta actual.
- Por debajo de `860px`, un elemento HTML `details` presenta el menú completo; no requiere JavaScript ni desplazamiento horizontal del header.

Primera propuesta de textos

Mi opción recomendada para el hero:

Convierto problemas de negocio en productos de datos, IA y software que funcionan en producción.

Diseño la arquitectura, conecto sistemas, automatizo procesos y llevo cada solución desde la idea hasta un producto medible y mantenible.

CTA:

Explorar proyectos
Cuéntame qué quieres resolver

Alternativa más técnica:

Diseño y construyo productos completos: datos, backend, IA, interfaces e infraestructura.

Alternativa más orientada a consultoría:

Transformo procesos y datos dispersos en soluciones digitales que se pueden usar, medir y escalar.

Mi recomendación es usar la primera: equilibra tu perfil técnico, producto y consultoría sin venderte únicamente como desarrollador freelance.

El siguiente paso sería ejecutar el commit 1, manteniendo estos textos como borrador hasta que los retoques.
