# Volver al Presente Web

Sitio web profesional de Marcela Zamora, psicóloga. El proyecto conserva su stack web original con React, Vite y React Router DOM, y mantiene la identidad visual existente mediante los estilos CSS del proyecto.

## Stack real

- React
- Vite
- React DOM
- React Router DOM
- CSS propio en `src/styles`

No se debe migrar ni rediseñar la interfaz sin una solicitud explícita. El objetivo principal de mantenimiento es conservar estabilidad, estilo original y contenido fiel al documento Word base.

## Instalar

```bash
npm install
```

## Correr en web

```bash
npm run dev
```

## Build y validación

```bash
npm run lint
npm run build
npm audit
```

## Editar contenido

La fuente principal de contenido es el archivo Word original:

`Información para Página Web.docx`

El contenido reutilizable vive en:

- `src/data/content.js`: contacto, textos de Sobre mí, forma de trabajo, primera sesión, misión, visión, valores y servicios.
- `src/data/externalLinks.js`: enlaces externos, WhatsApp, agenda, teléfono y mapas.
- `src/pages/SobreMi.jsx`: estructura visual existente de la página Sobre mí, consumiendo contenido desde `content.js`.
- `src/components/ServiceDetailPage.jsx`: estructura visual existente para detalle de servicios, consumiendo `SERVICE_AREAS`.

## Editar rutas y pestañas

- Rutas principales: `src/App.jsx`.
- Menú visible: `src/components/Header.jsx`.
- Recursos digitales: `src/pages/Recursos.jsx`.
- Psicositas físicas o catálogo: `src/pages/PsiCositas.jsx`.
- Talleres visibles: `src/pages/Talleres.jsx`.

## Variables públicas

El catálogo de Canva puede configurarse con una variable pública de Vite:

```bash
VITE_CANVA_CATALOG_URL=https://...
```

No incluir secretos, tokens ni claves privadas en variables `VITE_`, porque se exponen al navegador.

## Reglas de mantenimiento

- No cambiar colores, tipografías, spacing, botones, cards ni layout salvo que se pida explícitamente.
- No reemplazar Vite si es el stack web activo.
- No convertir el proyecto a React Native/Expo sin una decisión técnica explícita.
- Actualizar contenido desde el Word sin cambiar el tono clínico ni la propuesta de valor.
- Mantener enlaces externos con `rel="noopener noreferrer"` cuando abran en nueva pestaña.
