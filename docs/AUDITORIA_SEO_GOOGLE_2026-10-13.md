# Auditoría SEO de Google — 13 de octubre de 2026

Dominio revisado: https://psicomarcelazamora.com. Base local: commit `3c6e7c2`, React + Vite + React Router DOM. Revisión del código, compilación nueva, HTML público de las 17 rutas, redirecciones, navegación en navegador y PageSpeed Insights.

## Resultado

**Sí se puede mejorar el SEO, sobre una base técnica que ya funciona.** Las 17 rutas oficiales responden HTTP 200, entregan contenido prerenderizado y tienen título, descripción y canonical propios. No encontré un bloqueo general de rastreo en las rutas oficiales. Esto acredita que están disponibles para rastreo; no demuestra que Google las haya indexado.

Las prioridades son corregir una variante de la portada que cambia a `noindex` después de cargar React, reparar los datos de migas de pan de Contacto, depurar el vocabulario de datos estructurados, hacer fiables las fechas del sitemap y mejorar carga móvil y contenido local. Recursos y Psicositas necesitan materiales reales para satisfacer la intención de quien las visita.

Esta revisión agrega únicamente este informe. No se modificaron código, contenido clínico, estilos, dependencias, secretos ni configuración del hosting; no se publicó ningún cambio.

## Alcance y criterios verificables

- Revisar las 17 rutas de `src/App.jsx`, sus metadatos y contenido HTML inicial.
- Contrastar títulos, descripciones y canonicals del dominio público con el build local.
- Comprobar robots, sitemap, HTTPS, variantes www, barras finales, archivos index y respuesta a una ruta inexistente.
- Revisar enlaces, encabezados, imágenes, identidad profesional y entidades JSON-LD.
- Identificar mejoras que reutilicen `content.js`, `seo.js`, `usePageMeta` y los componentes existentes, conservando el diseño.
- Separar defectos reproducidos, oportunidades editoriales y asuntos que requieren Search Console o información de la propietaria.

## Lo que ya está bien

| Área | Evidencia actual |
| --- | --- |
| Renderizado | El build prerenderiza las 17 páginas y una 404; el HTML inicial contiene texto, enlaces y metadatos. |
| Metadatos | Títulos y descripciones únicos; los del dominio público coinciden con el build en las 17 rutas. |
| Canonical | Una URL absoluta HTTPS por ruta oficial, coherente con el sitemap; los parámetros de seguimiento no se incorporan. |
| Rastreo | `robots.txt` público responde 200, permite rastreo y enlaza el sitemap correcto. |
| Sitemap | XML público con las 17 URLs oficiales; la página 404 está excluida. |
| Redirecciones | HTTP y www se consolidan en HTTPS sin www; las barras finales de páginas internas se eliminan. |
| Errores | Una ruta inexistente devuelve HTTP 404 real y `noindex, follow`. No hay fallback general que convierta todas las URLs inexistentes en HTTP 200. |
| Estructura | Un H1 en cada página. Las seis fichas de servicios son accesibles desde Inicio y Servicios y enlazan áreas relacionadas. |
| Enlaces | Revisión de render: 268 enlaces internos a rutas existentes y 65 enlaces con nueva pestaña y `noopener noreferrer`. Los recuentos incluyen enlaces repetidos entre páginas. |
| Identidad | Graph de Organization, Person y WebSite, dos sedes con dirección y coordenadas, perfiles sociales y seis fichas Service. |
| Imágenes y fuentes | Imagen social de 1200×628; favicon e iconos; retrato precargado en Inicio; fotos de sedes pequeñas con alt, dimensiones y lazy; fuentes con preconnect y `display=swap`. |
| Entrega | HTML público comprimido con Brotli en las rutas oficiales; assets con caché de un año e `immutable`. |
| Navegación | El head cambia al navegar de Inicio a Contacto. No observé errores de consola en Inicio antes de probar el alias defectuoso. |

