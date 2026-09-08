# Plan de mejoras del sitio

Fecha: 6 de septiembre de 2026.

## Avance — 7 de septiembre de 2026 (auditoría SEO)

Segunda ronda, sobre la base ya prerenderizada. Implementado localmente, sin publicar.

- **SEO local.** Las dos sedes presenciales (Tree Cowork, Heredia y Tree Armonioso, San José) se publican como entidades `MedicalBusiness`/`Psychologist` con dirección postal, área servida y teléfono. Antes solo existía una `Organization` genérica, sin señal geográfica para el paquete local de Google. Las direcciones visibles de `Contacto` ahora salen de `LOCATIONS` en `content.js`, para que el texto y los datos estructurados no se separen.
- **Datos estructurados por página.** `usePageMeta` acepta `schemas`: las seis áreas de terapia llevan ficha `Service` y todas las secciones llevan `BreadcrumbList`.
- **Imágenes.** El logo pesaba 319 KB (2284×1599) para dibujarse a 50 px y el retrato 303 KB. Se generaron versiones ajustadas: el peso de imágenes por página bajó de 638 KB a 183 KB. Se conservan los originales en `src/assets` como maestros; Vite solo empaqueta los importados.
- **Imagen social.** `og:image` era el retrato vertical 899×1600 declarado como `summary_large_image`, y las tarjetas lo recortaban. Se añadió `og-image.jpg` de 1200×628 con dimensiones declaradas.
- **Iconos.** El sitio no tenía favicon: Google mostraba el globo genérico. Se agregaron `favicon.ico`, `apple-touch-icon`, iconos 192/512 y `site.webmanifest`.
- **Hidratación.** `main.jsx` usaba `createRoot`, que descartaba el HTML prerenderizado y volvía a dibujar todo. Ahora hidrata cuando el contenedor llega con contenido. Verificado en las 15 rutas: sin avisos de desajuste en consola.
- **Enlaces internos.** `relatedSlugs` estaba definido en `content.js` pero sin usar. Las páginas de servicio enlazan a sus áreas relacionadas y al listado, reutilizando clases existentes.
- **Encabezados y títulos.** Los H1 de servicio pasan de la etiqueta corta ("Ansiedad") a la intención de búsqueda ("Terapia para la ansiedad"). Se reescribieron los títulos de Recursos, Talleres, Psicositas y Contacto.
- **Otros.** `lang="es-CR"`, `lastmod` en el sitemap y dimensiones intrínsecas en el retrato de Sobre mí.
- **Verificación.** `check-seo.mjs` cubre ahora iconos, `og:image` con dimensiones, las dos sedes con dirección, ficha y migas por servicio, enlaces internos, `lastmod` y un presupuesto de 200 KB por imagen.

Decidido: `/psi-cositas`, `/talleres` y `/recursos` se mantienen indexadas pese a su poco contenido; se revisará cuando exista el material definitivo.

- **Perfiles y coordenadas.** El usuario aportó Instagram y Facebook oficiales (`SOCIAL_PROFILES`), publicados como `sameAs` en la clínica, la persona y ambas sedes. Las coordenadas se obtuvieron de los Plus Codes indicados (`2V2P+MV Heredia` y `WWHJ+3R7 San José`) y se contrastaron con el marcador de las fichas de Google Maps ya enlazadas: coinciden dentro de 5 m. Se publican como `geo` junto a `hasMap`. Los enlaces de Maps y Waze pasaron a derivarse de `LOCATIONS`, para que no vivan duplicados en `externalLinks.js`.

Pendiente por falta de datos: horarios de atención por sede (`openingHours`) y la ficha de Google Business Profile de cada consultorio.

## Avance — 7 de septiembre de 2026

Implementación local iniciada por solicitud del usuario. No se ha publicado.

Actualización SEO y ubicaciones: las páginas conocidas se prerenderizan durante el build para entregar contenido y metadatos desde la primera respuesta. Se actualizaron las ubicaciones a Tree Cowork (Heredia) y Tree Armonioso (San José). La tarjeta de Heredia tiene un botón Agendar que abre el widget PsicoCEO proporcionado.

Actualización de ubicaciones: las tarjetas muestran barrio y espacio de atención. La agenda de Heredia se presenta en un modal amplio con cierre visible, cierre con Escape y bloqueo temporal del scroll de fondo.

Para Google Ads quedan preparados títulos, descripciones, URLs canónicas, sitemap, imagen social, datos estructurados, páginas de destino por servicio y llamadas claras a WhatsApp/agenda. La aprobación, nivel de calidad y conversiones de una campaña no pueden verificarse desde este repositorio: requieren la cuenta publicitaria, palabras clave, anuncios y etiquetas de conversión reales. No se agregaron identificadores de Ads inventados.

