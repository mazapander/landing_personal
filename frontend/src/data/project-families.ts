export const projectFamilies = [
  {
    projectId: 'basketball-intelligence',
    index: '01',
    type: 'LAB',
    title: 'Basketball Intelligence',
    description: 'Datos FEB, etiquetado temporal, recortes de vídeo y experimentación para detectar acciones de baloncesto.',
    href: '/proyectos/basketball-intelligence/',
    items: ['StatsFEB', 'Video Tagger', 'Motion Lab'],
  },
  {
    projectId: 'app-cantera',
    index: '02',
    type: 'PRODUCT',
    title: 'App Cantera',
    description: 'Una aplicación para coordinar equipos de cantera: calendario, asistencia, carga y acceso por roles.',
    href: '/proyectos/app-cantera/',
    items: ['PWA', 'Clubes', 'Seguimiento'],
  },
  {
    projectId: 'anderdata-systems',
    index: '03',
    type: 'SYSTEM',
    title: 'AnderData Systems',
    description: 'Infraestructura autoalojada para desplegar, proteger, observar y conectar los sistemas que voy construyendo.',
    href: '/proyectos/anderdata-systems/',
    items: ['Vehicle tracking', 'Secure access', 'Observability'],
  },
  {
    projectId: 'connected-home-lab',
    index: '04',
    type: 'LAB',
    title: 'Connected Home',
    description: 'Automatización local, sensores y nodos distribuidos para experimentar con viviendas conectadas de forma útil.',
    href: '/proyectos/connected-home-lab/',
    items: ['Multi-home', 'Energy', 'Zigbee / MQTT'],
  },
] as const

export const labExtensions = [
  {
    type: 'AUTOMATION',
    title: 'Automation Library',
    description: 'Sistemas conectados para transformar notas, audios y eventos en información útil, sin perder trazabilidad.',
    href: '/lab/',
  },
  {
    type: 'SYSTEM',
    title: 'Building how I build',
    description: 'Un framework propio para pasar de idea a contrato, build y review usando agentes sin perder criterio.',
    href: '/como-trabajo/',
  },
] as const
