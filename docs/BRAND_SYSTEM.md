# AnderData — Brand System V3

> Estado: contrato activo de identidad visual y marca.
> Complementa `POSITIONING.md`, `STYLE_GUIDE.md` y sustituye la dirección estética general de `REDESIGN_V2.md` cuando haya conflicto.

## 1. Idea de marca

AnderData no es una consultora ni un portfolio-CV. Es un **personal technology lab**: una marca bajo la que se construyen productos, sistemas, automatizaciones, experimentos y notas alrededor de software, datos e IA.

La web debe comunicar tres cosas en este orden:

1. **Identidad** — esto tiene una voz y un lenguaje visual reconocible.
2. **Capacidad** — se demuestra con cosas construidas, no con claims.
3. **Curiosidad** — el visitante debe querer seguir explorando.

La reacción objetivo es:

> “Quiero ver qué más está construyendo.”

## 2. Dirección visual: Hybrid Lab

La identidad combina dos mundos:

- **Editorial claro** para lectura, estructura, proyectos y SEO.
- **Tech lab oscuro** para Hero, piezas destacadas y momentos de marca.

No se busca un dark theme permanente. El contraste claro/oscuro forma parte del ritmo visual.

### Base visual

- `paper`: fondo cálido, no blanco puro.
- `ink`: casi negro, no negro absoluto.
- `signal`: coral/naranja eléctrico como único acento de marca.
- grises cálidos para metadata y divisores.

Tokens orientativos:

```css
--brand-paper: #f5f3ee;
--brand-ink: #11110f;
--brand-signal: #ff5a36;
--brand-muted: #96938a;
```

Los valores finales pueden ajustarse por contraste, pero no se añadirá una segunda paleta protagonista.

## 3. Firma visual propia

La diferenciación no debe depender de efectos complejos. AnderData tendrá un sistema gráfico repetible.

### 3.1 Technical stamp

Formato recurrente:

```text
AD / 01
PROJECT

AD / 02
SYSTEM

AD / 03
AUTOMATION

AD / 04
EXPERIMENT
```

Se usa en:

- proyectos destacados;
- cabeceras de familias;
- automatizaciones;
- metadata de piezas del Lab.

Reglas:

- monospace;
- tamaño pequeño;
- alto contraste;
- nunca como decoración repetitiva en cada párrafo.

### 3.2 Estados

Estados cortos y consistentes:

- `BUILDING`
- `TESTING`
- `RUNNING`
- `LIVE`
- `EXPERIMENT`
- `ARCHIVED`

El estado acompaña al contenido; no debe convertir la web en un dashboard.

### 3.3 Numeración

Las piezas pueden usar numeración editorial `01 / 02 / 03` para crear ritmo y facilitar reconocimiento.

## 4. Logo y uso de marca

El repo ya contiene un SVG monocromo con una **A geométrica central** integrada en una forma exterior más orgánica. Ese contraste representa bien la marca: estructura + experimentación.

Se definen tres niveles de uso:

### Mark

Versión simple para espacios pequeños.

- header;
- favicon;
- avatar;
- controles compactos.

Mientras no exista una versión simplificada específica, se mantiene `AF` como mark pequeño para no perder legibilidad.

### Wordmark

```text
AF / ANDERDATA
```

o combinación equivalente con el símbolo cuando se prepare una versión ligera.

### Brand stamp

El SVG completo se usa a gran escala y baja opacidad como recurso editorial:

- Hero;
- transiciones de sección;
- fondos de piezas destacadas.

Reglas duras:

- no usar el SVG complejo a tamaños pequeños donde pierda lectura;
- no recolorearlo con múltiples tonos;
- no repetirlo en todas las secciones;
- no sustituir jerarquía por tamaño de logo.

## 5. Tipografía

La tipografía es el recurso principal de composición.

- Sans geométrica/neutral para lectura y titulares.
- Monospace solo para metadata, estados y technical stamps.
- Máximo dos familias.
- H1 muy protagonista.
- `text-wrap: balance` cuando mejore composición.
- Nada de titulares forzados mediante `<br>` para que funcionen en desktop.

## 6. Composición

### Regla principal

**Menos bloques, más contraste y más escala.**

Preferir:

- líneas y divisores;
- grandes áreas de respiración;
- listas editoriales;
- bloques full-bleed oscuros puntuales;
- asimetría moderada;
- información técnica pequeña junto a tipografía grande.

Evitar:

- grids de cards idénticas;
- sombras como separación principal;
- radii grandes por defecto;
- chips para todo;
- fondos degradados multicolor;
- estética SaaS genérica.

## 7. Hero V3

El Hero es la principal pieza de reconocimiento de AnderData.

Dirección:

```text
AD / PERSONAL TECHNOLOGY LAB                 ● BUILDING

I BUILD THINGS
WITH SOFTWARE,
DATA & AI.

Curiosity → problem → something that works.

Explore projects →
```

La web puede mantener castellano en cuerpo y navegación; el Hero admite una frase corta en inglés si aporta marca y se entiende de inmediato.

### Reglas duras

- fondo `ink`;
- máximo un CTA principal y un enlace secundario;
- logo/stamp completo como elemento de fondo sutil;
- una única palabra o fragmento en `signal`;
- sin card lateral;
- sin enumeración de tecnologías;
- debe funcionar desde 320 px.

## 8. Movimiento

La marca puede tener microinteracciones propias:

- flechas que avanzan 3–5 px;
- línea `signal` que aparece al hover;
- estados con pulso muy sutil solo cuando tenga sentido;
- aparición del stamp por opacidad, no por desplazamientos largos.

Siempre respetar `prefers-reduced-motion`.

## 9. Imágenes y artefactos

Prioridad:

1. screenshots reales;
2. diagramas reales;
3. resultados reales;
4. visualizaciones de datos;
5. clips o frames de proyectos.

Evitar mockups genéricos y renders decorativos que no demuestren nada.

## 10. Regla de unicidad

Antes de aceptar una decisión visual, preguntar:

> ¿Podría esta sección pertenecer sin cambios a una plantilla de SaaS, consultora o portfolio genérico?

Si la respuesta es sí, falta identidad.

La solución preferida no es añadir decoración. Debe buscarse primero en:

- escala;
- contraste;
- logo/stamp;
- technical metadata;
- copy más concreto;
- composición menos convencional.

## 11. Regla de limpieza

La personalidad nunca justifica ruido.

Orden de decisión:

1. eliminar;
2. ordenar;
3. enfatizar;
4. diferenciar;
5. animar, solo si sigue siendo necesario.
