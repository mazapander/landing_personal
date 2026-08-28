import type { Profile, SocialLink } from '@/types/profile'

export const profile = {
  "name": "Ander Fernández",
  "headline": "Technical Product Owner | Data, AI & Governance | IT Delivery Lead",
  "description": "Lidero iniciativas de datos, IA, gobierno del dato y producto digital en entornos industriales. Conecto necesidades de negocio, arquitectura técnica y ejecución para llevar casos de uso desde la idea hasta la adopción real.",
  "location": "Bilbo",
  "avatar": "/profile.jpg"
} satisfies Profile

export const socialLinks = [
  {
    "id": "linkedin",
    "label": "LinkedIn",
    "description": "Perfil profesional, publicaciones sobre IA, datos, producto y automatización",
    "url": "https://www.linkedin.com/in/ander-data-projects",
    "type": "social",
    "featured": true
  },
  {
    "id": "github",
    "label": "GitHub",
    "description": "Repositorios, pruebas técnicas, automatizaciones y productos personales",
    "url": "https://github.com/mazapander",
    "type": "code",
    "featured": true
  },
  {
    "id": "email",
    "label": "Contacto",
    "description": "Escríbeme para proyectos, colaboraciones, producto o consultoría",
    "url": "mailto:ander.fernandez.gonzalbo@gmail.com",
    "type": "contact",
    "featured": true
  },
  {
    "id": "anderdata",
    "label": "AnderData",
    "description": "Landing personal y punto de entrada a mis proyectos públicos",
    "url": "https://anderdata.es",
    "type": "web",
    "featured": false
  }
] satisfies SocialLink[]
