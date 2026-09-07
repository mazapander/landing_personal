# AnderData — Style Guide

> Estado: **contrato visual activo** para el rediseño V2.
>
> Este documento define **reglas duras** y **reglas blandas** de estilo. Las reglas duras deben cumplirse salvo decisión explícita y documentada. Las reglas blandas orientan el diseño y pueden romperse cuando exista una razón clara.

---

## 1. Intención visual

AnderData debe sentirse como una mezcla de:

- portfolio editorial;
- engineering personal site;
- product lab;
- espacio vivo de proyectos e ideas.

Debe transmitir:

- criterio;
- curiosidad;
- capacidad técnica;
- claridad;
- personalidad.

No debe transmitir:

- plantilla SaaS;
- consultora genérica;
- dashboard corporativo;
- portfolio recargado;
- estética “AI generated”.

---

# 2. Reglas duras

## 2.1 Navegación

1. El header tendrá como máximo **tres categorías internas principales**.
2. La arquitectura conceptual será la misma en desktop y móvil.
3. La navegación principal no cambiará de significado según la ruta.
4. La marca siempre enlazará a `/`.
5. GitHub, LinkedIn y contacto no competirán visualmente con las tres categorías principales.
6. No se añadirá una nueva pestaña principal sin retirar o reagrupar otra.

---

## 2.2 Hero

1. El Hero deberá ocupar el protagonismo visual del primer viewport.
2. El H1 tendrá como máximo **tres ideas semánticas**.
3. El Hero no tendrá más de **dos CTAs**.
4. No se utilizará una card lateral de “resumen profesional” para rellenar espacio.
5. No se enumerarán capacidades en el primer viewport.
6. No se utilizarán saltos `<br>` manuales como requisito para que el título se vea bien.
7. El Hero deberá funcionar correctamente entre 320 px y pantallas grandes sin depender de un layout diferente por dispositivo.

---

## 2.3 Tipografía

1. La tipografía será uno de los principales recursos visuales.
2. H1 y H2 utilizarán escalas fluidas con `clamp()`.
3. Los headings usarán `text-wrap: balance` o equivalente cuando mejore la composición.
4. El cuerpo de texto mantendrá una longitud legible; no se crearán párrafos de ancho completo en desktop.
5. No se usarán más de **dos familias tipográficas** en toda la web.
6. La jerarquía no dependerá únicamente del color: tamaño, peso, espaciado y posición deben expresar importancia.

### Escala orientativa

No es una API rígida, pero cualquier nueva escala debe respetar proporciones similares:

```css
--text-xs: clamp(.72rem, .7rem + .1vw, .8rem);
--text-sm: clamp(.86rem, .82rem + .15vw, .95rem);
--text-body: clamp(1rem, .96rem + .2vw, 1.1rem);
--text-lead: clamp(1.1rem, 1rem + .5vw, 1.4rem);
--text-h3: clamp(1.3rem, 1.15rem + .7vw, 1.75rem);
--text-h2: clamp(2rem, 1.5rem + 2.4vw, 4rem);
--text-h1: clamp(3rem, 2rem + 5vw, 7.5rem);
```

---

## 2.4 Contenedores y spacing

1. El layout principal utilizará un contenedor fluido, no `90vw` como única regla global.
2. El contenedor debe garantizar margen lateral mínimo en móvil.
3. La separación entre bloques debe responder a una escala consistente.
4. No se añadirán márgenes arbitrarios para corregir un único breakpoint.
5. Los elementos alineados visualmente deberán compartir la misma línea de contenedor salvo motivo explícito.

### Patrón recomendado

```css
.container {
  width: min(100% - 2rem, 1180px);
  margin-inline: auto;
}
```

En pantallas grandes puede existir una variante editorial más estrecha para contenido de lectura.

---

## 2.5 Cards

1. **No todo puede ser una card.**
2. Una card solo se usará si representa una entidad con identidad propia:
   - proyecto;
   - artículo;
   - experimento;
   - elemento interactivo independiente.
3. No se usarán cards para:
   - una frase;
   - una métrica decorativa;
   - una capacidad abstracta;
   - un subtítulo;
   - información que puede resolverse con jerarquía tipográfica.
4. No habrá más de dos tratamientos de card principales en una misma página.
5. Evitar combinar simultáneamente border + shadow + gradient + radius grande salvo que la card sea deliberadamente protagonista.

---

## 2.6 Color