La solución actual de prerender y hidratación es apropiada; esta auditoría no justifica migrar a Next.js ni añadir una biblioteca SEO. Google documenta estas estrategias en su [guía de JavaScript y SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

## Hallazgos técnicos y correcciones propuestas

### 1. La variante `/index` cambia de portada indexable a página no encontrada

**Confirmado en producción, antes y después de ejecutar JavaScript.**

| Paso | Resultado |
| --- | --- |
| Solicitud a `/index.html` | HTTP 301 hacia `/index`, en lugar de `/`. |
| HTML inicial de `/index` | HTTP 200; título y contenido de Inicio; canonical `/`; `index, follow`. |
| Página después de hidratar React | “Página no encontrada”; canonical `/index`; `noindex, follow`. |
| Consola | Error React #418 al no coincidir el HTML inicial y la ruta que reconoce el cliente. |

`src/App.jsx` reconoce `/`, pero no `/index`. El hosting expone ese alias del archivo raíz. La inconsistencia afecta a la variante `/index`; **no se observó este problema en `/` ni en las 17 rutas oficiales**. Tampoco consta que Google esté rastreando ese alias.

**Cambio mínimo propuesto:** redirigir permanentemente `/index` y `/index.html` a `/` desde `public/staticwebapp.config.json`. Conservar la 404 real. Verificar el resultado en Azure, porque la normalización implícita de archivos depende del hosting.

**Criterio de cierre:** ambos alias terminan en `/`, con el mismo H1, canonical y robots antes y después de React, sin error de hidratación. Google recomienda mantener la canonical del HTML y la del documento renderizado coherentes en su [guía de canonicalización](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

Otras variantes: `/sobre-mi/` y `/sobre-mi/index.html` redirigen correctamente a `/sobre-mi`; `/servicios/index.html` termina correctamente en `/servicios`. `/SERVICIOS` responde 404: el caso de canonical en mayúsculas reproducible en SSR local no es una duplicación pública confirmada. `/404.html` redirige a `/404`, que responde 200 con `noindex`; es secundario porque las URLs inexistentes sí devuelven 404.

### 2. Contacto pierde su BreadcrumbList

En `src/pages/Contacto.jsx:85`, `usePageMeta` recibe cuatro argumentos. El tercero contiene `canonicalPath`; el cuarto contiene `schemas`. La firma de `src/hooks/usePageMeta.js:45` recibe únicamente tres, por lo que ignora las migas de pan.

**Evidencia:** `render('/contacto').meta.schemas` devuelve `[]`; ni el HTML público ni el DOM después de navegar a Contacto contienen `page-schema`. El título, la descripción y la canonical de Contacto sí funcionan.

**Cambio mínimo propuesto:** unir `canonicalPath` y `schemas` en el tercer objeto. Ampliar `scripts/check-seo.mjs` para comprobar los breadcrumbs en las páginas que los declaran, además de los seis servicios.

**Criterio de cierre:** BreadcrumbList presente y correcto tanto en HTML inicial como al navegar a Contacto.

### 3. Las sedes incluyen un tipo de Schema.org no reconocido

`src/data/seo.js:38` publica `@type: ["MedicalBusiness", "Psychologist"]`. `MedicalBusiness` es un tipo válido de LocalBusiness; `Psychologist` no aparece en la [jerarquía oficial de Schema.org](https://schema.org/docs/full.html).

No implica que todo el JSON-LD sea inválido: la entidad también declara el tipo válido. Sí introduce un término innecesario que el control local no detecta.

**Cambio mínimo propuesto:** mantener [MedicalBusiness](https://schema.org/MedicalBusiness), retirar el término desconocido y conservar “Psicóloga” en `Person.jobTitle`. Validar el vocabulario y las propiedades con Schema Markup Validator y la compatibilidad con Google mediante Rich Results Test.

No agregar reseñas, puntuaciones, precios, especialidades o horarios inventados. `Service` describe las prestaciones, pero no garantiza una tarjeta enriquecida independiente. Google exige tipos y propiedades compatibles para sus [resultados de negocios locales](https://developers.google.com/search/docs/appearance/structured-data/local-business).

### 4. `lastmod` refleja la compilación, no el cambio de cada página

`scripts/prerender.mjs:50` usa `new Date()` y asigna la misma fecha a las 17 URLs en cada build. El sitemap público observado declara `2026-10-13` para todas.

Ese dato no demuestra cuándo cambió significativamente cada contenido. Google puede usar `lastmod` si es consistente y comprobable; la fecha debe representar cambios significativos de contenido, enlaces o datos estructurados. Véase su [documentación de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

**Cambio mínimo propuesto:** omitir el dato hasta disponer de fechas fiables, o mantener fechas reales por página. Ajustar el check que actualmente exige `<lastmod>`: tenerlo no es obligatorio y es preferible omitirlo a publicar una fecha no fiable. No usar automáticamente la fecha de cualquier commit como sustituto.

**Criterio de cierre:** recompilar sin cambiar el contenido no altera las fechas declaradas. Sitemap conserva solo URLs canónicas e indexables.

### 5. Los controles locales dejan pasar estos defectos

`npm run build` termina con éxito pese a los problemas anteriores porque `scripts/check-seo.mjs` comprueba presencia y coherencia parcial, sin validar semánticamente todos los tipos ni navegar en producción.

Además, su presupuesto de imágenes inspecciona las URLs `/assets/` dentro del HTML. No encuentra el fondo pesado referenciado únicamente desde CSS. El resultado “7 imágenes bajo 200 KB” **no significa que todas las imágenes del sitio pesen menos de 200 KB**.

**Mejora propuesta:** comprobar breadcrumbs previstos, artefactos de imagen referidos por CSS y correspondencia entre indexabilidad y sitemap. Añadir a la validación de publicación una prueba de las redirecciones de Inicio y una de navegación/hidratación. Reutilizar los scripts actuales y herramientas existentes; no hace falta instalar una biblioteca de SEO.

## Revisión página por página

Todas las rutas siguientes respondieron 200, tienen un H1 y metadatos únicos. “Indexable” significa que la configuración permite indexarlas; no confirma su presencia en Google. Las oportunidades editoriales deben contrastarse con el Word original.

| Página | Evaluación y mejora útil |
| --- | --- |
| `/` | Marca, propuesta terapéutica, servicios, enfoque, primera sesión y FAQ. H1 de marca válido; título menciona psicóloga en Costa Rica. Incorporar una referencia visible a Heredia y San José usando datos ya existentes, sin repetir palabras clave artificialmente. |
| `/servicios` | Las seis áreas tienen enlaces reales. H1 y descripción adecuados. Los seis enlaces “Ver servicio” pueden tener nombres accesibles más específicos. No necesita convertirse en otra ficha extensa. |
| `/sobre-mi` | Página sólida de confianza: trayectoria, formación, UCR, código 10195, enfoque y valores. Puede enlazar contextualmente a Servicios y Contacto y añadir fuentes oficiales de las credenciales cuando se verifiquen. |
| `/contacto` | Direcciones de las dos sedes, mapas, modalidad online y agendas. Corregir BreadcrumbList; valorar mencionar Heredia y San José en la descripción. Los nombres de modalidades, sedes y FAQ pueden ser encabezados semánticos conservando sus clases y apariencia. |
| `/recursos` | Seis tarjetas “Próximamente”, sin material para leer o descargar. La descripción ya aclara que se están preparando. Publicar recursos reales aprobados; mientras tanto, valorar `noindex` temporal y exclusión del sitemap. Es una decisión editorial, no una obligación técnica. |
| `/psi-cositas` | Página breve sin catálogo publicado. La alternativa por WhatsApp funciona. Completar el catálogo y los datos reales de sus materiales; valorar indexabilidad mientras permanece pendiente. No agregar schema Product sin productos concretos. |
| `/talleres` | Dos propuestas con objetivo, modalidad, duración y audiencia. No hay convocatorias fechadas. Publicar fechas, sede, disponibilidad y reservas cuando existan; no inventar Event para una propuesta general. |
| `/terapia-ansiedad` | H1, necesidades, enfoque, FAQ y áreas relacionadas específicos. Puede mostrar modalidad y ubicación y enlazar al perfil profesional y a Contacto. |
| `/imagen-corporal-conducta-alimentaria` | Contenido propio sobre relación con comida y cuerpo. Misma oportunidad de modalidades, ubicación y profesional. Título único y descriptivo; no hace falta añadir todos los términos geográficos a la vez. |
| `/terapia-trauma` | Contenido específico y prudente sobre seguridad y ritmo. Reforzar información práctica y enlaces a profesional/modalidades usando texto aprobado. |
| `/autocuidado-limites-autoestima` | Tema, FAQ y enlaces relacionados claros. Vincular proceso, profesional y formas de atención; mantener la diferenciación respecto de estrés. |
| `/estres-perfeccionismo` | Contenido sobre exigencia, rumia y descanso. Misma oportunidad de información práctica y ubicación. |
| `/terapia-depresion` | H1 y título específicos, enfoque y FAQ propios. Añadir contexto práctico aprobado y enlaces al perfil y a Contacto. |
| `/politica-de-privacidad` | Disponible y enlazada desde el footer; incluye referencia a PsicoCEO. Su brevedad no constituye por sí sola un fallo SEO. No se evaluó suficiencia jurídica. |
| `/aviso-legal` | Explica el alcance educativo y los límites de la información; está enlazado. No requiere keywords comerciales. |
| `/terminos-y-condiciones` | Condiciones y organización claras. Comparte el fondo de imagen de mayor peso. |
| `/terminos-y-condiciones-eap` | Documento propio y más extenso, con contacto EAP. Comparte el fondo pesado. No necesita competir por búsquedas genéricas de terapia. |

No hay un mínimo de palabras que deba imponerse. Las fichas de servicios tienen aproximadamente 256–300 palabras en su contenido principal y no están huérfanas. Deben ampliarse únicamente si la información ayuda a decidir cómo iniciar terapia. Google recomienda [contenido útil y fiable orientado a personas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Rendimiento y experiencia

Mediciones móviles en PageSpeed Insights, 13 de octubre de 2026, entre 10:29 y 10:31, Costa Rica. Moto G Power emulado, 4G lenta, Lighthouse 13.5.0. Se midieron tres páginas representativas; no se extrapolan sus resultados a las otras 14.

| Indicador | [Inicio](https://pagespeed.web.dev/analysis/https-psicomarcelazamora-com/7pspkg4baa?form_factor=mobile) | [Contacto](https://pagespeed.web.dev/analysis/https-psicomarcelazamora-com-contacto/4z9rvgcmu4?form_factor=mobile) | [Términos](https://pagespeed.web.dev/analysis/https-psicomarcelazamora-com-terminos-y-condiciones/clfn84j8o5?form_factor=mobile) |
| --- | --- | --- | --- |
| Rendimiento | 80/100 | 92/100 | 68/100 |
| SEO | 100/100 | 100/100 | 100/100 |
| Accesibilidad automática | 100/100 | 96/100 | 100/100 |
| Prácticas recomendadas | 100/100 | 100/100 | 100/100 |
| FCP | 2,6 s | 2,6 s | 2,9 s |
| LCP | 4,0 s | 2,6 s | 8,0 s |
| Total Blocking Time | 0 ms | 80 ms | 0 ms |
| CLS | 0 | 0,056 | 0 |
| Speed Index | 5,0 s | 2,8 s | 4,4 s |
| Datos de usuarios reales | No disponibles | No disponibles | No disponibles |

Son resultados de una ejecución de laboratorio, sujetos a variación. El 100 SEO cubre comprobaciones básicas y no detecta todos los problemas descritos. No demuestra posiciones, tráfico ni validación semántica del JSON-LD. Los valores de laboratorio no permiten declarar aprobados o suspendidos los Core Web Vitals reales. Google explica la relación y límites en su [guía de experiencia de página](https://developers.google.com/search/docs/appearance/page-experience).

Hallazgos específicos de las mediciones:

- **Renderizado inicial:** CSS del sitio y CSS de Google Fonts bloquean el renderizado; ahorro estimado por PageSpeed de 1070 ms. Conservar las tipografías y valorar una entrega más eficiente, midiendo antes y después.
- **LCP:** el elemento identificado es el retrato de Inicio, que ya tiene preload. El desglose muestra retraso de renderizado mayor que el tiempo de transferencia del retrato; no basta con volver a añadir preload.
- **JavaScript externo:** la recomendación de minificar, con ahorro estimado de 86 KiB, apunta a `api.psicoceo.com/js/external-tracking.js`, no al bundle minificado de Vite. Consultar al proveedor por una versión optimizada; no retirar el seguimiento sin valorar sus funciones.
- **JavaScript propio:** ahorro estimado de 44 KiB por código no utilizado en la carga inicial. `src/App.jsx` importa todas las páginas de forma anticipada. Evaluar división por rutas solo si su beneficio justifica el cambio y conserva prerender/hidratación; es posterior a las correcciones pequeñas.
- **Logo:** ahorro estimado de 19 KiB por dimensiones/formato de `logo-header.png`. Optimización pequeña conservando apariencia.
- **Términos:** `src/assets/terms-background.jpg` mide 5083×5083 y pesa 922.521 bytes (aproximadamente 901 KiB); `src/styles/terms.css:7` lo utiliza en un contenedor de máximo 1000 px. Reducir dimensiones y comprimir preservando el diseño. No atribuir ese peso a Inicio: el fondo corresponde a las páginas de términos.
- **Carga de Términos:** LCP de 8,0 s; el elemento señalado es `article.termsSheet`. El tamaño del fondo y su descubrimiento desde CSS son oportunidades de optimización. La ejecución no aísla cuánto del LCP corresponde a cada causa.
- **Mapas de Contacto:** PageSpeed registra aproximadamente 823 KiB de JavaScript de Google Maps y estima 464 KiB sin uso durante la carga medida. Los dos iframes ya tienen `loading="lazy"`; evaluar una carga más próxima a la necesidad real, sin eliminar mapas ni cambiar su disposición. Es código de terceros, no 508 KiB de código propio de React.
- **Accesibilidad en Contacto:** la alerta de contraste identifica la etiqueta “ATENCIÓN PRESENCIAL”; también se señalan dos enlaces “Maps” con destinos distintos. Mejorar los nombres accesibles por sede preserva apariencia. Una corrección de color necesita respetar la regla del proyecto que prohíbe cambiar la paleta sin solicitud explícita. Estas alertas no prueban pérdida de posicionamiento.

El retrato pesa 166.678 bytes; las fotos de sedes, 25.147 y 24.385 bytes. Una imagen residual de `public/images` de unos 702 KiB no se identificó como imagen utilizada en las páginas auditadas, por lo que no se contabiliza como carga efectiva.

## SEO local y confianza profesional

La web ya publica Heredia y San José, direcciones, teléfono, coordenadas, mapas y redes. Lo siguiente es mejorar coherencia entre información visible, datos estructurados y perfiles reales:

1. Confirmar qué fichas de Google Business Profile pertenecen a Marcela o a Volver al Presente. Los enlaces a mapas de los establecimientos no acreditan por sí solos la propiedad de una ficha profesional.
2. Revisar nombre, categoría, teléfono, dirección, URL, fotos y horarios reales en las fichas elegibles, sin crear duplicados ni asumir elegibilidad de cada consultorio.
3. Publicar horarios en web y JSON-LD únicamente cuando estén confirmados.
4. Reutilizar `LOCATIONS` en texto visible de Inicio y del componente común de servicios. Añadir enlaces contextuales a Contacto y Sobre mí.
5. Verificar enlaces oficiales para la formación y el código profesional ya publicados. Para futuros recursos clínicos, indicar autora y revisión real cuando proceda.

Son oportunidades para hacer la información más útil y comprobable. No permiten prometer aparición en el paquete de Maps. Google explica que el posicionamiento local considera relevancia, distancia y prominencia en sus [recomendaciones oficiales para Perfil de Empresa](https://support.google.com/business/answer/7091?hl=es).

## Acciones en Search Console pendientes de verificar

No se accedió a una cuenta de Search Console. Las tareas siguientes son una lista de verificación, no errores confirmados:

- Verificar la propiedad del dominio y revisar el sitemap enviado.
- Inspeccionar Inicio, Contacto y las seis fichas: estado de indexación, canonical declarada y seleccionada por Google, HTML renderizado y última exploración.
- Revisar URLs excluidas, soft 404, duplicadas, rastreadas sin indexar e indexadas inesperadamente, especialmente `/index`.
- Revisar rendimiento por consulta y página: impresiones, clics y CTR, separando marca, servicios y búsquedas locales. Comparar periodos equivalentes, sin atribuir cambios a un ajuste antes de tener evidencia.
- Revisar Core Web Vitals móviles con datos reales cuando haya volumen suficiente y los informes de HTTPS, acciones manuales y seguridad.
- Tras las correcciones publicadas, validar datos estructurados y solicitar indexación de las páginas pertinentes si corresponde.

Un sitemap accesible y `index, follow` no sustituyen estas comprobaciones.

## Cambios que no conviene priorizar

- Cambiar React/Vite, introducir dependencias SEO o rediseñar para resolver estos hallazgos.
- Añadir `meta keywords`, relleno de palabras clave o páginas repetidas por ciudad.
- Recortar automáticamente todos los títulos a 60 caracteres. Los actuales miden 32–61; Google [no establece un límite fijo de caracteres](https://developers.google.com/search/docs/appearance/title-link).
- Cambiar identidad visual o H1 de marca sin una necesidad editorial concreta.
- Añadir FAQPage para obtener preguntas desplegables en Google. La función de resultados enriquecidos FAQ fue retirada en mayo de 2026 y su documentación en junio, según las [actualizaciones oficiales de Google](https://developers.google.com/search/updates). Las FAQ visibles siguen siendo útiles.
- Añadir puntuaciones de reseñas propias, fechas de revisión, credenciales, precios u horarios no verificados.
- Poner todas las páginas legales en `noindex` automáticamente: su indexabilidad actual no constituye por sí misma un error.

## Validaciones y límites

| Comprobación | Resultado fresco |
| --- | --- |
| `npm run build` | Exit 0: Vite, SSR, 17 páginas + 404 + sitemap y controles SEO. |
| `node scripts/check-seo.mjs` | Exit 0; alcance limitado a las comprobaciones implementadas. |
| `npm run lint` | Exit 1, 169 errores. Recorre copias y compilaciones dentro de `.claude/worktrees`; no equivale a 169 errores en el código fuente actual. |
| `npm exec -- eslint src scripts vite.config.js eslint.config.js` | Exit 0: fuentes y scripts del checkout actual. |
| `npm audit --json` | Exit 1 con 4 paquetes afectados: 2 severidad alta y 2 moderada. `brace-expansion`, `source-map-js`, `react-router`, `react-router-dom`. Es mantenimiento adicional, no prueba de explotación ni de pérdida de ranking. No se actualizaron dependencias. |
| HTTP público | Las 17 rutas oficiales, robots y sitemap responden 200. Metadatos coinciden con build. Ruta inexistente 404; variantes documentadas arriba. |
| Navegador público | Inicio y navegación a Contacto comprobados; defecto de `/index` reproducido después de hidratar. |
| PageSpeed | Tres informes móviles completados: Inicio, Contacto y Términos; métricas registradas arriba. |

No se verificaron: posiciones en Google, indexación real, tráfico o conversiones; propiedad y estado de Business Profile; validez completa con Rich Results Test/Schema Markup Validator; vigencia externa de credenciales; funcionamiento de una reserva real; métricas de usuarios reales. La revisión directa de navegador fue de escritorio; no se completó una revisión visual manual móvil. PageSpeed sí realizó su emulación móvil en las tres páginas medidas.

No se encontró `Información para Página Web.docx` en los archivos disponibles. La fidelidad de textos clínicos frente al Word no se pudo contrastar. Los controles, esta auditoría y el puntaje Lighthouse no prometen una posición concreta en Google.

## Orden recomendado y aceptación

| Orden | Trabajo | Cómo comprobarlo |
| --- | --- | --- |
| 1 | Resolver `/index` y `/index.html`; conservar 404 real. | HTTP de ambos alias termina en `/`; DOM y head coinciden tras hidratación. |
| 2 | Corregir BreadcrumbList de Contacto y tipo de las sedes. | HTML/DOM de Contacto y validadores de schema sin esos defectos. |
| 3 | Corregir `lastmod` y ampliar el control SEO. | Rebuild sin cambios no renueva fechas; sitemap solo incluye URLs canónicas e indexables. |
| 4 | Reducir bloqueo de renderizado y optimizar imágenes manteniendo diseño. | Comparar PageSpeed móvil en las mismas URLs y condiciones, junto con funcionamiento de seguimiento y agenda. |
| 5 | Completar Recursos/Psicositas y mejorar información local y enlaces contextuales. | Contenido real aprobado disponible; metadatos y sitemap reflejan la decisión editorial. |
| 6 | Verificar Search Console y Business Profile y medir resultados. | Informes reales de indexación, consultas, páginas y fichas, comparados tras la publicación. |

Puntos de reutilización: `public/staticwebapp.config.json` para redirecciones; `src/pages/Contacto.jsx` para la llamada defectuosa; `src/data/seo.js` para entidades; `scripts/prerender.mjs` y `scripts/check-seo.mjs` para sitemap y validación; `src/data/content.js` y `src/components/ServiceDetailPage.jsx` para información común. No es necesario sustituir la arquitectura actual.
