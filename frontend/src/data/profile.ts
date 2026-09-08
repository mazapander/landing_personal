import type { Profile, SocialLink } from '@/types/profile'

export const profile = {
  name: 'Ander Fernández',
  headline: 'Product · Data · AI · Engineering',
  description: 'Trabajo en la intersección entre producto, datos e IA. En AnderData documento proyectos, experimentos y herramientas que construyo para aprender, probar ideas y resolver problemas concretos.',
  location: 'Bilbo',
  avatar: '/profile.jpg',
} satisfies Profile

export const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'Perfil profesional y publicaciones sobre IA, datos, producto y automatización',
    url: 'https://www.linkedin.com/in/ander-data-projects',
    type: 'social',
    featured: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    description: 'Repositorios, pruebas técnicas, automatizaciones y productos personales',
    url: 'https://github.com/mazapander',
    type: 'code',
    featured: true,
  },
  {
    id: 'email',
    label: 'Contacto',
    description: 'Ideas, proyectos, colaboraciones o una conversación interesante',
    url: 'mailto:ander.fernandez.gonzalbo@gmail.com',
    type: 'contact',
    featured: true,
  },
  {
    id: 'anderdata',
    label: 'AnderData',
    description: 'Laboratorio personal y punto de entrada a proyectos, experimentos y notas',
    url: 'https://anderdata.es',
    type: 'web',
    featured: false,
  },
] satisfies SocialLink[]
