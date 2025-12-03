# Celia - Catálogo de Velas y Artesanías

Catálogo web simple para mostrar productos y contactar por WhatsApp.

## 🚀 Instalación y Uso

1. Instalar dependencias:
```bash
npm install
```

2. Editar productos:
   - Abre `src/data/products.js`
   - Modifica los productos, precios, imágenes y número de WhatsApp

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
```

## 📦 Desplegar en Netlify

1. Sube el proyecto a GitHub
2. Ve a [Netlify](https://www.netlify.com/)
3. Conecta tu repositorio
4. Configuración de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. ¡Listo! Tu sitio estará en línea

## 📝 Configurar WhatsApp

En `src/data/products.js`, cambia el número en `whatsapp`:
- Formato: `5491112345678` (código de país + número sin + ni espacios)
- Ejemplo Argentina: `5491112345678` (54 = código país, 9 = celular, 11 = área, resto = número)

## 🎨 Personalizar

- **Colores**: Edita los colores en `src/App.css` y `src/components/ProductCard.css`
- **Logo**: Reemplaza `/assets/logo celia.jpg` con tu logo
- **Productos**: Agrega/edita productos en `src/data/products.js`

