# Estado del proyecto después del traslado

Revisión: 6 de septiembre de 2026.

Actualización del 7 de septiembre: ya hay correcciones locales y seguimiento PsicoCEO instalado. Consultar [PLAN_MEJORAS.md](PLAN_MEJORAS.md) para el avance y las comprobaciones actuales. Los resultados originales que siguen corresponden a la revisión anterior a esos cambios.

Actualización: la revisión posterior en navegador y el plan propuesto están en [AUDITORIA_PROYECTO.md](AUDITORIA_PROYECTO.md). Amplían las comprobaciones iniciales de este informe e incluyen fallos de navegación, móvil, metadatos y publicación.

## Base revisada

- Carpeta: `C:\Users\lsaj_\source\GitHub\volver-al-presente-web`.
- Rama: `main`. El árbol de trabajo estaba limpio al comenzar.
- Último commit local: `9a8d384`, del 11 de mayo de 2026, `Centralize external links and document project maintenance`.
- La referencia local `origin/main` coincide con `main`; no se consultó el remoto para comprobar cambios posteriores.
- Dominio público confirmado por la propietaria: `https://psicomarcelazamora.com`. “Volver al Presente” es el nombre comercial de la clínica.
- Stack activo: React, Vite y React Router DOM, con CSS propio.
- No se encontraron rutas absolutas a la carpeta anterior en el código y la configuración revisados.
- Existe una carpeta residual `.expo`, pero Expo no figura en las dependencias ni en los comandos actuales.

## Comprobaciones realizadas

| Comprobación | Resultado |
| --- | --- |
| `npm run lint` | Pasa. |
| `npm run build` | Pasa; genera `dist` con Vite 7.3.3. |
| Servidor de desarrollo | Inicia en `http://127.0.0.1:5173/`. |
| HTTP local `/` y `/sobre-mi` | Ambas rutas responden 200; la portada contiene el contenedor de React. |
| `npm audit` | Reporta 12 dependencias afectadas: 6 altas, 4 moderadas y 2 bajas. |
| `npm audit --omit=dev` | Reporta 3 dependencias afectadas, todas moderadas, de la familia React Router. |

Estas pruebas confirman compilación e inicio local. No equivalen a una revisión visual en navegador ni a validar el despliegue público. No se pudo determinar la causa del fallo en la carpeta anterior.

## Estado del plan anterior

No se encontró un plan de trabajo, roadmap o carpeta `.planning` en esta copia, ni archivos de planificación en la búsqueda del historial Git disponible. Tampoco se localizó una tarea anterior relacionada en las tareas recientes consultadas ni en las archivadas disponibles.

Por ello, **no se puede confirmar que el plan anterior esté actualizado**. La lista siguiente registra pendientes derivados de esta revisión; no sustituye los acuerdos del plan original.

## Implementado y pendientes observables

| Área | Evidencia y estado |
| --- | --- |
| Recuperación del stack web | Implementada: comandos y compilación usan Vite; las rutas usan React Router DOM. |
| Contenido centralizado | Existe en `src/data/content.js`, incluidas secciones institucionales y servicios. Falta el Word `Información para Página Web.docx` en esta copia para verificar fidelidad. |
| Enlaces de contacto | Existe `src/data/externalLinks.js` y `buildWhatsAppLink()` codifica el mensaje. |
| Psicositas | `CANVA_CATALOG_URL` conserva `PENDIENTE_AGREGAR_LINK_DE_CANVA`. La página mantiene el botón activo y muestra una instrucción técnica al visitante cuando falta la URL. No se verificó la variable del hosting. |
| Recursos | Hay tarjetas descriptivas e imágenes generadas como marcadores visuales; los objetos y tarjetas no ofrecen archivos, enlaces de descarga ni lectura del recurso completo. |
| Seguridad de dependencias | Pendiente revisar y corregir los hallazgos del audit, evaluando cambios compatibles y su aplicabilidad. No se actualizaron dependencias ni el lockfile. |
| Hosting | Existe un flujo de Azure Static Web Apps con salida `dist`, pero `docs/SECURITY_NOTES.md` dice que el proveedor no está definido: esa documentación está desactualizada respecto al repositorio. |
| Rutas en hosting | No hay `staticwebapp.config.json` en los archivos revisados. Pendiente comprobar apertura directa y recarga de rutas internas en Azure y determinar si hace falta configurar fallback. |

## Orden sugerido para retomar

1. Recuperar el plan original y el Word; contrastar los acuerdos con esta base antes de dar fases por terminadas.
2. Revisar los avisos de dependencias y aplicar las correcciones apropiadas, conservando el stack actual.
3. Completar el catálogo y los recursos con los materiales y URLs aprobados.
4. Alinear la documentación del hosting con el flujo existente y verificar rutas internas del despliegue.
5. Validar navegación, enlaces y presentación en escritorio y móvil, conservando el diseño aprobado.

En esta revisión solo se agregó este informe; no se modificaron código, estilos, configuración ni dependencias.
