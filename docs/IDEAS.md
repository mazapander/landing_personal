# Fase 6 — Ideas

Base: `d27f93a2dab06431e69e4f370a95361adb826111`.

## Alcance y decisiones

Ideas es el destino público del cuaderno de notas. Se conserva la colección `notes` y sus Markdown para evitar una migración interna innecesaria: antes de esta fase solo existía una plantilla en borrador.

- Índice `/ideas/` con notas por fecha descendente y desempate estable por ID.
- Detalle `/ideas/:id/` generado en build; borradores excluidos.
- Tres categorías: Datos, Sistemas, Desarrollo. Son etiquetas editoriales; no generan archivos de categoría ni controles de filtrado.
- Un campo `projects` con referencias de Astro es la fuente de relación. Genera enlaces hacia los proyectos y enlaces de vuelta desde los proyectos. Ambos extremos filtran borradores.
- Título, descripción, canonical y metadatos sociales reutilizan `BaseLayout`; miga de pan visible y estructurada en cada nota.
- Sitemap incluye notas públicas y retira `/notas/`.
- Sin CMS, búsqueda, paginación, nuevas dependencias ni JavaScript interactivo específico de Ideas.

## Primera tanda

| Nota | Categoría | Proyecto relacionado |
| --- | --- | --- |
| Cómo comparar datos de vivienda sin mezclar contextos | Datos | IA Compra Pisos |
| Domótica: enviar una orden no confirma el estado del dispositivo | Sistemas | Connected Home Lab, AnderData Systems |
| Por qué separar las reglas de corte del solver de optimización | Desarrollo | Industrial Cutting Optimizer |

Las notas desarrollan criterios de las historias y de `PROJECT_STORY_DECISIONS.md`. Los escenarios ilustrativos se identifican como ejemplos conceptuales; no se presentan como experimentos realizados ni benchmarks. El contenido busca preguntas concretas de larga cola; no se ha realizado una investigación de volumen de búsquedas.

## Publicar una nota

1. Copiar `frontend/src/content/notes/template.md` a un nombre descriptivo y estable. El nombre determina el slug.
2. Escribir título, descripción, categoría y fecha real de publicación (`YYYY-MM-DD`). Las cadenas con dos puntos deben ir entre comillas.
3. Añadir en `projects` los IDs de los proyectos relacionados. No es necesario editar los proyectos para crear los enlaces de vuelta.
4. Redactar una pregunta concreta, el criterio con un ejemplo y los límites o siguientes pasos. Evitar duplicar la historia completa del proyecto.
5. Cambiar `draft` a `false`, ejecutar `npm run verify` desde `frontend/` y reconstruir/desplegar como el resto del sitio.

La fecha organiza y muestra la publicación; no programa una publicación futura. El control editorial de visibilidad es `draft`.

## Compatibilidad de Notas

- `/notas/` genera un redirect HTML de Astro (meta refresh, canonical a Ideas y `noindex`) como fallback para hosting estático.
- El Nginx del repositorio añade 301 para `/notas` y `/notas/` hacia `/ideas/` al desplegar esa configuración.
- El enlace de Lab apunta directamente a Ideas, evitando el salto.
- No existían notas públicas ni rutas `/notas/:slug/`; no se crea un migrador ni redirects especulativos.

## Revisión y validación

Ponytail no estaba disponible en las herramientas ni en el directorio de plugins. Se utilizó un agente independiente de revisión de alcance, simplificación y diff. Detectó valores YAML con `: ` sin comillas; se corrigieron antes de la verificación final.

`npm run verify`: Astro check sin errores/avisos (62 archivos), 7 pruebas unitarias, build estático y 7 smoke tests. Se verifican rutas, enlaces, metadatos, navegación activa, relaciones en ambas direcciones, exclusión del borrador y redirect estático.

El 301 está configurado para Nginx, pero no se ha ejecutado el contenedor en este entorno. La revisión visual en las siete anchuras del contrato queda pendiente: la descarga de Chromium Headless falló por timeout. No se afirma despliegue en producción ni indexación.
