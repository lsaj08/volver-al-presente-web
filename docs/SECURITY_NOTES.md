# Notas de seguridad frontend

## Enlaces externos

- Todo enlace externo con `target="_blank"` debe incluir `rel="noopener noreferrer"`.
- WhatsApp debe generarse con `buildWhatsAppLink()` en `src/data/externalLinks.js`.
- Los mensajes incluidos en URLs deben codificarse con `encodeURIComponent`.
- Enlaces a agenda, mapas, teléfono y catálogo deben mantenerse centralizados.

## Variables de entorno

- No guardar secretos, tokens, API keys privadas ni credenciales en frontend.
- Vite solo expone variables con prefijo `VITE_`.
- Usar `.env.example` para documentar variables públicas.
- `VITE_CANVA_CATALOG_URL` es pública y solo debe contener una URL de catálogo, nunca un token privado.

## HTML dinámico

- No usar `dangerouslySetInnerHTML` salvo justificación técnica clara.
- No usar `eval`.
- No construir HTML con valores de usuario.

## Formularios e inputs

Actualmente el sitio no tiene formularios con envío de datos.

Si se agregan formularios:

- Validar campos requeridos.
- No insertar valores del usuario como HTML.
- Codificar valores usados en URLs.
- Evitar registrar datos personales en consola.

## Dependencias

- Ejecutar `npm audit` antes de cerrar cambios.
- No usar `npm audit fix --force` automáticamente.
- Si una vulnerabilidad requiere un cambio mayor, documentar el riesgo y la recomendación.

## Headers recomendados para hosting

El repositorio incluye un flujo de Azure Static Web Apps. `public/staticwebapp.config.json` se copia a `dist` e incluye fallback para React Router, `X-Content-Type-Options: nosniff` y `Referrer-Policy: strict-origin-when-cross-origin`.

Queda pendiente revisar en el despliegue público:

- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`

No se agregó una CSP restrictiva sin comprobar las fuentes, estilos y solicitudes del seguimiento externo. La configuración de Azure está preparada en el repositorio; no se desplegó durante este cambio.

## Seguimiento PsicoCEO

- Instalado por solicitud expresa en `index.html`, una sola vez antes de `</body>`, con `defer`.
- Fuente: `https://api.psicoceo.com/js/external-tracking.js`.
- El identificador `data-tracking-id` es el identificador público del fragmento proporcionado por el usuario.
- El script consultado el 7 de septiembre de 2026 registra la carga inicial, tiempo de navegación e identificadores de sesión. También incluye captura de formularios; actualmente no hay formularios propios en el sitio. Revisar ese comportamiento si se incorporan.
- No se encontró seguimiento de `pushState`/`popstate` en esa versión del script. No se agregan eventos manuales ni se reinicializa por cada ruta para evitar duplicados. Queda pendiente confirmar con PsicoCEO cómo medir navegación interna de una SPA y verificar recepción en su panel.
- Las visitas locales de verificación pueden aparecer como tráfico de prueba. No se enviaron formularios ni datos de pacientes.
- El widget de agenda de Heredia se carga solo al pulsar Agendar. Usa el iframe y el script oficiales de PsicoCEO proporcionados por la propietaria; la recepción y configuración de citas deben validarse en su panel.
- La página de privacidad informa del seguimiento. La revisión completa de las prácticas y del texto legal sigue pendiente.

## Dependencias revisadas — 7 de septiembre de 2026

Se aplicó `npm audit fix` sin `--force`: Vite 7.3.6 y React Router DOM 6.30.6, dentro de los rangos existentes. El resultado baja de 12 a 2 avisos moderados; no quedan altos ni críticos.

Los avisos restantes afectan a `react-router` y `react-router-dom`: redirecciones mediante barras invertidas y deserialización en hidratación SSR. La app utiliza destinos internos definidos en código, sin SSR ni destinos de navegación suministrados por usuarios. Eso limita la exposición de los flujos actuales, pero no elimina los avisos. npm propone React Router 7.18.3 mediante actualización mayor; se deja para una migración y verificación específicas.