| Área | Estado actual |
| --- | --- |
| PsicoCEO | Fragmento instalado una vez en la plantilla común, con el ID solicitado y carga diferida. Pendiente verificar recepción en el panel y soporte para cambios internos de ruta. |
| Dominio y SEO | Corregidos robots, sitemap, canonical, og:url, og:image, datos estructurados y HTML inicial por ruta a psicomarcelazamora.com. Pendiente verificar el contenido tras publicar. |
| Azure | Configuración de trailing slash, 404 real, caché de assets y dos cabeceras preparada en public/staticwebapp.config.json. Pendiente despliegue y comprobación en el proveedor. |
| Navegación y móvil | Implementados ajuste de encabezado a 320 px, foco/scroll por ruta, restauración en Atrás/Adelante, menú con Escape y foco, y página no encontrada con noindex. |
| Ubicaciones y agenda | Mapas actualizados a Tree Cowork y Tree Armonioso. Heredia prueba agenda embebida de PsicoCEO bajo demanda; San José mantiene su contacto telefónico. |
| Catálogo | El enlace provisional ya no se ofrece: se muestra consulta por WhatsApp. Solo se habilita el catálogo con una URL HTTPS válida. Falta la URL definitiva. |
| Recursos | Se indica que están en preparación; falta el material aprobado para habilitar lectura o descarga. |
| Accesibilidad | Mejor contraste de botones secundarios, foco visible, salto al contenido y relaciones entre preguntas y paneles FAQ. No equivale a certificación WCAG completa. |
| Dependencias | Actualizadas dentro de rangos existentes. Audit reducido de 12 a 2 moderadas, sin altas/críticas. Pendiente migración mayor de React Router. |
| Privacidad | Añadida información factual sobre PsicoCEO y canales externos. Sigue pendiente validación completa del texto. |

Las fases siguientes conservan el alcance previsto. Esta tabla y el registro de verificación al final distinguen lo implementado de lo pendiente.

## Decisiones base

- Dominio público confirmado: https://psicomarcelazamora.com.
- “Volver al Presente” es el nombre comercial de la clínica.
- Se conserva React + Vite + React Router DOM y la identidad visual actual.
- Se corrigen primero fallos funcionales, publicación y accesibilidad; las mejoras de diseño quedan separadas.
- No se publican cambios ni se modifican servicios externos desde este plan.

## Resultado esperado

Una persona puede entrar al dominio correcto, navegar y recargar cualquier página, usar el menú en móvil y con teclado, encontrar información vigente, abrir los canales reales de contacto y compartir URLs con metadatos coherentes.

## Fase 1 — Publicación y SEO

Estado: correcciones del repositorio implementadas; pendiente publicación, imagen social y validación del despliegue.

1. Confirmar que psicomarcelazamora.com apunta al hosting vigente y tiene HTTPS válido.
2. Confirmar la URL pública de Azure Static Web Apps o del proveedor activo.
3. Actualizar robots.txt, sitemap.xml y la URL base de usePageMeta.js al dominio correcto.
4. Crear staticwebapp.config.json si Azure es el proveedor activo, con fallback a /index.html para las rutas de React.
5. Probar acceso directo y recarga en todas las rutas.
6. Definir canonical y og:url para todas las páginas; una ruta no debe heredar metadatos de otra.
7. Añadir og:image y comprobar que se pueda leer desde el dominio.

Cierre: el dominio responde con HTTPS, las 15 rutas abren directamente y sobreviven a una recarga, las señales SEO usan el dominio correcto y no quedan referencias a volveralpresente.cr.

## Fase 2 — Navegación y móvil

Estado: implementada localmente; verificación detallada al final del documento.

1. Corregir el ancho mínimo del encabezado para 320 píxeles.
2. Añadir gestión de scroll al cambiar de ruta y preservar un comportamiento razonable para Atrás, Adelante y anclas.
3. Mejorar el menú móvil: foco predecible al abrir, cierre con Escape y retorno del foco al botón al cerrar.
4. Revisar el orden de tabulación.
5. Añadir una página 404 clara, en lugar de ocultar destinos inválidos con una redirección silenciosa a Inicio.
6. Mantener noopener noreferrer y la generación codificada de WhatsApp.

Cierre: no hay desbordamiento horizontal a 320, 360, 390 y 768 píxeles; los enlaces llegan al inicio visible de la página destino; el menú funciona con teclado; ningún enlace provisional se presenta como funcional.

## Fase 3 — Contenido público

Estado: requiere materiales y decisiones de la clínica.

1. Sustituir el enlace provisional de Canva por la URL aprobada, o retirar temporalmente el botón.
2. Recuperar el Word original Información para Página Web.docx y comparar Sobre mí, servicios, FAQs, CTAs, misión, visión, valores y metadescripciones.
3. Convertir Recursos en materiales utilizables: cada tarjeta debe tener lectura, descarga o estado explícito de disponibilidad.
4. Confirmar ubicaciones exactas de Heredia y San José antes de mejorar los mapas.
5. Confirmar fechas, cupos y modalidad de talleres; mantenerlos como oferta general mientras no exista convocatoria.
6. Unificar voseo/tuteo, mayúsculas y tono con la fuente aprobada.
7. Revisar la Política de Privacidad para que describa los canales reales. Requiere validación profesional antes de publicarse como texto legal.

