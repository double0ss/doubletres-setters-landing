# DoubleTres - Setters Landing (Astro)

Proyecto de ejemplo para landings personalizables por setter, listo para abrir en Windsurf (u otro IDE).

## Estructura
- `src/pages/[setter].astro` - ruta dinámica que genera una landing por cada setter definido en `src/data/setters.json`.
- `src/pages/api/send.js` - endpoint POST que envía correos vía SMTP usando nodemailer.
- `src/data/setters.json` - datos de ejemplo (6 setters).
- `public/setters/*` - imágenes de ejemplo para cada setter.
- `public/illustration.svg` - ilustración de fondo.
- `src/styles/global.css` - estilos base.

## Instalación
1. Instala dependencias:
```
npm install
```
2. Copia `.env.example` a `.env` y ajusta las credenciales SMTP:
```
cp .env.example .env
```
3. Ejecuta en modo desarrollo:
```
npm run dev
```
4. Abre `http://localhost:3000` y serás redirigido al primer setter. Las páginas de cada setter están en `/setter/{id}` (ej: `/setter/alex-rodriguez`).

## Notas de seguridad
- Este proyecto incluye un `.env.example`. **No** publiques credenciales reales en repositorios públicos.
- Si usas las credenciales proporcionadas, asegúrate de que estén protegidas en el entorno de despliegue.

