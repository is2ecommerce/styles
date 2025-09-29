# 🎯 Sistema de Estilos Angular E-commerce

Sistema completo de estilos SCSS optimizado para **proyecto Angular** de e-commerce, con componentes reutilizables, mixins avanzados y diseño responsive.

## 🚀 Inicio Rápido

```bash
# 1. Clona este repositorio en tu proyecto Angular
git clone https://github.com/LauraCD2/styles.git

# 2. Instala SASS si no lo tienes
npm install sass --save-dev

# 3. Configura angular.json
{
  "styles": [
    "src/angular-styles.css",
    "src/styles.scss"
  ]
}

# 4. Importa en tu styles.scss global
@import './variables';
@import './components';
```

## 📁 Estructura del Proyecto

```
styles/                          # ← Repositorio principal ANGULAR
├── 🎯 ARCHIVOS PRINCIPALES ANGULAR:
│   ├── _variables.scss          # Variables SCSS para Angular
│   ├── _components.scss         # Componentes SCSS con mixins
│   └── angular-styles.css       # Estilos globales Angular
├── 📁 examples/                 # Ejemplos de componentes Angular
│   ├── product-card.component.ts
│   └── product-card.component.scss
├── 📁 css-generic/              # Versión CSS genérica (otros proyectos)
│   ├── variables.css            # CSS vanilla
│   ├── components.css           # CSS vanilla
│   ├── ejemplo.html             # Demo HTML con CSS
│   └── README.md               # Documentación CSS específica
├── package.json                 # Configuración NPM
└── README.md                   # Esta documentación
```

## 🎨 Variables SCSS Principales

### Colores

```scss
$color-primary: #1565c0;        // Azul principal
$color-secondary: #f06292;      // Rosa secundario
$color-success: #43a047;        // Verde éxito
$color-error: #e53935;          // Rojo error
$color-warning: #ffa000;        // Amarillo advertencia
$color-background: #f4f6fa;     // Fondo general
$color-text: #282828;           // Texto principal
$color-text-light: #666666;     // Texto secundario
$color-border: #e0e0e0;         // Bordes
$color-white: #ffffff;
$color-black: #000000;

```

### Espaciado

```scss
$spacing-xs: 0.25rem;           // 4px
$spacing-sm: 0.5rem;            // 8px  
$spacing-md: 1rem;              // 16px
$spacing-lg: 1.5rem;            // 24px
$spacing-xl: 2rem;              // 32px
```

### Tipografía

```scss
$font-main: 'Montserrat', Arial, sans-serif;
$font-secondary: 'Roboto', Helvetica, sans-serif;
$font-size-title: 2.25rem;     // 36px
$font-size-subtitle: 1.5rem;   // 24px
$font-size-base: 1rem;         // 16px
$font-size-small: 0.875rem;    // 14px
$font-size-large: 1.125rem;    // 18px
```

### Breakpoints Responsive

```scss
$breakpoint-sm: 576px;          // Teléfonos
$breakpoint-md: 768px;          // Tablets
$breakpoint-lg: 992px;          // Laptops
$breakpoint-xl: 1200px;         // Escritorio
$breakpoint-xxl: 1400px;        // Pantallas grandes
```

## 🧩 Mixins Poderosos

### Botones con Estados

```scss
.mi-boton {
  @include button-style($color-primary);
  // ¡Incluye hover, disabled, focus y transiciones automáticamente!
}

.boton-outline {
  @include button-style(transparent, $color-primary);
  border: 1px solid $color-primary;
}
```

### Cards con Efectos

```scss
.mi-card {
  @include card-style;
  // ¡Sombras, hover, transform y transiciones incluidos!
}
```

### Responsive Design

```scss
.mi-elemento {
  display: flex;
  gap: $spacing-lg;
  
  @include responsive(md) {
    display: block;     // En tablets
    gap: $spacing-sm;
  }
  
  @include responsive(sm) {
    padding: $spacing-xs; // En móviles
  }
}

## 📱 Componentes Pre-construidos

### Botones con Variaciones
```html
<!-- Botones básicos -->
<button class="btn">Botón Base</button>
<button class="btn btn-secondary">Secundario</button>
<button class="btn btn-success">Éxito</button>
<button class="btn btn-outline">Outline</button>

<!-- Tamaños -->
<button class="btn btn-sm">Pequeño</button>
<button class="btn btn-lg">Grande</button>
```

### Cards de Productos E-commerce

```html
<div class="products-grid">
  <div class="product-card">
    <div class="product-image">
      <img src="producto.jpg" alt="Producto">
    </div>
    <h3 class="product-title">Smartphone Galaxy</h3>
    <p class="product-price">$599.99</p>
    <p class="product-description">Descripción del producto...</p>
    <button class="btn">Agregar al Carrito</button>
  </div>
</div>
```

### Formularios con Validación

```html
<div class="form-group">
  <label class="form-label">Email *</label>
  <input type="email" class="form-input error" placeholder="tu@email.com">
  <span class="form-error" *ngIf="emailInvalid">Email inválido</span>
