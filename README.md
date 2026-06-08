# AnderData Landing

Landing pública de Ander Fernández - Data, AI & Product Builder.

## Stack

- React + Vite + TypeScript
- Nginx
- Docker Compose
- Umami (analítica)

## Desarrollo local

```bash
cd frontend
npm install
npm run dev
```

## Build producción

```bash
cd frontend
npm run build
```

## Docker

```bash
docker-compose up -d --build
```

## Variables de entorno

Copiar `.env.example` a `.env` en la raíz del proyecto y configurar:

- `VITE_UMAMI_WEBSITE_ID` - ID del website en Umami
- `VITE_GITHUB_TOKEN` - token de GitHub para el heatmap
