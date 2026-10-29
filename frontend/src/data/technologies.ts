import type { Technology } from '@/types/profile'

export const technologies = [
  {
    "id": "python",
    "name": "Python",
    "icon": "/tech/python.svg",
    "since": "2020-01-15",
    "category": "Data & Backend",
    "description": "Empecé a usarlo en el TFG y hoy es uno de mis lenguajes principales para datos, automatización y aplicaciones de IA.",
    "top": true,
    "accent": "#3776ab"
  },
  {
    "id": "sql",
    "name": "SQL",
    "icon": "/tech/sql.svg",
    "since": "2019-06-01",
    "category": "Data",
    "description": "Consultas, modelado y optimización en motores corporativos y proyectos propios, incluyendo Oracle, SQL Server y PostgreSQL.",
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
    "description": "Interfaz de aplicaciones personales: componentes, estados, integración con APIs y desarrollo de productos web.",
    "top": true,
    "accent": "#61dafb"
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "icon": "/tech/typescript.svg",
    "since": "2025-03-01",
    "category": "Frontend",
    "description": "Tipado para mantener interfaces y contratos de datos claros en proyectos React y Node.js.",
    "top": false,
    "accent": "#3178c6"
  },
  {
    "id": "docker",
    "name": "Docker",
    "icon": "/tech/docker.svg",
    "since": "2022-05-14",
    "category": "Infra",
    "description": "Despliegue de servicios y plataformas autoalojadas, con entornos reproducibles y operación mediante contenedores.",
    "top": true,
    "accent": "#2496ed"
  },
  {
    "id": "fastapi",
    "name": "FastAPI",
    "icon": "/tech/fastapi.svg",
    "since": "2025-08-15",
    "category": "Backend",
    "description": "APIs e integraciones para aplicaciones de datos; lo utilizo en proyectos propios y sigo profundizando en sus patrones.",
    "top": true,
    "accent": "#009688"
  },
  {
    "id": "qlik",
    "name": "Qlik Sense",
    "icon": "/tech/qlik.svg",
    "since": "2023-02-01",
    "category": "BI",
    "description": "BI corporativo, diseño de indicadores, reporting y gobierno de accesos a analítica.",
    "top": true,
    "accent": "#009845"
  },
  {
    "id": "pentaho",
    "name": "Pentaho",
    "icon": "/tech/pentaho.svg",
    "since": "2023-01-01",
    "category": "ETL",
    "description": "Diseño y mantenimiento de procesos ETL y control de cargas en entornos corporativos.",
    "top": false,
    "accent": "#cc0000"
  },
  {
    "id": "datahub",
    "name": "DataHub",
    "icon": "/tech/datahub.svg",
    "since": "2024-01-01",
    "category": "Data Governance",
    "description": "Catálogo de datos, ownership y definiciones compartidas de indicadores para iniciativas de gobierno del dato.",
    "top": true,
    "accent": "#533fd7"
  },
  {
    "id": "jira",
    "name": "Jira",
    "icon": "/tech/jira.svg",
    "since": "2022-01-01",
    "category": "Delivery",
    "description": "Planificación y seguimiento de proyectos, flujos de trabajo y automatizaciones integradas mediante API.",
    "top": true,
    "accent": "#0052cc"
  },
  {
    "id": "langchain",
    "name": "LangChain",
    "icon": "/tech/langchain.svg",
    "since": "2023-05-01",
    "category": "AI",
    "description": "Experimentación con agentes y aplicaciones LLM; evaluación de patrones de integración y orquestación.",
    "top": false,
    "accent": "#f5a524"
  },
  {
    "id": "azure",
    "name": "Azure",
    "icon": "/tech/azure.svg",
    "since": "2023-01-01",
    "category": "Cloud",
    "description": "Experiencia inicial con servicios cloud e integraciones empresariales; conocimiento en evolución.",
    "top": false,
    "accent": "#0078d4"
  }
] satisfies Technology[]
