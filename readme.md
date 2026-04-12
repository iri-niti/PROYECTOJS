# 🪶 Aves de Mallorca — Guía de Ornitología

Práctica de CSS y JavaScript — Interfaz web interactiva sobre aves de la isla de Mallorca.

---

## 📁 Estructura del proyecto

```
PROYECTOJS/
├── index.html    → Estructura HTML de la página
├── styles.css    → Todos los estilos visuales
├── script.js     → Datos mockeados y lógica de interactividad
├── mapa.svg      → Mapa SVG de Mallorca creado con Inkscape
└── README.md     → Esta documentación
```

---

## 💡 Idea general del proyecto

El proyecto consiste en una pequeña guía general de ortnitología interactiva sobre las principales aves que se pueden visualizar en Mallorca.
Está dividida en tres secciones: 
1. **Mapa** — Un mapa SVG de la isla con 5 zonas clicables. Al hacer clic en una zona se muestra un panel lateral con las aves que habitan esa área y se pueden escuchar sus cantos.
2. **Aves** — Catálogo completo de 15 especies con tarjeta visual, descripción, nombre científico, hábitat. Incluye filtros por zona.

---

## 🏗️ Estructura básica del HTML

- **`<header>`** — Título y subtítulo de la página.
- **`<nav>`** — Barra de navegación sticky con scroll suave a cada sección.
- **`<section id="sec-mapa">`** — Mapa SVG + panel de información de zona.
- **`<section id="sec-aus">`** — Filtros + rejilla de tarjetas de aves (generada con JS).
- **`<footer>`** — Información del proyecto.

---

## 🗺️ El mapa SVG

El mapa de Mallorca ha sido creado desde cero con **Inkscape**, un programa de diseño vectorial gratuito. Se han dibujado y delimitado 5 zonas geográficas:

- **Tramuntana** — Sierra del noroeste
- **S'Albufera** — Zona húmeda del norte
- **Es Pla** — Llanura central
- **Llevant** — Costa este
- **Migjorn** — Costa sur y salinas

Cada zona es un `<path>` SVG al que se le ha añadido `class="zone-area"` y `data-zone="nombrezona"` para que JavaScript pueda detectar los clics.

---

## 🗃️ Datos mockeados

Todos los datos están declarados en `script.js` como objetos y arrays de JavaScript. No se utiliza ninguna API externa.

- **`zones`** — Objeto con 5 zonas: nombre, descripción, color y lista de aves.
- **`birds`** — Objeto con 15 aves (3 por zona): nombre, nombre científico, emoji, zona, descripción y hábitat. La información de las aves ha sido buscada en diversas fuentes de internet y resumida por la IA.
- Los datos de rutas han sido eliminados del proyecto final.

---

## 🎨 Principales decisiones de diseño

- **Paleta natural y suave**: cremas, verdes, cielos y tierras. Sin colores estridentes.
- **Tipografía**: *Playfair Display* para títulos y *Raleway* para textos, cargadas desde Google Fonts.
- **Mapa SVG propio**: dibujado a mano con Inkscape, con zonas delimitadas y etiquetas de texto incluidas.
- **Tamaños en píxeles**: para mayor claridad y control, la mayoría de medidas del CSS están en `px` en vez de `rem`.
- **Sonidos ocultos**: la funcionalidad de audio está desactivada visualmente con `display: none` en CSS, manteniendo el código JS intacto para no romper el funcionamiento.
- **Rutas eliminadas**: se decidió no incluir la sección de rutas ornitológicas para ajustar el proyecto al tiempo disponible.

---

## ⚙️ Explicación del código y funcionalidades

### `styles.css`
- Variables CSS (`:root`) para toda la paleta de colores.
- Grid CSS para el layout del mapa y la rejilla de tarjetas.
- Animación `@keyframes float` para el emoji de las tarjetas.
- Nav sticky con `position: sticky; top: 0`.
- `display: none` en `.btn-snd` y `.btn-snd-sm` para ocultar los botones de sonido.

### `script.js`
| Función | Descripción |
|---|---|
| `renderBirds(filter)` | Crea dinámicamente las tarjetas de aves en el DOM. |
| `selectZone(zoneId)` | Gestiona el clic en el mapa: activa la zona y muestra el panel lateral con sus aves. |
| `filterBirds(filter)` | Muestra u oculta tarjetas según la zona seleccionada. |
| `DOMContentLoaded` | Inicializa todo: renderiza el contenido y asigna los event listeners. |

### Manipulación del DOM
- Las tarjetas de aves no están en el HTML, se generan con JavaScript mediante `createElement` e `innerHTML`.
- Los event listeners se asignan con `addEventListener`.
- El scroll suave usa `scrollIntoView({ behavior: 'smooth' })`.

---

## 🤖 Uso de IA

Este proyecto ha sido desarrollado con ayuda de **Copilot y Gemini** como herramienta de guía y apoyo durante todo el proceso.

**Para qué se ha utilizado:**
- Guia para los pasos a seguir en el desarrollo del proyecto.
- Referencia en la estructura de cada parte.
- En situaciones de duda en la forma de realizar alguna parte con un objeto en concreto, la IA ha guiado en el código a utilizar. 
- Generación del código de JS.
- Resolución de dudas y errores paso a paso durante el desarrollo.


**Cómo se ha trabajado con la IA:**
El objetivo principal ha sido entender el código, no copiarlo. Se ha usado la IA como guía para ir probando cada cambio de forma individual, comprendiendo qué hace cada parte antes de aplicarla, y modificarla si no se ha comprendido.
La parte de datos mockeados (objetos y arrays en JS) se ha entendido y manejado de forma autónoma. 
La parte de manipulación del DOM y eventos en JavaScript ha requerido más apoyo.

**Qué se ha modificado o adaptado:**
- El mapa SVG es completamente original, creado con Inkscape.
- Se han eliminado las rutas ornitológicas.
- Los sonidos se han desactivado visualmente.
- Los estilos CSS se han adaptado con tamaños en píxeles y ajustes propios de diseño.

---

## 🚀 Cómo ejecutar el proyecto

1. Descarga o clona los archivos en una carpeta local.
2. Abre `index.html` en el navegador, o usa la extensión **Live Server** de VS Code.
3. No requiere servidor, compilación ni instalación de dependencias.
