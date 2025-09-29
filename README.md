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

## Buenas Prácticas

1. **Siempre usar variables CSS** en lugar de valores hardcodeados
2. **Mantener consistencia** en toda la aplicación
3. **Actualizar esta documentación** cuando se agreguen nuevas variables
