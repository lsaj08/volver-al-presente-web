# AGENTS.md

## Propósito

Este repositorio contiene el sitio web profesional de Marcela Zamora, psicóloga. La prioridad es mantener estabilidad, conservar el estilo visual existente y actualizar contenido desde el documento Word original del proyecto.

## Stack real del proyecto

- React
- Vite
- React DOM
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
  App.jsx                 # rutas React Router
  components/             # piezas reutilizables
  data/content.js         # textos oficiales del proyecto
  data/externalLinks.js   # URLs externas y helpers seguros
  hooks/
  pages/                  # páginas visibles del sitio
  styles/                 # CSS del diseño aprobado
docs/
  INTERNAL_NOTES.md
  SECURITY_NOTES.md
```

## Convenciones de componentes

- Mantener componentes React web existentes.
- No convertir componentes a React Native, Expo o React Native Web.
- Usar JSX web normal solo dentro del stack actual.
- Evitar componentes nuevos si una página existente puede recibir el cambio de forma clara.
- No dejar `console.log` de depuración.

## Convenciones de estilos

- Mantener CSS existente en `src/styles`.
- No cambiar paleta, tipografías, spacing, cards, botones ni layout sin solicitud explícita.
- Si se toca CSS, documentar bloques importantes con comentarios breves en español.
- Evitar reglas duplicadas o contradictorias.

## Convenciones de navegación

- Mantener React Router DOM para navegación web.
- Las rutas viven en `src/App.jsx`.
- Los links visibles del menú viven en `src/components/Header.jsx`.
- No usar Next.js, Expo Router ni otra navegación sin aprobación.

## Convenciones de contenido

- Editar textos reutilizables en `src/data/content.js`.
- Editar URLs externas en `src/data/externalLinks.js` o `src/data/content.js` si son datos base de contacto.
- No quemar textos largos directamente en páginas si pueden vivir en data.
- No inventar contenido clínico si el Word ya contiene el texto.

## Enlaces externos y seguridad

- Todo enlace externo con `target="_blank"` debe usar `rel="noopener noreferrer"`.
- WhatsApp debe generarse con `buildWhatsAppLink()` para codificar el mensaje con `encodeURIComponent`.
- No guardar secretos, tokens ni credenciales en el frontend.
- Variables públicas de Vite deben empezar con `VITE_`.
- No usar `dangerouslySetInnerHTML` ni `eval`.

## Tecnologías que no deben introducirse sin solicitud explícita

- No introducir Expo, React Native o React Native Web como reemplazo del stack actual sin solicitud explícita.
- No introducir Tailwind, Next.js, Astro, CSS-in-JS o librerías pesadas de UI sin justificación aprobada.
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
npm audit
```

## Checklist antes de commit

- El sitio corre con Vite.
- No hubo rediseños visuales no solicitados.
- Los cambios de contenido respetan el Word original.
- Los enlaces externos usan `noopener noreferrer`.
- Los mensajes de WhatsApp se codifican con `buildWhatsAppLink()`.
- No hay secretos en el frontend ni variables privadas con prefijo `VITE_`.
- No se agregaron dependencias pesadas innecesarias.
- No se eliminaron archivos de estilo existentes.
- `npm run lint`, `npm run build` y `npm audit` fueron ejecutados o se documentó por qué no.
