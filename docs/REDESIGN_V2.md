# AnderData — Rediseño V2

> Estado: **dirección de producto activa** para la siguiente iteración de `anderdata.es`.
>
> Este documento define **qué queremos cambiar y por qué**. Las reglas visuales concretas viven en [`STYLE_GUIDE.md`](./STYLE_GUIDE.md).

---

## 1. Problema actual

La web funciona técnicamente y contiene bastante contenido útil, pero la suma de iteraciones ha generado una sensación que no representa bien el producto personal que queremos construir.

Los principales problemas son:

1. **La home parece demasiado una landing de consultoría.**
   - El mensaje principal explica demasiado.
   - Predominan claims abstractos sobre negocio, IA, producto y operación.
   - El resultado puede parecer una web corporativa generada rápidamente en vez de una web personal con carácter.

2. **Hay demasiados conceptos compitiendo al mismo nivel.**
   - Proyectos.
   - Servicios.
   - Cómo trabajo.
   - Lab.
   - Notas.
   - Sobre mí.
   - Contacto.

3. **La navegación contextual actual cambia el mapa mental del usuario según la página.**
   - Es útil como experimento, pero no debe ser el modelo definitivo.
   - El usuario debe entender la estructura de la web sin tener que reinterpretar el header en cada sección.

4. **La home intenta resumir toda la web.**
   - Hero.
   - Resumen profesional.
   - Métricas.
   - Capacidades.
   - Proyectos.
   - Sobre mí.
   - CTA comercial.

5. **La identidad visual está demasiado basada en cards y superficies de estilo SaaS.**
   - No es un problema de calidad del CSS.
   - Es un problema de lenguaje visual y jerarquía.

6. **Algunos encabezados y composiciones pierden equilibrio en tamaños intermedios.**
   - El responsive no debe solucionarse añadiendo breakpoints aislados indefinidamente.
   - Hay que rehacer el sistema de composición desde criterios fluidos.

---

## 2. Objetivo del rediseño

La web debe evolucionar desde:

> “landing profesional que explica mis servicios y capacidades”

hacia:

> **“portfolio personal + laboratorio de cosas que construyo y pienso”.**

La sensación deseada al entrar no es únicamente “esta persona sabe de Data e IA”.

La reacción que buscamos es:

> **“Quiero seguir mirando qué está construyendo.”**

La web tiene que ser profesional, pero personal. Técnica, pero no fría. Limpia, pero no genérica.

---

## 3. Principios de producto

### 3.1 Mostrar antes que explicar

Priorizar:

- proyectos;
- experimentos;
- artefactos;
- notas;
- cosas actualmente en construcción.

Reducir:

- claims genéricos;
- listas de capacidades;
- frases de consultoría;
- explicaciones largas sobre el valor que aporto.

Un proyecto real debe demostrar una capacidad mejor que una card diciendo que tengo esa capacidad.

### 3.2 La home no es el sitemap

La home tiene que actuar como **entrada editorial** a la web, no como resumen exhaustivo.

Debe tener pocas decisiones claras y permitir curiosidad.

### 3.3 Una identidad estable

La navegación principal no debe mutar completamente en función del contexto.

Debe existir una estructura estable de primer nivel y navegaciones secundarias dentro de cada universo cuando sean necesarias.

### 3.4 Personal antes que corporativo

La voz debe sonar a una persona que construye cosas, no a una consultora que vende una transformación digital.

### 3.5 Menos componentes, más jerarquía

No añadir un nuevo componente cuando la solución pueda ser:

- mejor tipografía;
- más aire;
- mejor orden;
- una línea;
- un cambio de escala;
- eliminar contenido.

---

## 4. Arquitectura de información propuesta

La navegación principal se reduce a **tres universos**.

### 4.1 Proyectos

Representa **lo que construyo**.

Incluye:

- proyectos públicos;
- proyectos destacados;
- productos propios;
- herramientas;
- experimentos del Lab;
- arquitectura / cómo trabajo cuando esté ligada a construcción.

Subnavegación posible:

- `Proyectos`
- `Lab`
- `Cómo trabajo`

El Lab no debe competir conceptualmente con Proyectos en el primer nivel. Es una categoría de trabajo en exploración.

### 4.2 Ideas

Representa **lo que pienso y aprendo**.

Incluye:

- blog;
- notas;
- aprendizajes de proyectos;
- Data;
- IA;
- producto;
- arquitectura;
- engineering;
- decisiones técnicas.

Subnavegación posible:

- `Blog`
- `Notas`

La ruta actual de notas puede ser la base inicial de este universo.

### 4.3 Sobre mí

Representa **quién soy**.

Incluye:

