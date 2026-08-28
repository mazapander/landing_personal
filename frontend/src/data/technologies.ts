import type { Technology } from '@/types/profile'

export const technologies = [
  {
    "id": "python",
    "name": "Python",
    "icon": "/tech/python.svg",
    "since": "2020-01-15",
    "category": "Data & Backend",
    "description": "Empezó siendo el lenguaje de mi TFG y me especialicé en el para temas de Data e IA... A dia de hoy lo uso en practicamente todos mis proyectos",
    "top": true,
    "accent": "#3776ab"
  },
  {
    "id": "sql",
    "name": "SQL",
    "icon": "/tech/sql.svg",
    "since": "2019-06-01",
    "category": "Data",
    "description": "He usado desde entornos enterprise como MSQL y Oracle hasta otros motores diferentes como Postgres o mysql. Me gusta la optimización de queries y estandarización de bases de datos.",
    "top": true,
    "accent": "#336791"
  },
  {
    "id": "postgresql",
    "name": "PostgreSQL",
    "icon": "/tech/postgresql.svg",
    "since": "2020-11-05",
    "category": "Data",
    "description": "Base de datos principal para productos personales, analítica y servicios desplegados.",
    "top": true,
    "accent": "#336791"
  },
  {
    "id": "react",
    "name": "React",
    "icon": "/tech/react.svg",
    "since": "2024-09-01",
    "category": "Frontend",
    "description": "Framework moderno que uso como frontend en mis apps, sin ser ningun experto pero con conocimientos base para poder entender arquitecturas y como desarrollar interfaces.",
    "top": true,
    "accent": "#61dafb"
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "icon": "/tech/typescript.svg",
    "since": "2025-03-01",
    "category": "Frontend",
    "description": "Frontend más robusto para proyectos React y productos con lógica compleja, lo uso para mejorar la calidad y mantenibilidad del código.",
    "top": false,
    "accent": "#3178c6"
  },
  {
    "id": "docker",
    "name": "Docker",
    "icon": "/tech/docker.svg",
    "since": "2022-05-14",
    "category": "Infra",
    "description": "Despliegue de servicios, entornos reproducibles y arquitectura self-hosted, me gusta la gestion de contenedores y mi propio servidor para pruebas y despliegues de aplicaciones y su infraestructura.",
    "top": true,
    "accent": "#2496ed"
  },
  {
    "id": "fastapi",
    "name": "FastAPI",
    "icon": "/tech/fastapi.svg",
    "since": "2025-08-15",
    "category": "Backend",
    "description": "APIs rápidas para productos de datos, automatización e integraciones, antes usaba Flask pero me resulta mas comodo este framework en el que todavia me estoy formando.",
    "top": true,
    "accent": "#009688"
  },
  {
    "id": "qlik",
    "name": "Qlik Sense",
    "icon": "/tech/qlik.svg",
    "since": "2023-02-01",
    "category": "BI",
    "description": "Dashboards, adopción analítica, reporting corporativo y estandarización de KPIs, me gusta porque permite dashboards mas profesionales que Power BI y me gusta las opciones de governanza de accesos y control de la plataforma que ofrece.",
    "top": true,
    "accent": "#009845"
  },
  {
    "id": "pentaho",
    "name": "Pentaho",
    "icon": "/tech/pentaho.svg",
    "since": "2023-01-01",
    "category": "ETL",
    "description": "Estandarización de pipelines ETL, controles internos y monitorización de cargas, la herramienta que se usaba en mi ultima experiencia.",
    "top": false,
    "accent": "#cc0000"
  },
  {
    "id": "datahub",
    "name": "DataHub",
    "icon": "/tech/datahub.svg",
    "since": "2024-01-01",
    "category": "Data Governance",
    "description": "Catálogo, ownership, definiciones de KPI y gobierno del dato empresarial, herramienta open source que se definió como primer acercamiento al data governance corporativo.",
    "top": true,
    "accent": "#533fd7"
  },
  {
    "id": "jira",
    "name": "Jira",
    "icon": "/tech/jira.svg",
    "since": "2022-01-01",
    "category": "Delivery",
    "description": "Gestión de demanda, delivery, visibilidad de proyectos y automatización de reporting. Herramienta que me parece imprescindible y que me encanta programar flujos, automatizaciones y definir metodos de trabajo. Ademas me he peleado con la API para diferentes soluciones usando IA agnostica a Attlassian.",
    "top": true,
    "accent": "#0052cc"
  },
  {
    "id": "langchain",
    "name": "LangChain",
    "icon": "/tech/langchain.svg",
    "since": "2023-05-01",
    "category": "AI",
    "description": "Construcción de agentes, flujos con LLMs y aplicaciones GenAI controladas, Framework de vanguardia en el que me formo activamente para conocer bien los metodos para crear agentes y las capacidades del mismo.",
    "top": false,
    "accent": "#f5a524"
  },
  {
    "id": "azure",
    "name": "Azure",
    "icon": "/tech/azure.svg",
    "since": "2023-01-01",
    "category": "Cloud",
    "description": "Servicios cloud, integración corporativa y despliegue de soluciones empresariales, conocimiento basico de las herramientas y algun que otro proyecto con ellas, aunque con ganas de seguir aprendiendo al respecto.",
    "top": false,
    "accent": "#0078d4"
  }
] satisfies Technology[]
