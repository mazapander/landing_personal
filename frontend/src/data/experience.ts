import type { Experience } from '@/types/profile'

export const experience = [
  {
    id: 'tubacex',
    company: 'TUBACEX',
    role: 'Technical Product Owner / AI & Data Project Manager',
    period: '2023 — Actualidad',
    location: 'Entorno industrial internacional',
    logo: '/companies/tubacex.svg',
    description: 'Liderazgo técnico de iniciativas corporativas de datos, IA, BI, gobierno del dato y automatización en entorno industrial.',
    highlights: [
      'Refactorización de ingestas ERP y consolidación de arquitectura DWH.',
      'Escalado del ecosistema BI corporativo de 30 a 150 dashboards.',
      'Despliegue de iniciativas GenAI con foco en adopción, seguridad y control.'
    ]
  },
  {
    id: 'helix',
    company: 'Helix',
    role: 'Technical Lead / Data & Energy Analytics',
    period: 'Proyecto previo',
    location: 'Sector energía / edificios públicos',
    logo: '/companies/helix.svg',
    description: 'Dirección técnica de un proyecto de estimación de consumo energético en edificios públicos, con foco en datos, modelado y visualización.',
    highlights: [
      'Estimación de consumo energético en edificios públicos como hospitales.',
      'Coordinación técnica de un equipo pequeño de 2–3 personas.',
      'Conversión de datos dispersos en indicadores útiles para decisión.'
    ]
  },
  {
    id: 'ferchau',
    company: 'Ferchau',
    role: 'AI / Data Consultant',
    period: 'Proyecto previo',
    location: 'Consultoría tecnológica',
    logo: '/companies/ferchau.svg',
    description: 'Diseño de soluciones de matching entre candidatos y ofertas usando LLMs, scoring y automatización de procesos de selección.',
    highlights: [
      'Matching candidatos-ofertas con modelos de lenguaje y criterios explicables.',
      'Scoring orientado a reducir fricción en procesos de selección.',
      'Liderazgo técnico de equipo junior en componentes de IA.'
    ]
  },
  {
    id: 'anderdata',
    company: 'AnderData',
    role: 'Builder / Freelance Data, IA & Automatización',
    period: 'Actualidad',
    location: 'Proyectos propios y consultoría independiente',
    logo: '/companies/anderdata.svg',
    description: 'Laboratorio personal para construir productos reales de datos, IA, automatización, dashboards y herramientas verticales desplegables.',
    highlights: [
      'Productos propios con React, TypeScript, FastAPI, Postgres y Docker.',
      'Automatizaciones WhatsApp, dashboards y herramientas de scraping e ingesta.',
      'Foco en soluciones pequeñas, útiles, mantenibles y monetizables.'
    ]
  }
] satisfies Experience[]
