# Notas internas del proyecto

## Estructura general

- `src/App.jsx`: define las rutas con React Router DOM.
- `src/components`: contiene componentes reutilizables como header, footer, FAQ y detalle de servicios.
- `src/pages`: contiene las páginas principales del sitio.
- `src/data/content.js`: concentra el contenido oficial tomado del Word original.
- `src/data/externalLinks.js`: concentra enlaces externos y helpers de WhatsApp.
- `src/styles`: contiene el CSS del diseño aprobado.

## Dónde editar contenido

El contenido principal debe venir del Word `Información para Página Web.docx`.

- Servicios y áreas de acompañamiento: `SERVICE_AREAS` en `src/data/content.js`.
- Sobre mí, misión, visión y valores: `src/data/content.js`.
- Preguntas frecuentes generales: `src/components/FAQ.jsx`.
- Talleres visibles: `WORKSHOPS` en `src/pages/Talleres.jsx`.
- Recursos digitales: `RESOURCES` en `src/pages/Recursos.jsx`.

## Dónde editar estilos

Los estilos viven en `src/styles`.

No cambiar paleta, tipografías, cards, botones ni layout visual sin solicitud explícita. Si se agrega una regla, revisar primero si ya existe una clase reutilizable.

## Dónde editar rutas

- Agregar la ruta en `src/App.jsx`.
- Agregar el enlace visible en `src/components/Header.jsx` solo si debe aparecer en el menú principal.
- Usar `Link` o `NavLink` de `react-router-dom` para navegación interna.

## Cómo agregar un recurso nuevo

Agregar un objeto a `RESOURCES` en `src/pages/Recursos.jsx`.

Mantenerlo breve, orientado a contenido digital o informativo. No mezclar aquí productos físicos.

## Cómo agregar una psicosita nueva

La página `src/pages/PsiCositas.jsx` está reservada para materiales físicos o catálogo.

El link del catálogo debe configurarse en `src/data/content.js` o con `VITE_CANVA_CATALOG_URL`. Mientras no exista URL real, mantener documentado el placeholder.

## Cómo agregar un taller nuevo

Agregar un objeto a `WORKSHOPS` en `src/pages/Talleres.jsx` solo si el taller debe mostrarse públicamente.

Si un taller se conserva para futuro, dejarlo fuera de la lista visible o documentarlo como pendiente.

## Checklist antes de subir cambios

- El sitio se ve igual visualmente.
- No se cambió el stack Vite + React.
- Los textos clínicos respetan el Word original.
- No hay `console.log` innecesarios.
- Los enlaces externos con nueva pestaña usan `noopener noreferrer`.
- Los mensajes dinámicos de WhatsApp usan `buildWhatsAppLink()`.
- Se ejecutó `npm run lint`.
- Se ejecutó `npm run build`.
- Se ejecutó `npm audit`.
