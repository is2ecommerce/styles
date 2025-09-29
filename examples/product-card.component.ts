// Ejemplo de componente Angular usando el sistema de estilos

import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="product-card">
      <div class="product-image">
        <img [src]="product.image" [alt]="product.name">
      </div>
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-price">{{ product.price | currency }}</p>
      <p class="product-description">{{ product.description }}</p>
      
      <div class="product-actions">
        <button 
          class="btn" 
          (click)="addToCart()"
          [disabled]="isLoading">
          {{ isLoading ? 'Agregando...' : 'Agregar al Carrito' }}
        </button>
        <button 
          class="btn btn-outline btn-sm" 
          (click)="addToWishlist()">
          ❤ Favorito
        </button>
      </div>
      
      <!-- Loading spinner -->
      <div class="loading-spinner" *ngIf="isLoading"></div>
      
      <!-- Success alert -->
      <div class="alert alert-success" *ngIf="showSuccess">
        <span class="alert-icon">✓</span>
        ¡Producto agregado al carrito!
        <button class="alert-close" (click)="showSuccess = false">&times;</button>
      </div>
    </div>
  `,
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  product = {
    name: 'Smartphone Galaxy',
    price: 599.99,
    description: 'Un excelente smartphone con todas las características modernas.',
    image: 'assets/smartphone.jpg'
  };
  
  isLoading = false;
  showSuccess = false;

  addToCart() {
    this.isLoading = true;
    
    // Simular llamada a API
    setTimeout(() => {
      this.isLoading = false;
      this.showSuccess = true;
      
      // Auto-hide success message
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    }, 1000);
  }

  addToWishlist() {
    console.log('Agregado a favoritos:', this.product.name);
  }
}