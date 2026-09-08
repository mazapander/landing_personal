# AnderData — Content Architecture V3

> Estado: contrato activo de arquitectura de contenido.
> Objetivo: organizar proyectos por historias y capacidades, no por repositorios.

## 1. Navegación principal

Se mantienen únicamente tres entradas:

- `Projects`
- `Ideas`
- `About`

No se añadirá `Systems`, `Automations`, `Home`, `Basketball` o similares al header principal. Esas categorías viven dentro de `Projects`.

## 2. Universo Projects

`Projects` agrupa lo que construyo. La navegación secundaria prevista es:

- `Featured`
- `Lab`
- `Systems`
- `Automations`

No todos los contenidos necesitan una página propia desde el primer día.

## 3. Familias de contenido

### 3.1 Data & AI Products

Objetivo: demostrar producto, backend, datos e IA aplicada.

Piezas iniciales:

- **IA Compra Pisos** — contexto inmobiliario con datos públicos y métricas para entender precio y esfuerzo.
- **WhatsApp Appointments** — gestión de citas, recordatorios y conversaciones automatizadas.
- **Industrial Cutting Optimizer** — optimización de materia prima con restricciones y sistemas de decisión.

### 3.2 Basketball Intelligence

Objetivo: presentar un ecosistema coherente en vez de repos aislados.

Piezas:

- **StatsFEB** — ingesta, histórico y analytics de competiciones FEB.
- **Basketball Video Tagger** — etiquetado temporal de acciones, frames, rangos, clips y datasets de vídeo.
- **Motion Lab** — computer vision para convertir acciones deportivas en datos medibles.

Narrativa común:

```text
structured data → labelled video → computer vision
```

### 3.3 AnderData Systems

Objetivo: demostrar infraestructura, operaciones, seguridad y sistemas en producción sin publicar detalles sensibles.

Proyecto paraguas:

**AnderData Infrastructure — personal cloud & systems lab**

Subpiezas públicas:

- **Vehicle Tracking System** — localización, histórico, alertas e informes automáticos. No es necesario mencionar el producto base usado.
- **Secure Service Exposure** — exposición controlada de servicios, acceso privado, reverse proxy, identidad y separación entre servicios públicos y privados.
- **Server Observability** — métricas de host y servicios, disponibilidad, alertas y monitorización de una infraestructura Ubuntu autoalojada.
- **Storage & Data Services** — servicios compartidos de almacenamiento y persistencia cuando aporten valor a la historia.

Reglas de seguridad:

- nunca publicar IPs;
- nunca publicar puertos sensibles;
- nunca publicar credenciales, dominios internos o topología explotable;
- explicar arquitectura por capacidades y decisiones, no mediante configuración operativa completa.

### 3.4 Connected Home Lab

Objetivo: mostrar IoT, integración físico-digital y automatización local.

Piezas iniciales:

- **Multi-home architecture** — control central con dispositivos y nodos distribuidos entre viviendas.
- **Garage access** — contacto seco, sensores de estado y automatización de puerta.
- **Energy monitoring** — consumo y detección de estados/ciclos de dispositivos.
- **Presence & routines** — NFC, sensores y eventos para registrar rutinas físicas.
- **Zigbee / MQTT / ESP nodes** — integración local y nodos distribuidos cuando formen parte de una solución concreta.

Home Assistant es la plataforma de integración, no el claim principal. La historia se cuenta desde el problema resuelto.

### 3.5 Automations

Objetivo: construir una biblioteca extensible de automatizaciones, especialmente flujos n8n.

Cada pieza debe ser pequeña y tener un formato estable:

```text
AD / AUTOMATION / 001
Nombre
Problema
Flujo resumido
Resultado
Tecnologías secundarias
Estado
```

Ejemplos iniciales:

- vehicle daily report;
- alerts and notifications;
- periodic data ingestion;
- appointment reminders;
- infrastructure checks;
- reporting pipelines.

Una automatización puede evolucionar a página SEO propia cuando tenga suficiente contexto y utilidad.

### 3.6 Building how I build

Objetivo: explicar el framework propio de desarrollo asistido por agentes sin vender una metodología abstracta.

Narrativa:

```text
IDEA → CONTRACT → PLAN → BUILD → REVIEW → SHIP
```

Debe mostrar:

- contratos antes de cambios grandes;
- planificación por alcance;
- agentes como herramienta, no sustituto de criterio;
- revisión;
- documentación y seguimiento;
- clean code sin sobreingeniería.

### 3.7 Optimization / Decision Systems

Puede aparecer inicialmente dentro de Data & AI Products y crecer si existen más proyectos.

Primera pieza:

- **Industrial Cutting Optimizer** — asignación de piezas a stock y optimización bajo restricciones mediante solver.

No crear una categoría independiente hasta que haya al menos dos o tres piezas con una narrativa común.

## 4. Jerarquía de exposición

### Featured

Máximo cuatro historias en la home:

1. IA Compra Pisos
2. Basketball Intelligence
3. AnderData Systems
4. Connected Home Lab

No tienen que ser siempre las mismas; `Currently building` puede rotar por estado.

### Projects

Piezas con suficiente sustancia para explicar problema, decisiones y resultado.

### Experiments

Pruebas, prototipos y componentes incompletos.

### Automations

Contenido pequeño y serializado, diseñado para crecer con bajo coste editorial.

## 5. Regla de agrupación

No mostrar tres repos como tres proyectos cuando juntos cuentan una historia mejor.

Preferir:

> Basketball Intelligence → StatsFEB + Tagger + Motion Lab

frente a tres cards sin relación.

Preferir:

> AnderData Systems → infrastructure + tracking + observability

frente a listar herramientas de servidor.

## 6. Regla de tecnologías

Las tecnologías son evidencia secundaria.

Preferir:

> “Sistema de seguimiento que genera informes de recorrido y alertas.”

seguido de:

`APIs · PostgreSQL · Automation`

frente a una nube de logos o una lista de herramientas sin contexto.

## 7. Ideas

`Ideas` contiene pensamiento y aprendizaje:

- notas técnicas;
- decisiones de arquitectura;
- aprendizajes de proyectos;
- experimentos explicados;
- visión sobre cómo construir productos con datos, IA y software.

Debe optimizarse para SEO de long tail y lectura, no para cantidad de publicaciones.

## 8. SEO

La estrategia SEO se apoya en problemas y proyectos concretos, no en posicionar principalmente “consultor IA” o “freelance data”.

Clusters potenciales:

- análisis y datos de vivienda;
- baloncesto FEB y análisis de vídeo;
- computer vision aplicada a deporte;
- automatización de citas y WhatsApp;
- tracking de vehículos y reporting;
- infraestructura autoalojada y observabilidad;
- Home Assistant, Zigbee, MQTT y automatización doméstica;
- n8n y automatización de procesos;
- optimización de materia prima y decision systems;
- workflows de desarrollo asistido por agentes.

## 9. Qué no publicar todavía

- repos que no tengan una historia comprensible;
- clones sin diferenciación;
- experimentos demasiado tempranos;
- detalles operativos sensibles;
- listados exhaustivos de herramientas;
- cualquier pieza que haga parecer la web un mirror de GitHub.

La web selecciona y narra. GitHub almacena.
