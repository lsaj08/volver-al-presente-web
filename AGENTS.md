# AGENTS.md

## Propósito

Este repositorio contiene el sitio web profesional de Marcela Zamora, psicóloga. La prioridad es mantener estabilidad, conservar el estilo visual existente y actualizar contenido desde el documento Word original del proyecto.

## Stack real del proyecto

- React
- Vite
- React Router DOM
- CSS propio en `src/styles`

Vite forma parte del funcionamiento web actual y no debe eliminarse sin una razón técnica concreta y aprobada.

## Regla principal

No rediseñar. No cambiar identidad visual, layout, spacing, colores, tipografías, botones, cards ni navegación visual salvo solicitud explícita.

## Fuente principal de contenido

El contenido principal viene de `Información para Página Web.docx`.

Usar ese Word para:

- Sobre mí
- Volver al Presente
- Forma de trabajo
- Primera sesión
- Misión y visión
- Valores
- Servicios
- FAQs
- CTAs
- Metadescripciones sugeridas

No inventar textos clínicos si ya existen en el Word. Se permite resumir para tarjetas o bloques visuales, manteniendo sentido, tono e intención clínica.

## Estructura relevante

```text
src/
  App.jsx
  components/
  data/content.js
  hooks/
  pages/
  styles/
```

## Convenciones

- Mantener componentes React web existentes.
- Mantener CSS existente.
- Mantener React Router DOM para navegación web.
- No introducir Expo, React Native o React Native Web como reemplazo del stack actual sin solicitud explícita.
- No eliminar compatibilidad web.
- Si en el futuro existe una parte móvil real, no eliminarla sin revisar su propósito.

## Cómo correr

```bash
npm install
npm run dev
```

## Validar

```bash
npm run lint
npm run build
```

## Checklist antes de commit

- El sitio corre con Vite.
- No hubo rediseños visuales no solicitados.
- Los cambios de contenido respetan el Word original.
- No se agregaron dependencias pesadas innecesarias.
- No se eliminaron archivos de estilo existentes.