Cierre: no hay enlaces ni textos provisionales, cada recurso visible tiene una acción real, y datos, ubicaciones y contenido están confirmados.

## Fase 4 — Seguridad, accesibilidad y rendimiento

Estado: avances en dependencias y accesibilidad; pendientes React Router mayor, imágenes y medición de rendimiento.

1. Revisar las alertas de vite, react-router-dom y dependencias transitivas.
2. Aplicar actualizaciones compatibles sin correcciones forzadas.
3. Ejecutar lint, build, auditoría y recorrido de rutas después de cada actualización.
4. Ajustar el contraste de botones secundarios y estados de foco.
5. Añadir enlace Saltar al contenido, relaciones explícitas entre preguntas y paneles FAQ y foco visible.
6. Optimizar banner.jpeg y logo-marcela.png preservando su apariencia.
7. Medir rendimiento antes de dividir carga de páginas.

Cierre: lint y build pasan, las alertas restantes están evaluadas, el recorrido de teclado es lógico, los controles principales tienen contraste suficiente y se documenta el peso de imágenes antes y después.

## Fase 5 — Validación antes de publicar

1. Probar cada ruta en escritorio, móvil y 320 píxeles.
2. Probar menú, FAQ, WhatsApp, teléfono, agenda y mapas sin enviar mensajes ni reservar citas.
3. Comprobar títulos, H1, descripciones, canonical, og:url, og:image, enlaces internos y externos.
4. Verificar imágenes, fuentes y rutas directas en hosting.
5. Ejecutar npm run lint, npm run build y npm audit.
6. Revisar que no se hayan alterado colores, tipografías, espaciado, botones, cards ni layout aprobado sin decisión explícita.

## Orden y bloqueos

La Fase 2 está implementada y comprobada localmente. El siguiente cierre requiere publicar y verificar la Fase 1 en hosting. La Fase 3 depende de Canva, el Word y datos confirmados por la clínica. En la Fase 4 quedan la revisión de React Router mayor, imágenes y rendimiento.

Falta obtener: acceso o confirmación de DNS, URL pública de Azure si sigue activo, URL final de Canva, Word original, recursos, ubicaciones exactas, convocatorias de talleres y validación profesional de textos legales y clínicos.

## Registro de verificación — 7 de septiembre de 2026

- `npm run lint`: pasa.
- `npm run build`: pasa, Vite 7.3.6; `dist` contiene el script solicitado y la configuración de Azure.
- `npm audit`: 2 moderadas, 0 altas y 0 críticas. El comando termina con estado de advertencia por los avisos restantes; no se declara una auditoría limpia.
- `npm run build` también genera HTML inicial por ruta, `404.html` y `sitemap.xml`, y comprueba metadatos, enlaces, assets, datos estructurados y el identificador de PsicoCEO.
- Versión compilada servida en `http://127.0.0.1:4173/`: las 15 páginas conocidas renderizan con un H1, canonical/og:url correctos, exactamente un script con el identificador solicitado y sin enlaces provisionales ni nuevas pestañas sin protección.
- Transición Aviso Legal → Inicio: canonical cambia al dominio y ruta de Inicio; ya no conserva la URL anterior.
- A 320 px, Inicio, Contacto, Sobre mí, Recursos y Psicositas no desbordan horizontalmente. Portada comprobada además a 360, 390, 768 y 1024 px, sin desbordamiento.
- Menú a 320 px: Enter abre y enfoca Inicio; Tab avanza a Servicios; Escape cierra y devuelve el foco al botón.
- Inicio → Contacto desde el pie: Contacto queda en scroll 0. Atrás recupera exactamente los 3483 px de lectura de Inicio en la reproducción; Adelante vuelve a Contacto.
- FAQ: Enter expande la pregunta elegida y oculta el resto; los paneles están relacionados con sus botones. Saltar al contenido enfoca `main-content`.
- `/no-existe`: muestra Página no encontrada con `noindex, follow`; Volver al inicio restablece `index, follow` y la URL correcta. Es una página 404 de la aplicación; el estado HTTP del hosting requiere comprobación tras desplegar.
- Psicositas: botón real hacia WhatsApp y explicación de disponibilidad. Recursos: seis estados Próximamente. Privacidad: aviso factual de PsicoCEO visible.
- Sin errores de JavaScript capturados en el recorrido del navegador.
- La comprobación no incluye recepción de eventos en el panel PsicoCEO ni reservas/envíos reales. No se desplegó, no se hizo commit ni push.
