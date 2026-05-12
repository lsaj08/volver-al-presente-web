# AGENTS.md

## Propósito

Volver al Presente es una app/web React Native multiplataforma para Marcela Zamora, psicóloga. Debe funcionar con una sola base para web, Android e iOS, manteniendo un tono cálido, profesional, humano y basado en evidencia.

## Stack oficial permitido

- Expo
- React Native
- React Native Web
- React Navigation
- Expo Fonts
- `StyleSheet`, `Platform`, `useWindowDimensions`
- `Linking` para WhatsApp, agenda, teléfono y enlaces externos

## Plataformas soportadas

- Web
- Android
- iOS

## Regla principal

Una sola base React Native multiplataforma. No crear una app web separada ni duplicar pantallas salvo necesidad técnica clara y documentada.

## Tecnologías prohibidas

- Vite como app principal
- Next.js como app principal
- React Router DOM
- `BrowserRouter`, `Routes`, rutas web de React Router
- HTML como base de componentes: `div`, `span`, `p`, `h1`, `button`, `img`
- CSS global como estrategia visual principal
- `className` como base de estilos
- `document`, `window` o `localStorage` directos

## Estructura

```text
src/
  components/
  data/
  hooks/
  navigation/
  screens/
  theme/
  utils/
```

## Componentes

- Usar `View`, `Text`, `Image`, `Pressable`, `ScrollView`, `FlatList`, `SafeAreaView`.
- Crear piezas reutilizables en `src/components`.
- Mantener pantallas completas en `src/screens`.
- No quemar textos largos en componentes si pueden vivir en `src/data`.

## Estilos

- Usar `StyleSheet.create`.
- Usar tokens de `src/theme`.
- No hardcodear colores oficiales fuera del theme.
- Cards con radio de 8 px salvo razón clara.

## Navegación

- Usar React Navigation.
- Mantener rutas web mediante `linking` en `src/navigation/AppNavigator.js`.
- No usar `react-router-dom`.
- Para agregar un servicio, actualizar `src/data/services.js`; la ruta de detalle sale del `slug`.

## Contenido

- Fuente principal: `Información para Página Web.docx`.
- No inventar textos clínicos si el texto ya existe en el Word.
- Se puede resumir para tarjetas, pero sin cambiar sentido clínico ni tono.
- Mantener CTAs orientados a WhatsApp o agenda.

## Responsive

- Usar `src/hooks/useResponsive.js`.
- En web, permitir layouts más amplios con grillas.
- En móvil, priorizar scroll, legibilidad y botones cómodos.

## Correr

```bash
npm install
npm run web
npm run android
npm run ios
```

## Validar

```bash
npm run lint
npx expo install --check
```

## Checklist antes de commit

- Una sola base React Native.
- Web, Android e iOS siguen soportados.
- No hay HTML ni CSS web como base.
- No hay React Router DOM.
- Los CTAs usan `src/utils/links.js`.
- El contenido largo vive en `src/data`.
- El responsive se revisó en móvil y web.
