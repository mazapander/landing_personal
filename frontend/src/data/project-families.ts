export const projectFamilies = [
  {
    index: '01',
    type: 'PRODUCT',
    title: 'IA Compra Pisos',
    description: 'Datos públicos y señales de contexto para entender mejor una decisión inmobiliaria.',
    href: '/proyectos/ia-compra-pisos/',
    items: ['Housing data', 'Decision context', 'Data product'],
  },
  {
    index: '02',
    type: 'LAB',
    title: 'Basketball Intelligence',
    description: 'Un ecosistema que conecta datos estructurados, vídeo etiquetado y computer vision aplicada al baloncesto.',
    href: '/proyectos/basketball-intelligence/',
    items: ['StatsFEB', 'Video Tagger', 'Motion Lab'],
  },
  {
    index: '03',
    type: 'SYSTEM',
    title: 'AnderData Systems',
    description: 'Infraestructura autoalojada para desplegar, proteger, observar y conectar los sistemas que voy construyendo.',
    href: '/proyectos/anderdata-systems/',
    items: ['Vehicle tracking', 'Secure access', 'Observability'],
  },
  {
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
    description: 'Flujos n8n y pequeñas automatizaciones documentadas como piezas reutilizables.',
    href: '/lab/',
  },
  {
    type: 'SYSTEM',
    title: 'Building how I build',
    description: 'Un framework propio para pasar de idea a contrato, build y review usando agentes sin perder criterio.',
    href: '/como-trabajo/',
  },
] as const
