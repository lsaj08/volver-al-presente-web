# AGENTS.md

## Descripción del proyecto

Volver al Presente Mobile es una aplicación React Native para la marca profesional de Marcela Zamora, psicóloga. Debe sentirse cálida, profesional, cercana y mobile-first.

## Stack oficial permitido

- Expo
- React Native
- React Navigation
- JavaScript con componentes funcionales
- `StyleSheet` y objetos de estilo de React Native
- Fuentes Montserrat y Atma mediante Expo Font

## Tecnologías que NO deben usarse

- React DOM
- React Router DOM
- Vite
- Next.js
- HTML o etiquetas DOM
- CSS, CSS Modules o Tailwind web
- `window`, `document` o `localStorage`

## Estructura del proyecto

```text
src/
  App.js
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

## Convenciones de nombres

- Pantallas: `HomeScreen.js`, `ServicesScreen.js`.
- Componentes reutilizables: PascalCase.
- Archivos de datos: camelCase descriptivo.
- Constantes de tema: camelCase exportado desde `src/theme`.

## Convenciones de componentes

- Usar componentes de React Native: `View`, `Text`, `Image`, `Pressable`, `ScrollView`, `FlatList`, `SafeAreaView`.
- No usar `div`, `span`, `p`, `h1`, `button`, `img` ni atributos web como `className`.
- Mantener componentes pequeños y reutilizables.
- Poner pantallas completas en `src/screens` y piezas reutilizables en `src/components`.

## Convenciones de estilos

- Usar `StyleSheet.create`.
- Centralizar colores en `src/theme/colors.js`.
- Centralizar tipografías en `src/theme/typography.js`.
- Centralizar espaciado en `src/theme/spacing.js`.
- No hardcodear colores de marca si ya existen en el theme.

## Convenciones para navegación

- Usar React Navigation desde `src/navigation`.
- No usar rutas web ni `react-router-dom`.
- Para agregar una pantalla principal, crearla en `src/screens` y registrarla en `src/navigation/AppNavigator.js`.

## Convenciones para contenido

- Mantener textos editables y listados en `src/data`.
- Evitar textos largos quemados directamente en componentes cuando puedan vivir como datos.
- Respetar un tono cálido, profesional, claro y clínicamente responsable.

## Cómo correr el proyecto

```bash
npm install
npm run start
npm run android
npm run ios
```

## Cómo validar cambios

```bash
npm run lint
```

## Checklist antes de hacer commit

- No hay imports desde `react-dom`, `react-router-dom` o Vite.
- No hay archivos `.css` usados por la app.
- No hay etiquetas HTML.
- La navegación sigue en React Navigation.
- Los estilos usan theme y `StyleSheet`.
- Los textos largos están en `src/data` cuando aplica.
- `npm run lint` pasa.

## Reglas para mantener React Native puro

- Cualquier nueva dependencia debe ser compatible con Android e iOS.
- Si se necesita almacenamiento local, usar AsyncStorage u otra librería React Native compatible.
- Si se necesita abrir enlaces, usar `Linking`.
- No inventar backend ni cambiar el propósito de la app.
- No dejar código muerto, imports rotos o pantallas duplicadas.
