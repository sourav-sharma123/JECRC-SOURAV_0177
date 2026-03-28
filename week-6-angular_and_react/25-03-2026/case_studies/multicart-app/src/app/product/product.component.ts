import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [CartService]
})
export class ProductComponent {
  products = [
    {id: 1, name: 'laptop', price: 999},
    {id: 2, name: 'mobile', price: 999},
    {id: 3, name: 'headphone', price: 999},
  ];

  constructor (private cartServie: CartService)
  {

  }

  addToCart(product: any) {
    this.cartServie.addToCart(product.name);
  }

  getCartItems() {
    this.cartServie.getCartItems();
  }
}
