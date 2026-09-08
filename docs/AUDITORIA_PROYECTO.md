# Auditoría del sitio y plan propuesto

Actualización del 7 de septiembre de 2026: este documento conserva los hallazgos iniciales. Se implementaron correcciones locales; el estado vigente por área se registra en [PLAN_MEJORAS.md](PLAN_MEJORAS.md). El dominio correcto psicomarcelazamora.com respondió HTTP 200 por HTTPS durante esta implementación.

Fecha: 6 de septiembre de 2026, Costa Rica.
Base: `9a8d384`, rama `main`, carpeta actual `C:\Users\lsaj_\source\GitHub\volver-al-presente-web`.

## Evaluación general

El sitio funciona localmente: las quince páginas renderizan, la compilación termina y no se detectaron errores de JavaScript en el recorrido. La estructura React + Vite es suficiente para continuar. Los problemas principales están en publicación, navegación, accesibilidad y contenido incompleto; no hace falta sustituir el stack ni rediseñar para corregirlos.

Este documento amplía `ESTADO_ACTUAL.md` y propone un plan nuevo basado en evidencia. No es el plan anterior, que no apareció en la búsqueda. Durante la auditoría no se modificaron código, estilos, dependencias ni configuración del hosting.

## Alcance y comprobaciones

- Lectura del código de páginas, componentes, datos, estilos, metadatos y configuración de construcción/publicación.
- Navegador local: las 15 rutas a tamaño de escritorio y a 390 × 844; Inicio, Contacto, Sobre mí y Recursos también a 320, 768 y 1024 píxeles de ancho.
- Inspección visual de portada en escritorio y móvil, catálogo, Recursos a 320 píxeles y llegada a Contacto desde el pie de Inicio.
- Menú: apertura, selección, cierre tras navegar, recorrido con Tab y Escape. FAQ: apertura mediante Enter.
- Inspección de títulos, H1, canonical, `og:url`, imágenes y protección de enlaces externos en las 15 rutas.
- `npm run lint` y `npm run build`: pasan. `npm ls --depth=0`: dependencias directas resueltas.
- `npm audit`: 12 paquetes afectados, 6 de severidad alta, 4 moderada y 2 baja. El análisis sin dependencias de desarrollo realizado en esta revisión del proyecto reportó 3 moderadas de React Router.
- Consulta HTTP del dominio declarado y de la agenda; comprobación DNS del dominio con el resolvedor 1.1.1.1.

No se hizo una certificación WCAG, revisión clínica/legal, medición Lighthouse/Core Web Vitals, prueba en dispositivos físicos, reserva de citas ni envío de mensajes. No se accedió al panel de Azure, al DNS administrativo ni a Search Console. El renderizado se probó con el servidor de desarrollo; el paquete de producción se compiló, pero no se desplegó ni se recorrió en un hosting de producción.

## Fallos y pendientes prioritarios

### A01 — Alta: el dominio declarado no resuelve

El dominio usado en la configuración actual (`https://volveralpresente.cr/`) falló por nombre de host desconocido desde este entorno. La propietaria confirmó que el dominio correcto es `https://psicomarcelazamora.com`; el dominio anterior aparece en `public/sitemap.xml`, `public/robots.txt` y `src/hooks/usePageMeta.js:36`.

**Impacto:** los enlaces y señales SEO apuntan a un dominio que no fue accesible en esta comprobación. Esto no demuestra que no exista otra dirección pública operativa.

**Acción:** comprobar DNS y HTTPS de `psicomarcelazamora.com`, confirmar el recurso de hosting y alinear canonical, sitemap y robots con ese destino. La disponibilidad pública debe verificarse antes de considerar listo el sitio.

### A02 — Alta: el catálogo no abre Canva

En `src/data/content.js:11` permanece `PENDIENTE_AGREGAR_LINK_DE_CANVA`. `src/pages/PsiCositas.jsx:24` lo usa como `href` aunque sea provisional. En el navegador se resuelve a `/PENDIENTE_AGREGAR_LINK_DE_CANVA`; al visitar ese destino la aplicación vuelve a Inicio. Además, se muestra al visitante la instrucción técnica `CANVA_CATALOG_URL`.

