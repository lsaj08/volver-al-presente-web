# Volver al Presente

Aplicación React Native multiplataforma para la marca profesional de Marcela Zamora, psicóloga. Usa una sola base de componentes React Native para web, Android e iOS, con Expo y React Navigation.

## Stack oficial

- Expo
- React Native
- React Native Web
- React Navigation
- Expo Fonts
- JavaScript con componentes funcionales
- `StyleSheet`, `useWindowDimensions` y tokens de diseño centralizados

No hay app web separada con Vite, Next.js o React Router DOM.

## Instalar

```bash
npm install
```

## Correr

```bash
npm run start
npm run web
npm run android
npm run ios
```

`npm run ios` requiere macOS con Xcode o un entorno Expo compatible.

## Validar

```bash
npm run lint
npx expo install --check
npx expo export --platform web --output-dir .expo-export-web-test
npx expo export --platform android --output-dir .expo-export-android-test
```

## Estructura

```text
src/
  App.js
  assets/
  components/
    cards/
    layout/
    ui/
  data/
    faqs.js
    navigation.js
    services.js
    siteContent.js
  hooks/
  navigation/
  screens/
  theme/
  utils/
```

## Editar contenido

El contenido principal viene del Word original `Información para Página Web.docx`. Los textos editables viven en:

- `src/data/siteContent.js`: inicio, sobre mí, forma de trabajo, misión, visión, valores, talleres y Psi-Cositas.
- `src/data/services.js`: servicios, metáforas, criterios, trabajo terapéutico, FAQs y CTAs.
- `src/data/faqs.js`: preguntas generales.
- `src/data/navigation.js`: navegación principal.

No agregues textos clínicos nuevos si ya existen en el documento Word. Si se resume, conservar sentido, tono y propuesta de valor.

## Editar diseño

- Colores: `src/theme/colors.js`
- Tipografías: `src/theme/typography.js`
- Espaciado: `src/theme/spacing.js`
- Breakpoints: `src/theme/breakpoints.js`
- Responsive: `src/hooks/useResponsive.js`

## Navegación

La navegación usa React Navigation:

- Tabs principales: Inicio, Servicios, Psi-Cositas y Talleres.
- Stack para detalle de servicio.
- Linking web para `/`, `/servicios`, `/psi-cositas`, `/talleres` y `/servicios/:slug`.

## Checklist antes de commit

- `npm run lint` pasa.
- `npx expo install --check` pasa.
- No hay `react-router-dom`, Vite, Next.js ni CSS global como base visual.
- No hay etiquetas HTML en pantallas/componentes.
- Los CTAs usan `Linking` mediante `src/utils/links.js`.
- Las pantallas se ven razonables en móvil y web.
