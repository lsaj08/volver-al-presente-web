# Volver al Presente Web

Sitio web profesional de Marcela Zamora, psicóloga. El proyecto conserva su stack web original con React, Vite y React Router DOM, y mantiene la identidad visual existente mediante los estilos CSS del proyecto.

## Stack real

- React
- Vite
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
```

## Editar contenido

La fuente principal de contenido es el archivo Word original:

`Información para Página Web.docx`

El contenido reutilizable vive en:

- `src/data/content.js`: contacto, textos de Sobre mí, forma de trabajo, primera sesión, misión, visión, valores y servicios.
- `src/pages/SobreMi.jsx`: estructura visual existente de la página Sobre mí, consumiendo contenido desde `content.js`.
- `src/components/ServiceDetailPage.jsx`: estructura visual existente para detalle de servicios, consumiendo `SERVICE_AREAS`.

## Reglas de mantenimiento

- No cambiar colores, tipografías, spacing, botones, cards ni layout salvo que se pida explícitamente.
- No reemplazar Vite si es el stack web activo.
- No convertir el proyecto a React Native/Expo sin una decisión técnica explícita.
- Actualizar contenido desde el Word sin cambiar el tono clínico ni la propuesta de valor.
