# Ideas: de 3 piezas a 18, agrupadas por problemas reales

Propuesta editorial para octubre–diciembre de 2026. No es una automatización ni un compromiso de publicación sin evidencia. Ritmo: unas cinco notas nuevas por mes. Cada nota enlaza a su pilar y a otra nota del mismo grupo cuando esté publicada. El campo `projects` crea enlaces de vuelta automáticamente.

Las tres notas existentes permanecen publicadas. Las quince propuestas se redactarán a partir del artefacto indicado; no se publican páginas vacías ni artículos que simulen pruebas realizadas.

| Mes | Cluster / pilar | Pregunta específica | Evidencia antes de publicar |
| --- | --- | --- | --- |
| Publicada | Vivienda / IA Compra Pisos | Cómo comparar datos de vivienda sin mezclar contextos | Nota actual |
| Publicada | Connected Home | Por qué una orden no confirma el estado | Nota actual |
| Publicada | Optimización / Industrial Cutting Optimizer | Separar las reglas de corte del solver | Nota actual |
| Octubre | Vivienda | Cómo conservar fuente, territorio y periodo en un indicador | Registro anonimizado + esquema |
| Octubre | Basketball / CV | Qué comprueba una ingesta FEB antes de marcarse completada | Informe de cobertura de una ejecución |
| Octubre | Systems | Cómo separar un Compose por servicio sin perder los volúmenes | Diff revisado y procedimiento de migración |
| Octubre | Connected Home | Cómo modelar orden enviada, estado observado y señal antigua | Modelo de estados de un caso |
| Octubre | Automations | Cómo repetir una ingesta sin duplicar datos | Ejecución repetida + clave de identidad |
| Noviembre | Vivienda | Cómo representar series con distinta frecuencia temporal | Comparación reproducible y periodos visibles |
| Noviembre | Basketball / CV | Cómo conservar el vínculo entre partido, etiqueta y clip | Export de etiquetas y clip publicable |
| Noviembre | Systems | Qué mide un health check y qué deja fuera | Respuesta de un servicio y caso de fallo |
| Noviembre | Connected Home | Qué muestra el garaje cuando deja de llegar la señal del sensor | Prueba de desconexión registrada |
| Noviembre | Automations | Cómo evitar avisos duplicados al reintentar un recordatorio | Estado antes/después y prueba de reintento |
| Diciembre | Vivienda | Cómo explicar los límites de un indicador sin ocultar el resultado | Captura real y texto de ayuda |
| Diciembre | Basketball / CV | Cómo separar entrenamiento y evaluación por partido | Manifiesto del dataset sin cruces |
| Diciembre | Systems | Cómo versionar configuración sin publicar secretos | Plantilla saneada y verificación del historial |
| Diciembre | Connected Home | Qué automatización debe seguir funcionando sin el servidor central | Matriz de dependencias y prueba |
| Diciembre | Automations | Cómo convertir posiciones en un informe diario revisable | Informe anonimizado con periodo y zona horaria |

## Enlaces y criterio de calidad

- Vivienda → `/proyectos/ia-compra-pisos/`.
- Basketball / CV → `/proyectos/basketball-intelligence/` y subproyecto relevante.
- Systems → `/proyectos/anderdata-systems/`.
- Connected Home → `/proyectos/connected-home-lab/`.
- Automations → `/automations/`, flujo concreto y proyecto asociado en `projects`.
- Una pregunta por artículo. Incluir contexto, decisión, ejemplo, resultado observado o límite y enlace al proyecto.
- Publicar `publishedAt` al publicar, nunca para simular antigüedad. Los borradores no entran en sitemap ni listados.
- Medir visitas a los pilares y `project_to_idea`; revisar mensualmente qué preguntas atraen lectura y continuidad.
