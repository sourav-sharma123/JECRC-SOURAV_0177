import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { RouterLink, RouterModule } from '@angular/router';
import { Product } from '../product';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService) {}
    ngOnInit(): void {
      this.products = this.productService.getProducts();
    }
}
