# AnderData Landing

Landing personal pública de **Ander Fernández** para centralizar perfil profesional, redes, proyectos públicos y actividad técnica.

La idea es sencilla: una página rápida, limpia y mantenible para compartir en LinkedIn, entrevistas, propuestas freelance o contacto profesional.

**Producción prevista:** `https://anderdata.es`  
**Alias recomendado:** `https://www.anderdata.es` redirigido a `https://anderdata.es`

---

## Qué incluye

- Perfil profesional cargado desde JSON.
- Links principales: LinkedIn, GitHub, contacto y web.
- Proyectos destacados.
- Stack tecnológico y experiencia técnica.
- Widget de actividad GitHub.
- Analítica con Umami.
- Build estático servido con Nginx.
- Despliegue con Docker Compose.

---

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | React + Vite + TypeScript |
| Estilos | CSS modular/global del proyecto |
| Analítica | Umami |
| Servidor estático | Nginx |
| Despliegue | Docker Compose |
| Proxy público | Nginx Proxy Manager / Cloudflare |

---

## Estructura relevante

```bash
.
├── docker-compose.yml
├── .env.example
├── README.md
└── frontend/
    ├── Dockerfile
    ├── index.html
    ├── package.json
    └── src/
        ├── data/
        │   └── profile.json
        ├── components/
        ├── hooks/
        ├── styles/
        └── types/
```

El contenido editable está principalmente en:

```bash
frontend/src/data/profile.json
```

Ahí se modifican:

- nombre;
- claim profesional;
- descripción;
- enlaces;
- tecnologías;
- proyectos;
- widgets visibles.

---

## Requisitos

Para desarrollo local:

- Node.js 20 o superior.
- npm.

Para producción:

- Docker.
- Docker Compose.
- Red Docker externa `apps` creada en el VPS.
- Nginx Proxy Manager o proxy equivalente.
- Instancia de Umami si se quiere analítica.

Crear la red si no existe:

```bash
docker network create apps
```

---

## Configuración de entorno

Copia el ejemplo:

```bash
cp .env.example .env
```

Variables disponibles:

```env
VITE_UMAMI_WEBSITE_ID=your-umami-website-id-here
VITE_GITHUB_TOKEN=your-github-token-here
```

Notas:

- `VITE_UMAMI_WEBSITE_ID` es necesario para asociar la web con el proyecto correcto en Umami.
- `VITE_GITHUB_TOKEN` debe usarse solo si el widget de GitHub necesita acceder a datos no públicos.
- No subas tokens reales al repositorio.
- Si el token no es necesario, déjalo vacío.

El script de Umami se carga desde:

```html
https://u.anderdata.es/script.js
```

---

## Desarrollo local

```bash
cd frontend
npm install
npm run dev
```

Vite levantará la aplicación normalmente en:

```bash
http://localhost:5173
```

---

## Build de producción

```bash
cd frontend
npm install
npm run build
```

El resultado se genera en:

```bash
frontend/dist
```

---

## Ejecutar con Docker

Desde la raíz del repositorio:

```bash
docker compose up -d --build
```

Comprobar estado:

```bash
docker compose ps
```

Ver logs:

```bash
docker compose logs -f anderdata-landing
```

Reiniciar:

```bash
docker compose restart anderdata-landing
```

Parar:

```bash
docker compose down
```

---

## Despliegue en VPS

### 1. Clonar el repositorio

```bash
git clone https://github.com/mazapander/landing_personal.git
cd landing_personal
```

### 2. Configurar variables

```bash
cp .env.example .env
nano .env
```

### 3. Levantar contenedor

```bash
docker compose up -d --build
```

### 4. Configurar Nginx Proxy Manager

Crear un **Proxy Host**:

| Campo | Valor |
|---|---|
| Domain Names | `anderdata.es`, `www.anderdata.es` |
| Scheme | `http` |
| Forward Hostname/IP | `anderdata-landing` |
| Forward Port | `80` |
| SSL | Let's Encrypt |
| Force SSL | Enabled |
| HTTP/2 | Enabled |

Recomendación:

```text
www.anderdata.es -> anderdata.es
```

Mantener un único dominio principal mejora marca, SEO y medición en Umami.

---

## Actualizar contenido

Editar:

```bash
frontend/src/data/profile.json
```

Después reconstruir:

```bash
docker compose up -d --build
```

Ejemplo de bloque de proyecto:

```json
{
  "id": "saas-citas-whatsapp",
  "title": "SaaS de citas por WhatsApp",
  "description": "Producto para gestionar reservas, recordatorios y conversaciones por WhatsApp con reglas deterministas e IA.",
  "url": "https://citas.anderdata.es/comercial",
  "status": "En desarrollo",
  "public": true,
  "stack": ["react", "typescript", "fastapi", "postgresql", "docker", "langchain"]
}
```

---

## Analítica con Umami

Umami debe medir como mínimo:

- visitas;
- fuentes de tráfico;
- dispositivos;
- países;
- clicks en links;
- clicks en proyectos.

Eventos recomendados:

```text
click_link
click_project
click_github
click_contact
```

Validación rápida desde navegador:

```js
window.umami
```

Si devuelve `undefined`, revisar:

- que `VITE_UMAMI_WEBSITE_ID` esté definido;
- que el script `https://u.anderdata.es/script.js` cargue correctamente;
- que no haya bloqueo por CSP, adblocker o proxy;
- que el dominio esté dado de alta en Umami.

---

## Checklist antes de publicar

- [ ] `npm run build` funciona sin errores.
- [ ] `docker compose up -d --build` levanta el contenedor.
- [ ] `https://anderdata.es` carga correctamente.
- [ ] `https://www.anderdata.es` redirige o carga correctamente.
- [ ] El certificado SSL es válido.
- [ ] Umami registra pageviews.
- [ ] Los links abren en nueva pestaña.
- [ ] Los proyectos apuntan a URLs reales.
- [ ] El favicon carga correctamente.
- [ ] La imagen Open Graph se ve bien al compartir en LinkedIn/WhatsApp.
- [ ] No hay tokens ni secretos en GitHub.

---

## Roadmap corto

- Añadir una sección hero más potente con una frase de posicionamiento clara.
- Crear tarjetas de caso de uso con problema, solución, stack e impacto.
- Añadir CTA principal: `Hablemos`, `Ver proyectos` o `Contactar`.
- Añadir imagen Open Graph específica para compartir en LinkedIn.
- Añadir eventos personalizados de Umami por cada link y proyecto.
- Añadir una página `/cv` o descarga controlada del CV.

---

## Posicionamiento de la landing

Esta landing no debe parecer un CV estático. Debe funcionar como una **tarjeta profesional viva**:

> Data, AI & Product Builder con foco en convertir necesidades de negocio en productos técnicos reales, desplegables y medibles.

La prioridad es que una persona entienda en menos de 10 segundos:

1. quién es Ander;
2. qué sabe construir;
3. qué impacto ha generado;
4. dónde puede ver proyectos;
5. cómo puede contactar.
