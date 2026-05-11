# Volver al Presente Mobile

Aplicación React Native mobile-first para la marca profesional de Marcela Zamora, psicóloga. La app está organizada con Expo, React Navigation y una arquitectura limpia para seguir trabajando con Codex sin arrastrar dependencias web.

## Stack oficial

- Expo
- React Native
- React Navigation
- JavaScript con componentes funcionales
- `StyleSheet` y objetos de estilo compatibles con React Native

No se usa Vite, Next.js, React DOM, React Router DOM, HTML ni CSS web.

## Instalación

```bash
npm install
```

## Correr el proyecto

```bash
npm run start
npm run android
npm run ios
```

`npm run ios` requiere macOS con Xcode o un entorno Expo compatible.

## Validación

```bash
npm run lint
```

Antes de hacer commit, revisá que:

- No existan imports desde `react-dom`, `react-router-dom` o archivos `.css`.
- No se usen etiquetas HTML como `div`, `span`, `p`, `h1`, `button` o `img`.
- Los estilos nuevos usen `StyleSheet` o theme centralizado.
- Los textos largos vivan en `src/data` cuando sea razonable.
- La navegación siga usando React Navigation.

## Estructura

```text
src/
  assets/
  components/
    cards/
    layout/
    ui/
  data/
  navigation/
  screens/
  theme/
  utils/
```

## Notas de migración

El proyecto original era una app web con Vite, React DOM, React Router DOM, CSS y páginas DOM. Se migró a Expo porque el repositorio no tenía carpetas nativas Android/iOS y Expo permite mantener una app React Native pura, portable y fácil de ejecutar sin agregar complejidad nativa innecesaria.
