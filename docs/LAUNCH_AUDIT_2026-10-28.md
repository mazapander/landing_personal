# Revisión editorial previa al lanzamiento — 28/10/2026

Este documento separa **cambios implementados** de **hechos que requieren validación**. Un push a GitHub no demuestra que un proyecto esté desplegado ni que sus hitos funcionales estén terminados.

## 1. Ajustes de landing implementados en esta rama

- [x] Mantener cabecera principal y eliminar las dos líneas que se percibían como encabezados duplicados en el hero.
- [x] Cambiar el lema inglés a un castellano más natural.
- [x] Conservar el diseño de «En construcción».
- [x] Añadir experiencia en Kutxabank desde septiembre de 2026 y finalizar el periodo Tubacex.
- [x] Incorporar la titulación de ingeniería; no se inventan certificaciones.
- [x] Revisar presentación de la foto existente; sustitución real pendiente de recibir una imagen definitiva.
- [x] Revisar redacción de las tecnologías existentes y suavizar afirmaciones demasiado enfáticas.
- [ ] Completar tecnologías aún ausentes (por ejemplo n8n y Keycloak) tras revisar nivel y fechas reales de uso.
- [x] Eliminar enlaces a repositorios privados de fichas públicas.
- [x] Incorporar App Cantera con comunicación pública limitada a pruebas con un par de clubes.

## 2. Auditoría de proyectos

Fechas de abajo = **última actualización visible del repositorio remoto**, no fecha de despliegue.

| Proyecto/caso | Repositorio y visibilidad | Último push visible | Pendiente de verificar antes de publicar |
| --- | --- | --- | --- |
| IA Compra Pisos | IAcomprapisos (público) | 07/09/2026 | Fuentes de datos, demo reproducible, nivel real del MVP, capturas. |
| Basketball Intelligence | historia agregada | — | Separar el estado de StatsFEB, Tagger y Motion Lab; no presentar integración completa como terminada. |
| StatsFEB | StatsFEB (privado) | 05/10/2026 | Flujo que funciona hoy, ejemplos de reportes y límites; decidir si compartir demo o capturas. |
| Basketball Video Tagger | Etiquetador_Acciones_basket (público) | 23/10/2026 | Validar clips/exportaciones en entorno real y generar captura pública sin datos personales. |
| Motion Lab | motion-lab (privado) | 26/06/2026 | Última prueba, limitaciones reales del modelo y vídeo reutilizable con derechos. |
| AnderData Systems | anderdata_server (privado; copia Git remota antigua) | 06/04/2026 | Contrastar contra VPS actual, accesos, monitorización y seguridad. No copiar configuración privada. |
| Connected Home Lab | HomeServer (privado) | 07/07/2026 | Estado de HA actual, sensores activos y ejemplos sin datos domésticos sensibles. |
| SaaS citas WhatsApp | GESTIONCITASWHATTSAPP (privado) | 25/08/2026 | Validar URL comercial, arquitectura y estado de operativa multicliente. |
| Industrial Cutting Optimizer | CortesMateriaPrima (privado) | 09/04/2026 | Verificar solución de optimización y publicar evidencia propia, no enlazar a repo privado. |
| App Cantera | app_cantera (privado) | 28/10/2026 | Nuevo caso en **draft**: despliegue, consentimiento para imágenes, migración de auth y alcance por clubes. |

## 3. Bloqueadores de publicación

- [ ] **Imagen real** de «Sobre mí»: confirmar que la foto actual es la definitiva o sustituirla. Revisar permiso de publicación.
- [ ] **Experiencia y formación**: revisar denominación exacta, fechas e institución de ingeniería; el contenido es una propuesta para validar.
- [ ] **Proyectos**: revisar como mínimo estado, último hito realmente demostrado, stack, capturas y enlaces de cada ficha pública.
- [ ] **SaaS comercial**: comprobar funcionamiento real de enlace externo sin sesión previa.
- [ ] **SEO y enlaces**: validar favicon, imagen Open Graph, sitemap y ausencia de enlaces rotos.
- [ ] **Seguridad/privacidad**: revisar datos sensibles de infraestructura, proyectos corporativos y personas menores de edad.
- [ ] **Pruebas**: ejecutar `cd frontend && npm ci && npm run verify` en entorno de desarrollo.
- [ ] **Preproducción**: comparar portada, perfil y fichas de proyecto en móvil y escritorio.
- [ ] **Despliegue**: fusionar la rama solo después de revisar cambios y confirmar los puntos anteriores.

## 4. Criterio editorial de proyecto

Para cada caso público anotar: **problema, solución, estado verificable, qué funciona, qué falta, stack utilizado y una prueba visual segura**. Un `updatedAt` se modifica cuando la historia recibe contenido nuevo y verificable, no al publicar una fecha ficticia.