1. Se utilizará **un único color de acento principal**.
2. El color de acento debe ser reconocible y consistente.
3. Estados semánticos (`success`, `warning`, `building`, etc.) pueden utilizar colores propios, pero no deben competir con el acento de marca.
4. El fondo y las superficies deben tener suficiente contraste sin depender de sombras.
5. Todos los textos e interacciones deben cumplir contraste accesible.
6. No utilizar gradientes multicolor como solución estética genérica.

### Dirección

La base puede seguir siendo neutra y clara, pero el azul genérico SaaS actual debe revisarse.

El nuevo acento debería sentirse más propio y menos “default Tailwind”.

La selección definitiva del color se hará visualmente sobre el Hero y los estados interactivos, no de forma aislada en una paleta.

---

## 2.7 Responsive

1. Diseñar mobile-first.
2. No aceptar scroll horizontal accidental.
3. No aceptar títulos cortados, comprimidos o con saltos visualmente pobres.
4. Un breakpoint solo se añade cuando responde a un cambio real de composición.
5. Evitar breakpoints para “mover 8 px” o reparar un elemento aislado.
6. El layout debe validarse al menos en:
   - 320 px;
   - 375 px;
   - 430 px;
   - 768 px;
   - 1024 px;
   - 1280 px;
   - 1440 px.
7. El header debe colapsar antes de que la navegación empiece a comprimirse.
8. Los grids deberán degradar por contenido, no únicamente por tamaños arbitrarios de dispositivo.

---

## 2.8 Movimiento

1. Toda animación debe tener una función clara:
   - feedback;
   - orientación;
   - jerarquía;
   - carácter de marca.
2. No usar animaciones de entrada en todos los bloques.
3. No bloquear contenido esperando una animación.
4. Respetar `prefers-reduced-motion`.
5. Evitar parallax agresivo, partículas y animaciones de fondo que consuman atención constante.
6. La mayoría de microinteracciones deben estar entre aproximadamente `120ms` y `300ms`.

---

## 2.9 Accesibilidad

1. Focus visible siempre.
2. Elementos interactivos con área táctil suficiente.
3. Navegación completa por teclado.
4. Semántica HTML antes que `div` interactivos.
5. No comunicar estados únicamente mediante color.
6. Imágenes decorativas con `alt=""`.
7. Imágenes informativas con alternativa útil.
8. `prefers-reduced-motion` obligatorio si se añaden animaciones relevantes.

---

## 2.10 Copy visual

El texto también forma parte del diseño.

### Reglas duras

1. Los títulos deben ser cortos.
2. No escribir una frase de consultoría cuando un ejemplo concreto pueda demostrar lo mismo.
3. Evitar acumulaciones de términos como:
   - negocio;
   - IA;
   - producto;
   - procesos;
   - arquitectura;
   - escalabilidad;
   en una misma frase.
4. No utilizar claims vacíos como contenido principal de una sección.
5. En el Hero se habla en primera persona.
6. Los proyectos se describen por el problema, experimento o cosa construida, no por una lista de buzzwords.

### Ejemplo

Preferido:

> Estoy construyendo una herramienta para entender si una vivienda está cara respecto a su zona.

Evitar:

> Solución de inteligencia de datos que transforma información inmobiliaria en insights accionables para mejorar la toma de decisiones.

---

# 3. Reglas blandas

Estas reglas pueden romperse si hacerlo mejora claramente el resultado.

## 3.1 Uso de espacio

- Favorecer mucho aire alrededor del contenido importante.
- Preferir una composición grande y sencilla frente a muchas piezas pequeñas.
- Permitir que algunos bloques respiren incluso si eso aumenta la longitud total de la página.
- No llenar espacio vacío por miedo a que la página parezca incompleta.

---

## 3.2 Composición

- Preferir layouts asimétricos moderados cuando aporten carácter.
- Mezclar secciones de ancho completo con contenido editorial más estrecho.
- Usar líneas, divisores y cambios de escala antes que contenedores cerrados.
- El ritmo de la página debería parecer editorial, no una sucesión de widgets.

---

## 3.3 Bordes y radios

- Usar radios más contenidos que los actuales cuando una superficie no necesite parecer una card SaaS.
- Reservar `radius-full` para pills, tags o acciones concretas.
- Permitir elementos sin borde ni fondo cuando la jerarquía tipográfica sea suficiente.

---

## 3.4 Iconografía

- Usar iconos solo cuando ayuden a escanear o entender.
- Evitar una librería de iconos como decoración masiva.
- Flechas `→` y `↗` pueden formar parte del lenguaje visual de navegación.
- Las marcas externas pueden representarse de forma muy contenida.

---

## 3.5 Código / lenguaje técnico

