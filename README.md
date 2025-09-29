# 🎯 Sistema de Estilos Angular E-commerce

Sistema completo de estilos SCSS optimizado para **proyecto Angular** de e-commerce, con componentes reutilizables, mixins avanzados y diseño responsive.

## 🚀 Inicio Rápido

### Opción 1: Descarga directa
```bash
# 1. Descarga los archivos SCSS
# Descarga _variables.scss y _componen## 📦 Instalación como Dependencia

```bash
# Si quieres usar como paquete NPM en el futuro
npm install git+https://github.com/LauraCD2/styles.git
```

## 🔧 Uso con Herramientas de Build

Este paquete es compatible con:
- ✅ Angular CLI
- ✅ Webpack  
- ✅ Vite
- ✅ Cualquier compilador SASS# https://github.com/LauraCD2/styles

# 2. Colócalos en tu proyecto (ejemplo: src/styles/)
# tu-proyecto/src/styles/_variables.scss
# tu-proyecto/src/styles/_components.scss

# 3. Instala SASS si no lo tienes
npm install sass --save-dev

# 4. Importa en tu styles.scss global
@import 'styles/variables';
@import 'styles/components';
```

### Opción 2: Como submódulo git
```bash
# En la raíz de tu proyecto
git submodule add https://github.com/LauraCD2/styles.git src/styles

# Importa en tu styles.scss
@import 'styles/variables';
@import 'styles/components';
```

## 📁 Estructura del Proyecto

```
styles/                          # ← Repositorio principal
├── 🎯 ARCHIVOS PRINCIPALES:
│   ├── _variables.scss          # Variables SCSS (colores, espaciado, tipografía)
│   ├── _components.scss         # Componentes y mixins SCSS
│   ├── package.json            # Configuración del paquete NPM
│   └── README.md               # Documentación (este archivo)
└── .gitignore                  # Archivos excluidos del control de versiones
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
```

## 🎯 **SISTEMA COMPLETO 100% E-COMMERCE**

### ✅ **Componentes Incluidos (TODOS los esenciales):**

#### **� Interfaz Principal:**
- **Botones** (variantes, tamaños, estados, iconos)
- **Navegación** (navbar responsive, breadcrumbs, menús)
- **Cards de productos** (badges, overlay, quick actions)
- **Grids adaptativas** (productos, categorías)

#### **🛒 E-commerce Específico:**
- **Carrito de compras** (items, contador, resumen)
- **Formularios** (checkout, validación, estados)
- **Variantes de producto** (colores, tallas, opciones)
- **Sistema de rating** (estrellas, reseñas)
- **Filtros avanzados** (accordion, price slider)
- **Búsqueda** (autocompletado, sugerencias)

#### **💡 UX Moderna:**
- **Modal/Dialog** (quick view, confirmaciones)
- **Toast Notifications** (feedback temporal)
- **Skeleton Loading** (placeholders modernos)
- **Tooltip** (información contextual)
- **Pagination** (navegación de páginas)
- **Tabs** (detalles de producto, especificaciones)
- **Carousel/Gallery** (imágenes de producto)
- **Progress Bars** (estados de progreso)

#### **📱 Responsive & Accesibilidad:**
- **Breakpoints completos** (mobile-first)
- **Estados de loading** (spinners, overlays)
- **Alertas contextuales** (éxito, error, warning)
- **Badges y labels** (indicadores visuales)
- **Animaciones** (transiciones suaves)

## 📱 Ejemplos de Uso

### Botones Completos
```html
<!-- Botones básicos -->
<button class="btn">Botón Base</button>
<button class="btn btn-secondary">Secundario</button>
<button class="btn btn-success">Éxito</button>
<button class="btn btn-outline">Outline</button>

<!-- Tamaños y variantes -->
<button class="btn btn-sm">Pequeño</button>
<button class="btn btn-lg btn-icon">
  <span>🛒</span> Agregar al Carrito
</button>
```

### Modal/Dialog Sistema
```html
<div class="modal-overlay show">
  <div class="modal modal-lg show">
    <div class="modal-header">
      <h3 class="modal-title">Vista Rápida</h3>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">
      <div class="product-quickview">...</div>
    </div>
  </div>
</div>
```

### Pagination Completa
```html
<div class="pagination">
  <button class="pagination-item prev" disabled>← Anterior</button>
  <button class="pagination-item">1</button>
  <button class="pagination-item active">2</button>
  <button class="pagination-item">3</button>
  <span class="pagination-info">Página 2 de 10</span>
  <button class="pagination-item next">Siguiente →</button>
</div>
```