</div>
```

### Navegación Responsive

```html
<nav class="navbar">
  <div class="nav-container">
    <a routerLink="/" class="nav-brand">Mi E-commerce</a>
    <ul class="nav-menu">
      <li class="nav-item">
        <a routerLink="/productos" class="nav-link" routerLinkActive="active">Productos</a>
      </li>
      <li class="nav-item">
        <a routerLink="/carrito" class="nav-link" routerLinkActive="active">Carrito</a>
      </li>
    </ul>
  </div>
</nav>
```

### Alertas con Estados

```html
<div class="alert alert-success">
  <span class="alert-icon">✓</span>
  ¡Producto agregado exitosamente!
  <button class="alert-close">×</button>
</div>

<div class="alert alert-error">
  <span class="alert-icon">✗</span>
  Error al procesar el pago
</div>
```

### Loading States

```html
<!-- Overlay completo -->
<div class="loading-overlay" *ngIf="loading">
  <div class="loading-spinner"></div>
</div>

<!-- Spinner inline -->
<div class="loading-spinner"></div>
```

## ⚡ Uso en Componentes Angular

### 1. Import en tu componente

```scss
// product-list.component.scss
@import '../../../styles/variables';  // Ruta desde tu componente

:host {
  display: block;
  padding: $spacing-lg;
}

.producto-destacado {
  @include card-style;
  background: linear-gradient(135deg, $color-primary, $color-secondary);
  color: $color-white;
  
  @include responsive(md) {
    padding: $spacing-sm; // Menos padding en móvil
  }
}
```

### 2. Componente TypeScript de ejemplo

```typescript
// product-card.component.ts
@Component({
  selector: 'app-product-card',
  template: `
    <div class="product-card" [class.loading]="isLoading">
      <div class="product-image">
        <img [src]="product.image" [alt]="product.name">
      </div>
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-price">{{ product.price | currency }}</p>
      <button class="btn" 
              [class.btn-outline]="!inStock"
              [disabled]="!inStock || isLoading"
              (click)="addToCart()">
        {{ getButtonText() }}
      </button>
      <div class="loading-spinner" *ngIf="isLoading"></div>
    </div>
  `,
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent { /* ... */ }
```

## 🎯 Integración con Angular Material

```scss
// En tu theme personalizado (theme.scss)
@import '~@angular/material/theming';
@import './variables';

// Usar tus colores en Material Design
$primary-palette: mat-palette($mat-blue, 800); 
$accent-palette: mat-palette($mat-pink, 300);   

$theme: mat-light-theme($primary-palette, $accent-palette);
@include angular-material-theme($theme);

// Override de componentes Material con tus variables
.mat-button {
  font-family: $font-main !important;
}

.mat-form-field {
  .mat-form-field-label {
    color: $color-text-light;
  }
}
```

## 🏗️ Cómo Integrar en tu Proyecto Angular

### 1. Copia los archivos principales a tu proyecto:

```
tu-proyecto-angular/src/
├── styles/                      # ← Crear esta carpeta
│   ├── _variables.scss          # ← Copiar desde la raíz
│   ├── _components.scss         # ← Copiar desde la raíz
│   └── angular-styles.css       # ← Copiar desde la raíz
├── app/
│   └── components/
│       └── product-card/
│           ├── product-card.component.scss  # @import '../../../styles/variables'
│           └── product-card.component.ts
└── styles.scss                 # ← Import global: @import 'styles/variables'; @import 'styles/components';
```

### 2. Rutas de importación correctas:

```scss
// En styles.scss (global) - si copias archivos a carpeta styles/
@import 'styles/variables';
@import 'styles/components';

// O si los pones en la raíz de src/
@import 'variables';
@import 'components';

// En componentes individuales (ajusta según tu estructura)
@import '../../variables';        // Si están en src/
@import '../../../styles/variables';  // Si están en src/styles/
```

## � Scripts NPM Incluidos

```bash
npm run build-css    # Compila SCSS a CSS
npm run watch-css    # Watch mode para desarrollo
npm run lint-scss    # Linting de archivos SCSS
npm run format       # Formateo automático de código
```

## 🗂️ Versión CSS Genérica

Para proyectos **no-Angular**, revisa `css-generic/` que contiene:

- Variables CSS con custom properties
- Componentes CSS vanilla
- Ejemplo HTML funcional

## 📏 Mejores Prácticas

1. **ViewEncapsulation**: Mantén estilos de componentes encapsulados
2. **SCSS sobre CSS**: Aprovecha variables, mixins y funciones
3. **Mobile First**: Usa `@include responsive()` para adaptar a escritorio
4. **Componentes reutilizables**: Extiende con `@include` en lugar de copiar CSS
5. **Nomenclatura consistente**: Sigue la convención BEM cuando sea necesario

## 🎯 Optimizado para E-commerce

✅ **Cards de productos** con hover y estados
✅ **Botones de acción** (comprar, agregar, favoritos)
✅ **Formularios de checkout** con validación visual
✅ **Navegación responsive** con carrito y búsqueda
✅ **Estados de carga** para mejor UX
✅ **Alertas contextuales** (éxito, error, advertencia)
✅ **Grid adaptativo** para catálogos de productos
✅ **Integración Material Design** para componentes avanzados
