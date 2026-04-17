import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {name:"Laptop", price:50000},
    {name:"Mobile", price:100000},
    {name:"Tab", price:70000}
  ];
}