**Acción:** usar una URL aprobada y validada. Mientras falte, ofrecer un estado honesto o consulta por WhatsApp, sin un botón que promete abrir un catálogo inexistente. Comprobar también la variable pública del hosting: no se inspeccionó su valor remoto.

### A03 — Alta: el encabezado se recorta a 320 píxeles

Reproducido en Inicio, Contacto, Sobre mí y Recursos: con viewport de 320 píxeles el documento mide 344 y el botón de menú queda parcialmente fuera de pantalla. `src/styles/contacto.css:22` conserva `min-width: 260px` para `.brand`, aunque el texto de la marca se oculta en móvil. El espacio reservado, el botón, la separación y los márgenes exceden el ancho disponible.

**Acción:** permitir que la marca se ajuste en el breakpoint móvil. Comprobar 320 y 360 píxeles, zoom y menú abierto, conservando el diseño.

### A04 — Media: cambiar de página conserva una posición incorrecta

Reproducción a 390 × 844: bajar al pie de Inicio y pulsar Contacto. La ruta cambia, pero la nueva página queda desplazada aproximadamente 2411 píxeles y el H1 queda unos 2277 píxeles por encima de la pantalla. `src/App.jsx` no implementa gestión de scroll o foco por navegación.

**Impacto:** la persona se pierde la introducción y puede creer que apenas cambió la página.

**Acción:** definir scroll y foco al abrir una ruta, respetando el comportamiento de Atrás/Adelante y posibles anclas. Probar desde enlaces al final de páginas largas.

### A05 — Media: metadatos de una página contaminan otra

`src/hooks/usePageMeta.js:37` solo cambia canonical y `og:url` si recibe `canonicalPath`; no los actualiza ni elimina cuando falta. Reproducción: abrir Aviso Legal y pulsar Inicio. Inicio mantiene la URL de Aviso Legal en ambas etiquetas.

En carga directa carecen de canonical siete páginas: Inicio, Servicios, Sobre mí, Recursos, Psicositas, Talleres y Política de Privacidad. Los seis servicios, Contacto y Aviso Legal sí lo declaran.

**Acción:** generar una URL correcta para cada ruta y comprobarla tanto al cargar directamente como al navegar entre páginas. La documentación de [Google sobre SEO con JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) respalda mantener coherentes las señales de canonical y metadatos.

### A06 — Media: menú móvil incómodo con teclado

Abre y se cierra al seleccionar un enlace. Sin embargo, al abrirlo con Enter y pulsar Tab, el foco salta al botón WhatsApp del contenido, omitiendo los enlaces recién desplegados. Escape no lo cierra. En `src/components/Header.jsx` la navegación aparece antes del botón y no hay gestión de foco.

**Acción:** ajustar orden o foco para entrar de forma predecible a los enlaces; permitir cierre con Escape y retorno al botón. No requiere convertirlo en un diálogo ni imponer una trampa de foco.

### A07 — Media: contraste insuficiente en botones secundarios