### Toast Notifications
```html
<div class="toast-container">
  <div class="toast success show">
    <div class="toast-content">
      <div class="toast-icon">✓</div>
      <div class="toast-message">
        <div class="toast-title">¡Éxito!</div>
        <div class="toast-text">Producto agregado al carrito</div>
      </div>
    </div>
    <div class="toast-progress">
      <div class="progress-bar"></div>
    </div>
  </div>
</div>
```

### Tabs para Detalles de Producto
```html
<div class="tabs-container product-tabs">
  <div class="tabs-nav">
    <button class="tab-button active">Descripción</button>
    <button class="tab-button">Especificaciones</button>
    <button class="tab-button">Reseñas <span class="tab-badge">23</span></button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel description active">...</div>
    <div class="tab-panel specifications">...</div>
    <div class="tab-panel reviews">...</div>
  </div>
</div>
```

### Carousel de Imágenes
```html
<div class="product-gallery">
  <div class="carousel main-carousel">
    <div class="carousel-container">
      <div class="carousel-slide">
        <img src="product1.jpg" alt="Producto">
      </div>
    </div>
    <button class="carousel-controls prev">‹</button>
    <button class="carousel-controls next">›</button>
  </div>
</div>
```

### Filtros con Accordion
```html
<div class="filters-accordion">
  <div class="accordion">
    <div class="accordion-item">
      <button class="accordion-header">
        <span class="accordion-title">Precio</span>
        <span class="accordion-icon">⌄</span>
      </button>
      <div class="accordion-content">
        <div class="accordion-body">
          <div class="price-range-slider">
            <div class="price-inputs">
              <input type="number" placeholder="Min" min="0">
              <input type="number" placeholder="Max" min="0">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Skeleton Loading
```html
<div class="skeleton-product-card">
  <div class="skeleton-image"></div>
  <div class="skeleton-title"></div>
  <div class="skeleton-price"></div>
  <div class="skeleton-description"></div>
  <div class="skeleton-button"></div>
</div>
```

### Cards de Productos E-commerce

```html
<div class="products-grid">
  <div class="product-card">
    <div class="product-badge badge-sale">-20%</div>
    <div class="product-image">
      <img src="producto.jpg" alt="Producto">
      <div class="product-overlay">
        <div class="quick-actions">
          <button class="btn btn-sm">👁️</button>
          <button class="btn btn-sm">❤️</button>
        </div>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">Smartphone Galaxy</h3>
      <div class="product-rating">
        <div class="stars">★★★★☆</div>
        <span class="rating-count">(127)</span>
      </div>
      <p class="product-price">$599.99</p>
      <button class="btn btn-full">Agregar al Carrito</button>
    </div>
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

### 1. Estructura recomendada:

```
tu-proyecto-angular/src/
├── styles/                      # ← Crear esta carpeta
│   ├── _variables.scss          # ← Copiar desde este repo
│   └── _components.scss         # ← Copiar desde este repo
├── app/
│   └── components/
│       └── product-card/
│           ├── product-card.component.scss
│           └── product-card.component.ts
└── styles.scss                 # ← Import global
```

### 2. Configuración en angular.json:

```json
"styles": [
  "src/styles.scss"
]
```

### 3. Rutas de importación:

```scss
// En src/styles.scss (global)
@import 'styles/variables';
@import 'styles/components';

// En componentes individuales
@import '../../../styles/variables';  // Ajusta según tu estructura
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

## 🎯 **SISTEMA 100% COMPLETO PARA E-COMMERCE**

### ✅ **Componentes Principales:**
- **Cards de productos** con badges, overlay y quick actions
- **Sistema completo de botones** (variantes, tamaños, estados)
- **Navegación responsive** con carrito y breadcrumbs
- **Formularios de checkout** con validación visual
- **Grids adaptativo** para catálogos de productos

### ✅ **Componentes Avanzados:**
- **Modal/Dialog** para quick view y confirmaciones
- **Pagination** para navegación de páginas
- **Tabs** para detalles de producto y especificaciones
- **Toast Notifications** para feedback temporal
- **Carousel/Gallery** para múltiples imágenes
- **Accordion** para filtros y FAQs colapsables

### ✅ **UX Moderna:**
- **Skeleton Loading** placeholders modernos
- **Tooltip** información contextual
- **Price Range Slider** filtros de precio
- **Progress Bars** estados de progreso
- **Badges y Labels** indicadores visuales
- **Animaciones** transiciones suaves

### ✅ **Responsive & Performance:**
- **Mobile-first** breakpoints completos
- **Estados de loading** spinners y overlays
- **Alertas contextuales** (éxito, error, warning)
- **Utilities responsive** (hidden-mobile, desktop-only)
- **Optimizado Angular** ViewEncapsulation compatible

## 🚀 **RESULTADO FINAL**

Este sistema de estilos ahora incluye **TODOS** los componentes necesarios para crear un e-commerce moderno y profesional en Angular. No necesitas librerías adicionales - todo está incluido y optimizado.