Se pueden introducir pequeños recursos visuales propios de engineering:

- estados tipo `building`, `testing`, `live`;
- monospace puntual;
- numeración `01 / 02 / 03`;
- metadatos mínimos;
- timestamps o última actualización.

Pero deben sentirse editoriales, no como una terminal falsa.

---

## 3.6 Imágenes

- No es obligatorio que todas las secciones tengan imagen.
- Cuando un proyecto tenga una captura o artefacto visual fuerte, puede utilizarse como protagonista.
- Evitar mockups genéricos de dispositivos si no aportan contexto.
- Preferir screenshots reales, diagramas o resultados del proyecto.

---

## 3.7 Tema oscuro

No es prioridad de V2.

Si se implementa más adelante:

- debe diseñarse como tema propio;
- no debe ser simplemente invertir los tokens;
- no debe retrasar el rediseño principal.

---

# 4. Lenguaje visual por sección

## 4.1 Home

Debe ser la página con mayor personalidad visual.

Prioridad:

1. Hero.
2. Currently building.
3. Puertas de exploración.
4. Contenido reciente.

No necesita contener toda la información del sitio.

## 4.2 Proyectos

Debe priorizar artefactos y resultados.

Una lista de proyectos puede ser más editorial que una grid de cards.

Cada proyecto debería responder rápido:

- qué es;
- por qué existe;
- en qué estado está;
- qué parte resulta interesante;
- dónde verlo.

## 4.3 Lab

Puede tener más libertad visual.

Es el lugar adecuado para:

- prototipos;
- experimentos;
- cosas incompletas;
- pruebas de concepto.

La estética puede ser algo más técnica, pero debe seguir perteneciendo al mismo sistema.

## 4.4 Ideas / Writing

Debe optimizarse para lectura.

- ancho editorial;
- alto contraste;
- buena tipografía;
- metadatos discretos;
- mínimo ruido lateral.

## 4.5 Sobre mí

Debe sentirse personal y directo.

Evitar formato CV interminable.

La experiencia profesional puede existir, pero narrada desde decisiones, proyectos y evolución.

---

# 5. Componentes permitidos por defecto

Antes de crear nuevos componentes, intentar resolver la interfaz con este conjunto mínimo:

- `Container`
- `Section`
- `Heading`
- `TextLink`
- `Button`
- `ProjectRow` / `ProjectCard`
- `Status`
- `ArticlePreview`
- `Header`
- `Footer`

Crear un nuevo componente visual solo si:

1. se reutiliza;
2. representa una entidad clara;
3. encapsula comportamiento;
4. reduce complejidad real.

No crear componentes únicamente para envolver dos elementos con padding.

---

# 6. Señales de alarma durante una revisión

Si una PR visual introduce varias de estas señales, debe revisarse antes de mergear:

- muchas nuevas cards;
- más navegación principal;
- frases más largas;
- nuevas sombras;
- nuevos gradientes;
- más de un nuevo breakpoint;
- estilos específicos para un solo dispositivo;
- una animación sin función;
- un componente para una única línea;
- nuevas métricas decorativas;
- más CTAs en la home;
- copy lleno de palabras abstractas;
- duplicación de contenido entre home y páginas interiores.

---

# 7. Checklist visual para PRs

Antes de aceptar una PR que modifique UI:

- [ ] ¿La página se entiende más rápido que antes?
- [ ] ¿Se ha reducido o mantenido la complejidad visual?
- [ ] ¿La modificación respeta la arquitectura de tres categorías?
- [ ] ¿Hay menos dependencia de cards?
- [ ] ¿La tipografía sigue siendo protagonista?
- [ ] ¿Los textos suenan personales y concretos?
- [ ] ¿Funciona a 320, 375, 430, 768, 1024, 1280 y 1440 px?
- [ ] ¿Se mantiene el focus visible?
- [ ] ¿Se respeta `prefers-reduced-motion` si aplica?
- [ ] ¿Se puede eliminar algún elemento sin perder información?
- [ ] ¿El cambio parece AnderData o podría pertenecer a cualquier SaaS?
- [ ] ¿`npm run verify` sigue pasando?

---

# 8. Criterio final

Cuando exista duda entre dos soluciones, preferir la que tenga:

1. menos elementos;
2. mejor tipografía;
3. más contenido real;
4. menos lenguaje corporativo;
5. mejor responsive;
6. más personalidad sin añadir ruido.

La regla más importante del sistema es:

> **No añadir diseño para compensar una falta de jerarquía.**

Primero simplificar. Después diseñar.
