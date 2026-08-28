import type { Project, Widget } from '@/types/profile'

export const projects = [
  {
    "id": "saas-citas-whatsapp",
    "title": "SaaS de citas por WhatsApp",
    "description": "Producto multicliente para gestionar reservas, recordatorios y conversaciones por WhatsApp combinando reglas deterministas, plantillas, botones e IA.",
    "url": "https://citas.anderdata.es/comercial",
    "status": "En desarrollo",
    "public": true,
    "stack": [
      "typescript",
      "react",
      "postgresql",
      "fastapi",
      "docker",
      "langchain"
    ]
  },
  {
    "id": "advanced-feb-basketball-analytics",
    "title": "Advanced FEB Basketball Analytics Platform",
    "description": "Sistema para scraping, modelado de datos y generación automática de informes avanzados sobre partidos y jugadores de baloncesto. Actualmente con una base de datos de mas de 1000 partidos y mas de 3000 jugadores a lo largo de los años en categorias FEB",
    "url": "https://github.com/mazapander",
    "status": "Portfolio",
    "public": true,
    "stack": [
      "python",
      "sql",
      "postgresql",
      "docker",
      "fastapi"
    ]
  },
  {
    "id": "speaker-diarization-transcription",
    "title": "Speaker Diarization & Transcription System",
    "description": "Pipeline para separar hablantes, transcribir sesiones presenciales y extraer métricas útiles de reuniones o sesiones profesionales.",
    "url": "https://github.com/mazapander",
    "status": "Concepto / prototipo",
    "public": false,
    "stack": [
      "python",
      "langchain",
      "docker",
      "elevenlabs",
      "whisper"
    ]
  },
  {
    "id": "corporate-apps-licenses-portal",
    "title": "Corporate Applications & Licenses Portal",
    "description": "Launcher interno para centralizar acceso a herramientas, licencias, aprobaciones y tracking de uso en entornos corporativos.",
    "url": "https://github.com/mazapander",
    "status": "Idea de producto",
    "public": false,
    "stack": [
      "react",
      "typescript",
      "fastapi",
      "postgresql"
    ]
  },
  {
    "id": "framework-agentes",
    "title": "Developer Framework para agentes IA",
    "description": "Repositorio para estructurar desarrollo con herramientas de IA, agentes, automatizaciones y patrones reutilizables.",
    "url": "https://github.com/mazapander/developer-framework-ander-fernandez",
    "status": "Público",
    "public": true,
    "stack": [
      "codex",
      "claude code",
      "python"
    ]
  },
  {
    "id": "personal-website",
    "title": "Personal Website & Landing",
    "description": "Landing personal para centralizar información, proyectos y contacto. Alojada en mi propio servidor y con despliegue automatizado mediante Docker y Github Actions.",
    "url": "https://github.com/mazapander/landing_personal",
    "status": "Público",
    "public": true,
    "stack": [
      "react",
      "typescript",
      "fastapi",
      "docker"
    ]
  }
] satisfies Project[]

export const widgets = [
  {
    "id": "github-activity",
    "type": "github-heatmap",
    "config": {
      "username": "mazapander",
      "githubToken": "",
      "includePrivate": true
    },
    "public": true
  }
] satisfies Widget[]
