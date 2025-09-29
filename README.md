# Guía de Estilos del E-commerce

## Variables CSS Disponibles

### Paleta de Colores
- `--color-primary`: Color principal de la marca (#1565c0)
- `--color-secondary`: Color secundario (#f06292)
- `--color-success`: Para mensajes de éxito (#43a047)
- `--color-error`: Para mensajes de error (#e53935)
- `--color-warning`: Para advertencias (#ffa000)
- `--color-background`: Color de fondo general (#f4f6fa)
- `--color-text`: Color principal del texto (#282828)

### Tipografía
- `--font-main`: Fuente principal - Montserrat
- `--font-secondary`: Fuente secundaria - Roboto

### Tamaños de Fuente
- `--font-size-title`: Títulos principales (2.25rem)
- `--font-size-subtitle`: Subtítulos (1.5rem)
- `--font-size-base`: Texto base (1rem)
- `--font-size-small`: Texto pequeño (0.875rem)
- `--font-size-large`: Texto grande (1.125rem)

### Espaciado
- `--spacing-xs`: Extra pequeño (0.25rem)
- `--spacing-sm`: Pequeño (0.5rem)
- `--spacing-md`: Mediano (1rem)
- `--spacing-lg`: Grande (1.5rem)
- `--spacing-xl`: Extra grande (2rem)

### Breakpoints Responsive
- `--breakpoint-sm`: 576px (Teléfonos)
- `--breakpoint-md`: 768px (Tablets)
- `--breakpoint-lg`: 992px (Laptops)
- `--breakpoint-xl`: 1200px (Escritorio)

### Efectos y Transiciones
- `--transition-fast`: Transición rápida (0.15s)
- `--transition-normal`: Transición normal (0.3s)
- `--shadow-sm`: Sombra sutil
- `--shadow-md`: Sombra mediana

## Ejemplos de Uso

### Botones
```css
.btn-primary {
  background-color: var(--color-primary);
  font-family: var(--font-main);
  font-size: var(--font-size-base);
}
```

### Títulos
```css
h1 {
  font-family: var(--font-main);
  font-size: var(--font-size-title);
  color: var(--color-text);
}
```

### Mensajes de Estado
```css
.success-message {
  background-color: var(--color-success);
  color: white;
}

.error-message {
  background-color: var(--color-error);
  color: white;
}
```

## Archivos del Sistema

- `styles/variables.css`: Variables CSS centralizadas
- `styles/components.css`: Componentes básicos pre-diseñados

## Cómo Implementar

### 1. Importar en tu HTML
```html
<link rel="stylesheet" href="styles/variables.css">
<link rel="stylesheet" href="styles/components.css">
```

### 2. O importar en tu CSS
```css
@import url('./styles/variables.css');
@import url('./styles/components.css');
```

## Componentes Disponibles

- **Botones**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Cards de productos**: `.product-card`, `.product-title`, `.product-price`
- **Formularios**: `.form-input`
- **Alertas**: `.alert`, `.alert-success`, `.alert-error`, `.alert-warning`
- **Navegación**: `.navbar`, `.nav-link`

## Buenas Prácticas

1. **Siempre usar variables CSS** en lugar de valores hardcodeados
2. **Mantener consistencia** en toda la aplicación
3. **Usar los componentes predefinidos** antes de crear nuevos
4. **Seguir el patrón responsive** con los breakpoints definidos
5. **Actualizar esta documentación** cuando se agreguen nuevas variables