En el WhatsApp del pie, el navegador muestra texto `rgb(24,149,149)` de 13 px y peso 600 sobre turquesa translúcido. Al componer sus fondos definidos en CSS, el contraste calculado es aproximadamente **3,09:1**. Está por debajo del mínimo de 4,5:1 para texto normal descrito por [W3C, contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Referencias: `src/styles/global.css:86` y fondos del pie en `src/styles/contacto.css:452`. La misma clase se reutiliza en varios llamados a la acción; cada fondo debe comprobarse. Esta medición no constituye una auditoría completa de contraste.

**Acción:** ajustar el contraste conservando la identidad visual. Es una corrección visual concreta a revisar antes de aplicarla, conforme a las reglas del proyecto.

### A08 — Media: Recursos todavía es un escaparate sin material accesible

Se verificaron seis tarjetas en `src/pages/Recursos.jsx:119`: todas contienen título, descripción e imagen, pero ninguna tiene enlace para leer o descargar. El párrafo introductorio incluye una explicación de diseño: “Quise que se sintiera más como una pequeña biblioteca editorial…”.

**Acción:** incorporar materiales aprobados y su acceso real; si aún no están listos, explicarlo con un estado de disponibilidad. Sustituir la explicación de diseño por contenido dirigido al visitante, validado con la fuente original.

### A09 — Alta para mantenimiento: dependencias con avisos de seguridad

Paquetes de severidad alta reportados: `vite`, `brace-expansion`, `browserslist`, `js-yaml`, `nanoid` y `postcss`. Estos seis pertenecen al entorno de desarrollo/construcción. Las dependencias de producción afectadas en el audit sin desarrollo son `@remix-run/router`, `react-router` y `react-router-dom`, con severidad moderada.

**Interpretación:** el conteo no significa doce fallos explotables por cualquier visitante. Hay que evaluar cada aviso y la funcionalidad que utiliza esta aplicación. No se observó SSR, formularios de navegación dinámica ni un backend propio. Vite se ejecutó limitado a localhost.

**Acción:** revisar avisos, aplicar actualizaciones compatibles y verificar lint, build y navegación. No usar correcciones forzadas ni migraciones de versión mayor sin evaluar su alcance. No se cambió el lockfile.

### A10 — Pendiente de validar: rutas directas en Azure

Hay un flujo de Azure Static Web Apps que publica `dist`, pero no se encontró `staticwebapp.config.json` ni configuración equivalente en los archivos del proyecto. Vite resuelve las rutas locales; eso no demuestra que Azure haga lo mismo al recargar `/contacto` o un servicio.

**Acción:** comprobar la URL real desplegada y configurar fallback si falta. Microsoft documenta que una SPA requiere [fallback para acceso directo y recarga de rutas](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#fallback-routes). El archivo debe llegar a la raíz de la salida de construcción. No se declara aquí un fallo de producción reproducido.

## Mejoras adicionales

| Área | Observación | Mejora propuesta |
| --- | --- | --- |
| Contacto y mapas | “Cómo llegar” busca barrios, no un consultorio identificado. | Usar ubicación exacta aprobada o instrucciones para solicitarla; no inventar direcciones. |
| Inicio móvil | A 390 × 844 la foto precede al texto y los botones principales quedan debajo de la primera pantalla. | Evaluar dar acceso más temprano a contactar/agendar. Es una mejora de conversión que implica revisar el layout aprobado, no un error que impida navegar. |
| Inicio escritorio | El texto principal se limita a `14ch`, produciendo muchas líneas y bajando los botones. | Revisar legibilidad y longitud con el diseño aprobado antes de modificarlo. |
| Recursos y textos | Hay mezcla de voseo y tuteo, y mayúscula reiterada en “Presencial”. | Unificar edición con el Word original. No validar ni sustituir afirmaciones clínicas sin esa fuente. |
| Talleres | Dos ofertas generales sin convocatoria concreta; la página sí aclara que se consulta disponibilidad. | Añadir fechas o estado solo si existen convocatorias aprobadas; no tratarlo como inscripción ya disponible. |
| Privacidad | Texto menciona formularios, aunque no hay; no describe los servicios externos utilizados. | Alinear la explicación con WhatsApp, HuliVida y Google Fonts y con las prácticas reales. Pendiente validación profesional del texto; no se emite un dictamen legal. |
| Páginas inexistentes | `src/App.jsx:51` redirige cualquier ruta desconocida a Inicio. Esto también oculta enlaces erróneos como el del catálogo. | Mostrar una página no encontrada clara y acordar el tratamiento HTTP en hosting. |
| Previsualización social | Falta `og:image`; el HTML inicial es común a todas las rutas. | Añadir imagen social y evaluar metadatos por ruta en el HTML servido, conservando Vite. Google puede renderizar JavaScript; no se concluye que el sitio sea inindexable. |
| Peso de imágenes | Logo: 327446 bytes; foto: 310411 bytes. El logo se presenta a 50 × 50 CSS px. | Optimizar dimensiones y formato preservando calidad/transparencia. Medir ahorro; no atribuir puntuaciones de velocidad sin medirlas. |
| Carga inicial | Un paquete JS de 273,63 kB, 85 kB gzip, y CSS de 19,41 kB, 4,67 kB gzip. | Priorizar imágenes; considerar carga de páginas bajo demanda solo si una medición justifica el cambio. |
| Accesibilidad adicional | Existe `lang="es"`, un H1 por página, alt en imágenes y `aria-expanded` en FAQ. Falta acceso para saltar al contenido y relación explícita pregunta/panel. | Añadir salto al contenido, conectar controles FAQ con sus paneles y revisar foco y encabezados. La FAQ probada sí abre con Enter. |
| Mantenimiento | `contacto.css` contiene estilos globales de header/footer y reglas residuales; `relatedSlugs` se define sin consumirse. | Consolidar estilos y datos en cambios pequeños; aprovechar enlaces relacionados solo si aportan a la navegación. |
| Calidad antes de publicar | El flujo visible no ejecuta lint ni pruebas de navegación explícitamente; no hay comando de test. | Añadir comprobaciones de las rutas, metadatos, enlaces provisionales y menú antes del despliegue. Mantenerlas centradas en fallos reales. |
| Documentación | `SECURITY_NOTES.md` indica hosting indefinido pese al flujo Azure; falta Word y plan anterior. | Corregir documentación y mantener este plan con estados verificables y una referencia accesible al Word. |

## Lo que ya funciona

- Las quince rutas conocidas muestran contenido y un H1; no se detectaron imágenes rotas en la inspección de escritorio.
- No se detectó desbordamiento global en las 15 rutas a 390 píxeles ni en las cuatro páginas de muestra a 768 y 1024. El carrusel horizontal de temas se distingue del desbordamiento de toda la página.
- La agenda devuelve HTTP 200 con título “Marcela Zamora Arrieta | Psicología | HuliVida”. Esto valida respuesta y perfil, no el proceso completo de reserva.
- Los enlaces WhatsApp tienen número y mensaje codificados; no se enviaron mensajes ni se verificó titularidad del número.
- Los enlaces de nueva pestaña inspeccionados incluyen `noopener noreferrer`.
- No se encontró uso de `dangerouslySetInnerHTML`, `eval` ni `console.log` de depuración en el código revisado. No equivale a una certificación de seguridad.
- Los avisos de consola observados son advertencias de futura versión de React Router, no errores que impidan usar el sitio.

## Plan propuesto y criterios de cierre

Todos los bloques están **pendientes**. La auditoría está terminada dentro del alcance indicado; la implementación no ha comenzado.

| Orden | Trabajo | Criterio de cierre |
| --- | --- | --- |
| 1 | Confirmar publicación y dominio definitivo; revisar Azure, DNS, HTTPS y rutas directas. | Portada y 15 rutas accesibles en el destino acordado; recarga funcional; sitemap y canonical con dominio correcto. |
| 2 | Resolver catálogo provisional, desbordamiento a 320, scroll, metadatos y teclado del menú. | Reproducciones A02–A06 dejan de fallar, tanto con acceso directo como navegación interna. |
| 3 | Revisar y corregir dependencias. | Actualizaciones verificadas; lint/build pasan; avisos restantes, si existen, evaluados y documentados. Puede avanzarse en paralelo al bloque 1. |
| 4 | Corregir contraste y completar accesibilidad básica. | Botones cumplen contraste; recorrido por teclado lógico; controles y contenido identificables. |
| 5 | Recuperar Word, catálogo y recursos; validar textos, ubicaciones y disponibilidad de talleres. | Ningún enlace provisional; cada recurso publicado se puede abrir; contenido aprobado y consistente. |
| 6 | Optimizar imágenes y presentación social; actualizar documentación y verificaciones automáticas. | Reducción de peso medida, metadatos correctos y comprobaciones repetibles antes de publicar. |

Las mejoras de layout se presentan como propuestas separadas de las correcciones funcionales: requieren una decisión explícita sobre el diseño. No se propone migrar a Next.js, Expo, Tailwind u otro stack.
