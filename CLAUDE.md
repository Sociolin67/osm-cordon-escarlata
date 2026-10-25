# monitorsecreto-scarletcord.es — instrucciones para Claude

Web estática bilingüe (ES/EN) del Distrito de España de la Orden del Monitor Secreto y de la Orden del Cordón Escarlata, publicada con GitHub Pages desde la rama `main`. Para cualquier tarea en este repositorio, cargar la skill **osm-cordon-escarlata-web**, que contiene el flujo completo, la identidad visual y las normas de traducción.

## Reglas fijas

- Trabajar siempre sobre la versión actual del repositorio.
- Todas las páginas están en la raíz; la gemela inglesa lleva el sufijo `-en.html`. Todo cambio se hace en las dos versiones a la vez.
- Un archivo cada vez: propuesta → vista previa → **confirmación expresa** → commit.
- Este repositorio es **público**: solo se sube lo autorizado para publicar. Nada de material interno, glosarios de trabajo ni datos personales (NIF, domicilios particulares).
- No tocar `CNAME` ni la etiqueta `google-site-verification` de `index.html` / `index-en.html`.

## Lengua

- La calidad ES/EN es prioritaria. Consultar el glosario aprobado antes de traducir términos rituales y usar una única traducción por término.
- Ortografía española (tildes, eñes) también en las páginas inglesas.
- «degrees» en el Monitor Secreto; «grades» en el Cordón Escarlata. «Crónicas» = «Reports».
- Crónicas siempre en pasado. Sin fotos de hermanos salvo autorización expresa.
- No usar nunca el término «expatriados».

## Diseño

- Monitor Secreto: granate y oro. Cordón Escarlata: escarlata. Institucional: azul. Sin morado.
- Texto dorado sobre fondo claro: `--oro-oscuro` (#8C5F1E). Solo modo claro.
- Tipografías: Cinzel (títulos) y Cormorant Garamond (texto). Un `h1` por página.

## Piezas que no se rompen

- Formulario de contacto (FormSubmit) con casilla de privacidad; no cambiar el destinatario.
- GoatCounter (`monitorsecreto`) en todas las páginas, en ambos idiomas.
- Página nueva: `canonical`, `hreflang` es/en/x-default, `description`, Open Graph, `sitemap.xml` y lista `BASICOS` del service worker.
- Al cambiar `estilos.css`, subir `?v=N` en todas las páginas; al cambiar archivos cacheados, subir `VERSION` (`osm-osc-vN`) en `service-worker.js`.
- Vídeos solo con `youtube-nocookie.com`.

## Validación antes de publicar

- `npx -y html-validate@8 *.html`
- Enlaces e imágenes existentes, con `width`/`height`.
- Paridad ES/EN, contraste AA y vista en móvil (390 px) sin desbordes.