- perfil;
- trayectoria;
- forma de trabajar;
- contacto;
- enlaces externos relevantes.

Subnavegación posible:

- `Perfil`
- `Trayectoria`
- `Contacto`

### 4.4 Servicios

`Servicios` deja de ser una categoría principal.

No es necesario borrar de inmediato el contenido existente, pero no debe liderar la navegación.

La intención comercial se puede expresar de forma contextual:

- al final de un proyecto;
- en Sobre mí;
- en Contacto;
- en algún CTA discreto.

Ejemplo de enfoque:

> ¿Quieres construir algo parecido?

En vez de:

> Descubre mis servicios de Data, IA y producto digital.

---

## 5. Header V2

El header debe ser estable, corto y reconocible.

Estructura objetivo:

```text
AnderData / AF          Proyectos   Ideas   Sobre mí          ↗
```

### Requisitos

- Máximo tres destinos internos principales visibles en desktop.
- La marca siempre vuelve a `/`.
- Contacto puede resolverse dentro de `Sobre mí` o mediante una acción visual discreta.
- GitHub / LinkedIn no deben competir con la navegación principal.
- La versión móvil debe mostrar exactamente la misma jerarquía conceptual.
- No crear un header diferente para cada sección.

---

## 6. Home V2

La home se simplifica radicalmente.

La estructura objetivo es de **cuatro o cinco bloques**, no de siete u ocho.

### Bloque 1 — Hero

Es la pieza principal del rediseño.

Debe presentar a Ander con una frase corta, personal y memorable.

La prioridad es identidad, no exhaustividad.

Dirección de copy:

```text
Hola, soy Ander.

Construyo productos
con datos, IA
y bastante curiosidad.
```

O una variante más técnica:

```text
Construyo cosas con
Data, IA y Software.
```

Debajo puede existir una línea pequeña de contexto:

```text
Product · Data · AI · Engineering
```

Y como máximo dos acciones:

- explorar proyectos;
- GitHub / conocer más.

#### Lo que NO debe hacer el Hero

- Enumerar todas las capacidades.
- Usar tres o cuatro frases subordinadas.
- Hablar de “transformar problemas complejos en soluciones escalables”.
- Intentar vender servicios en el primer viewport.
- Incluir una card lateral solo para rellenar espacio.

### Bloque 2 — Currently building

Este bloque debe convertirse en una de las señales de identidad de la web.

Objetivo: mostrar que la web y los proyectos están vivos.

Ejemplo:

```text
CURRENTLY BUILDING

01  IA Compra Pisos       ● Building
02  Motion Lab            ◐ Testing
03  StatsFEB              ● Building
```

Cada elemento puede incluir:

- nombre;
- descripción de una línea;
- estado;
- enlace;
- opcionalmente fecha de última actualización.

No convertirlo en un dashboard de gestión.

### Bloque 3 — Explorar

Tres puertas grandes:

- `Projects`
- `Lab`
- `Writing / Ideas`

Deben sentirse como áreas de exploración, no como cards comerciales.

### Bloque 4 — Contenido reciente

Mostrar **una sola pieza reciente** o una selección mínima:

- última nota;
- último experimento;
- proyecto actualizado recientemente.

No duplicar toda la página de proyectos en la home.

### Bloque 5 — Footer / identidad

Footer sencillo con:

- nombre;
- GitHub;
- LinkedIn;
- contacto;
- copyright si procede.

---

## 7. Qué se elimina o reduce de la home actual

### Eliminar como bloques independientes

- bloque de métricas tipo “X casos / X capacidades / ∞ visión”.
- listado completo de capacidades.
- segundo resumen completo de Sobre mí si el Hero ya presenta a Ander.
- CTA comercial grande de cierre si no aporta contexto.

### Reducir

- número de proyectos destacados;
- textos explicativos;
- cards;
- CTAs simultáneos.

### Reutilizar

- datos de proyectos existentes;
- contenido de Sobre mí;
- contenido de Lab;
- notas;
- tracking Umami;
- SEO técnico;
- estructura Astro/React existente.

El rediseño **no requiere reescribir la aplicación desde cero**.

---

## 8. Voz y copy

Uno de los problemas actuales no es únicamente visual: parte del texto suena genérico y excesivamente corporativo.

### Dirección de voz

Queremos una voz:

- personal;
- breve;
- técnica cuando corresponda;
- segura sin autopromoción excesiva;
- curiosa;
- concreta.

### Preferir

> Estoy construyendo una herramienta para entender si una vivienda está cara respecto a su zona.

frente a:

> Desarrollo soluciones basadas en datos para facilitar decisiones inmobiliarias más informadas.

Preferir:

