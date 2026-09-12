# AnderData — Building how I build: evolution contract

> Estado: dirección activa de contenido.
> La página actual `/como-trabajo/` es **la capa 1**, no la versión final.

## 1. Qué debe evitar

`Building how I build` no debe convertirse en otra página de metodología con frases genéricas sobre procesos, agile, clean code o IA.

El diagrama actual:

```text
IDEA → CONTRACT → PLAN → BUILD → REVIEW → SHIP
```

sirve para explicar el mapa mental, pero por sí solo no demuestra cómo se trabaja.

## 2. Objetivo de madurez

La sección será realmente diferencial cuando pueda enseñar **evidencia del proceso**.

Debe evolucionar desde:

> “así digo que trabajo”

hacia:

> “aquí puedes ver cómo tomé una decisión, cómo la ejecuté y qué cambió después de revisarla”.

## 3. Tipos de evidencia que se deben incorporar

### Casos reales

Pequeños casos vinculados a proyectos públicos o documentables:

- rediseño de AnderData por contratos y fases;
- evolución de IA Compra Pisos;
- diseño del pipeline Basketball Intelligence;
- decisiones de arquitectura en AnderData Systems;
- separación dominio/solver en Industrial Cutting Optimizer.

No hace falta publicar información privada de empleadores o clientes.

### Contratos y planes

Mostrar fragmentos saneados de artefactos reales:

- problema inicial;
- alcance;
- decisiones bloqueadas antes de programar;
- criterios de aceptación;
- qué quedó explícitamente fuera de scope.

### Trabajo con agentes

Enseñar ejemplos donde se vea la separación entre agente y criterio humano:

```text
context → contract → agent task → code → review → correction → merge
```

Interesa especialmente documentar:

- qué información recibe el agente;
- qué decisiones no se delegan;
- errores o sobreingeniería detectados en review;
- cuándo se descarta una propuesta;
- cómo se mantiene trazabilidad.

### Antes / después

Un caso debe poder mostrar cambios concretos:

- arquitectura antes y después;
- copy antes y después;
- scope inicial vs scope final;
- una solución sobreingenierizada frente a una versión reducida;
- una decisión que cambió después de validar el producto.

### Fallos y correcciones

No presentar únicamente el camino correcto.

Los ejemplos más útiles pueden ser:

- una hipótesis equivocada;
- un diseño que no funcionó;
- deuda detectada por tests;
- un contrato que evitó tocar código innecesario;
- una revisión que obligó a simplificar.

## 4. Formato recomendado para cada ejemplo

```text
AD / BUILD CASE / 001

CONTEXT
Qué queríamos resolver.

DECISION
Qué había que decidir antes de tocar código.

CONTRACT
Alcance + criterios + fuera de scope.

BUILD
Qué ejecutó el agente / developer.

REVIEW
Qué se corrigió o rechazó.

RESULT
Qué quedó finalmente y qué aprendimos.
```

Cada pieza debe poder leerse en pocos minutos y enlazar al proyecto relacionado cuando sea público.

## 5. Regla de credibilidad

No publicar ejemplos fabricados para explicar la metodología.

Si se necesita un ejemplo didáctico, debe etiquetarse como ejemplo. Los casos principales deben derivarse de trabajo real y verificable dentro de los proyectos de AnderData.

## 6. Regla de privacidad

Antes de publicar un artefacto real:

- eliminar secretos, tokens, credenciales e infraestructura explotable;
- anonimizar personas, clientes o empresas cuando corresponda;
- no usar trabajo propiedad de un empleador como caso público sin autorización;
- preferir proyectos personales y open source como evidencia principal.

## 7. Criterio de madurez

`Building how I build` no se considerará una sección madura hasta que incluya como mínimo:

- 3 casos reales;
- 1 ejemplo de contrato;
- 1 ejemplo de review/corrección;
- 1 caso donde una decisión inicial haya cambiado;
- enlaces cruzados a proyectos reales.

Hasta entonces, la página actual debe entenderse como **framework overview**.


## Material recopilado en Fase 5

El [registro de decisiones de Project stories](./PROJECT_STORY_DECISIONS.md) reúne seis fichas con problema, decisión documentada, consecuencia y evidencia pendiente. Sirve como punto de partida para elegir casos; no acredita todavía benchmarks, contratos originales ni sesiones de revisión con agentes.
