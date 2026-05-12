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

Cuando se defina hosting, revisar estos headers:

- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`

No se agrega una configuración concreta porque el proveedor de hosting no está definido en el repositorio.