> Me gusta llevar una idea hasta que funciona de verdad.

frente a:

> Conecto estrategia, tecnología y ejecución para generar soluciones medibles y mantenibles.

### Palabras y fórmulas a vigilar

Evitar abuso de:

- soluciones;
- transformar;
- potenciar;
- impulsar;
- innovador;
- escalable;
- end-to-end;
- generar valor;
- problemas complejos;
- necesidades de negocio;
- llevar al siguiente nivel.

No están prohibidas individualmente, pero juntas generan rápidamente una voz de consultoría genérica.

---

## 9. Responsive V2

El objetivo no es añadir parches a los breakpoints actuales.

### Principios

- Diseñar mobile-first.
- La tipografía debe ser fluida mediante `clamp()`.
- Evitar widths rígidos en Hero y Header.
- Los títulos no deben depender de saltos `<br>` forzados para verse bien.
- Usar `text-wrap: balance` donde tenga sentido.
- El Hero debe mantenerse en una sola columna hasta que exista espacio real para una composición adicional.
- El header debe colapsar antes de que los elementos empiecen a competir por espacio.

### Anchuras mínimas a validar

Antes de cerrar cualquier cambio visual comprobar como mínimo:

- 320 px;
- 375 px;
- 430 px;
- 768 px;
- 1024 px;
- 1280 px;
- 1440 px;
- pantalla ultrawide representativa.

No se considera responsive si únicamente “no aparece scroll horizontal”. La composición tiene que seguir estando equilibrada.

---

## 10. Fases de implementación

### Fase A — Shell

1. Crear navegación estable de tres categorías.
2. Simplificar header desktop.
3. Simplificar menú móvil.
4. Corregir sistema de contenedores.
5. Definir escalas tipográficas fluidas.

### Fase B — Hero

1. Crear Hero V2.
2. Eliminar la card profesional lateral actual.
3. Reducir copy.
4. Limitar CTAs.
5. Validar responsive completo.

### Fase C — Home

1. Añadir `Currently building`.
2. Crear tres puertas de exploración.
3. Añadir una pieza reciente.
4. Simplificar footer.
5. Eliminar bloques redundantes.

### Fase D — Reorganización

1. Integrar Lab dentro del universo Proyectos.
2. Evolucionar Notas hacia Ideas / Writing.
3. Reubicar Cómo trabajo.
4. Reducir visibilidad de Servicios.
5. Mantener redirects si cambian rutas públicas.

### Fase E — Polish

1. Microinteracciones.
2. Estados hover/focus.
3. Accesibilidad.
4. Performance.
5. Revisión visual multiresolución.
6. Revisión de copy completo.

---

## 11. Qué NO hacer durante el rediseño

- No introducir una nueva librería UI para solucionar el diseño.
- No convertir la web en un dashboard.
- No añadir partículas, WebGL o efectos 3D porque sí.
- No crear cards para cada fragmento de información.
- No añadir animaciones largas que retrasen el acceso al contenido.
- No copiar literalmente `midu.dev` ni ningún otro portfolio.
- No hacer un rediseño únicamente de colores.
- No aumentar la cantidad de contenido de la home.
- No mantener una sección solo porque ya esté implementada.

---

## 12. Criterios de aceptación

El rediseño V2 se considera bien encaminado cuando:

- [ ] El primer viewport se entiende en menos de cinco segundos.
- [ ] El Hero puede recordarse o resumirse en una frase.
- [ ] El header tiene únicamente tres categorías principales.
- [ ] El usuario puede distinguir claramente Proyectos, Ideas y Sobre mí.
- [ ] La home tiene como máximo cinco bloques funcionales principales.
- [ ] Hay menos cards que en la versión actual.
- [ ] Los proyectos reales tienen más peso que las declaraciones de capacidades.
- [ ] Existe una sección clara de “Currently building”.
- [ ] No hay claims genéricos de consultoría en el Hero.
- [ ] Los H1/H2 mantienen buena composición desde 320 px hasta desktop grande.
- [ ] No se han añadido breakpoints como parche sin justificar.
- [ ] La navegación móvil mantiene la misma arquitectura conceptual que desktop.
- [ ] La web sigue siendo rápida y accesible.
- [ ] `npm run verify` continúa pasando.

---

## 13. Decisión de referencia

`midu.dev` puede servir como referencia de **energía, claridad y capacidad de generar curiosidad**, no como referencia para copiar colores, estética gaming o estructura exacta.

La identidad objetivo de AnderData debe situarse más cerca de:

> **editorial + engineering + product lab**

que de:

> consultoría + SaaS dashboard + portfolio plantilla.

Ese contraste debe guiar las siguientes decisiones.
