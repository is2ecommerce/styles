# Sistema de Estilos CSS Genérico

Este directorio contiene la versión genérica del sistema de estilos que puede ser usado en cualquier proyecto web, no específicamente en Angular.

## 📁 Archivos incluidos:

- `variables.css` - Variables CSS usando custom properties
- `components.css` - Componentes básicos de UI
- `ejemplo.html` - Ejemplo de uso práctico

## 🚀 Cómo usar:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="variables.css">
    <link rel="stylesheet" href="components.css">
</head>
<body>
    <!-- Usar las clases predefinidas -->
    <button class="btn btn-primary">Mi Botón</button>
    <div class="product-card">
        <h3 class="product-title">Producto</h3>
        <p class="product-price">$99.99</p>
    </div>
</body>
</html>
```

## 📝 Nota:

Para proyectos de **Angular**, usa los archivos SCSS en la carpeta raíz (`_variables.scss`, `_components.scss`) que están optimizados específicamente para ese framework con mixins avanzados y mejor integración.

👉 **Ver el README.md principal** para documentación completa de Angular.