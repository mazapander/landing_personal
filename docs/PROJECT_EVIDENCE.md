# Historias con evidencia y progreso

## Contrato editorial

El contenido editorial y la navegación se escriben en español. Se conservan nombres de producto, tecnologías y stamps de marca en inglés. No se añaden porcentajes de finalización: una lista abierta de hitos no tiene un denominador estable. El contador describe solo los hitos publicados.

Cada historia prioriza visuales, problema, estado actual, funcionamiento y decisiones. `updatedAt` indica una revisión de la historia; no la fecha de despliegue ni una prueba de disponibilidad. `updateSummary` alimenta Home y describe el cambio real de contenido.

## Añadir tantos hitos como necesite el proyecto

En `frontend/src/content/projects/<slug>.md`:

```yaml
milestones:
  - title: Modelo de datos documentado
    description: Tablas y relaciones descritas en la historia del proyecto.
    status: done
    evidence:
      label: Ver el modelo
      href: '#modelo-de-datos'
  - title: Ejecutar la ingesta de una temporada
    description: Validar cobertura y errores antes de cerrar la ejecución.
    status: in-progress
  - title: Publicar una comprobación de calidad
    description: Adjuntar recuentos, fecha de ejecución y resultado observado.
    status: planned
```

Estados: `done`, `in-progress`, `planned`. Fecha opcional en `YYYY-MM-DD`; añadirla solo si se conoce. El orden del array es el orden editorial del timeline. No se infieren fechas de la fecha de modificación del archivo. Los hitos completados deben enlazar evidencia y describir su alcance.

Para declarar «ingestas FEB completadas», hace falta identificar competición/temporada, ejecución, cobertura y errores pendientes. La existencia del código del pipeline no basta. Para «DB levantada», hace falta comprobar el servicio; un esquema SQL solo acredita que el modelo está definido. Un diagrama de diseño no acredita un despliegue.

## Diagramas y capturas

Los cuatro pilares incluyen dos diagramas HTML/CSS específicos de los flujos documentados. El texto es seleccionable y accesible; no requiere JavaScript, imágenes raster ni petición adicional. Los escenarios previstos se identifican en el pie. No son screenshots ni benchmarks.

Las capturas deben estar en `frontend/src/assets/projects/<slug>/`. El schema de Astro usa `image()` y `ProjectMedia` utiliza `Picture` con AVIF/WebP, variantes 400/800/1200 y dimensiones intrínsecas. La portada carga eager en la historia y lazy en listados; las galerías siempre lazy. La portada no se repite en la galería.

```yaml
media:
  cover:
    src: ../../assets/projects/mi-proyecto/resumen.png
    alt: Vista de resultados del proyecto con filtros de temporada
    caption: Qué resultado demuestra, ámbito y fecha de la captura.
  gallery:
    - src: ../../assets/projects/mi-proyecto/detalle.png
      alt: Detalle de una ejecución y sus errores
      caption: Qué se comprobó en esa ejecución.
  fit: contain
```

El cambio de contrato afecta a `cover` y `gallery`: pasan de URL pública a fichero importado relativo al Markdown. Los logos SVG mantienen la ruta pública. No había galerías o portadas configuradas que migrar.

Antes de incorporar capturas: eliminar datos personales, credenciales y localizaciones; preservar la legibilidad a 400 px; revisar peso real de la página y variantes. Objetivo editorial: 2–4 evidencias relevantes por historia; no llenar una galería para cumplir un número.

## Portadas y SEO

`src/pages/og/[slug].png.ts` genera PNG 1200 × 630 por proyecto durante el build. Usa el título, facts y estado de la misma colección, sin servicio externo en runtime. El schema usa `CreativeWork` para historias que abarcan productos, infraestructura y experimentos; no las declara todas como aplicaciones disponibles. Perfil: `Person` + `ProfilePage`. Ideas: `TechArticle`. Los JSON-LD escapan `<`.

## Umami

Se conserva la configuración `PUBLIC_UMAMI_WEBSITE_ID` y el servidor existente. Los nuevos eventos no contienen texto libre ni datos del formulario:

| Evento | Recorrido |
| --- | --- |
| `home_to_project` | Home → historia |
| `project_to_project` | Historia → otra historia |
| `project_to_idea` | Historia → artículo |
| `about_to_contact` | Sobre mí → Contacto |
| `github_exit` | Cualquier página → github.com |

Los eventos conservan `page_path`, `destination`, placement cuando existe y los UTM existentes. No se dispara `project_to_project` al saltar dentro de la propia historia. Umami ausente no rompe la navegación. Crear los embudos/informes en la instancia requiere acceso a su panel: esta PR instrumenta los eventos, no configura el panel ni confirma recepción en producción.

## Evidencia pendiente

- Vivienda: captura real de comparación con fuente, territorio y periodo.
- Basketball: boxscore/shotchart y clip etiquetado de un caso publicable.
- Systems: estado o informe anonimizado de una ejecución.
- Connected Home: estado observado y registro de la prueba de desconexión.

La PR usa el contenido publicado del repositorio como alcance de las afirmaciones. No incorpora contenido privado ni publica resultados de ejecución que no se hayan observado.
