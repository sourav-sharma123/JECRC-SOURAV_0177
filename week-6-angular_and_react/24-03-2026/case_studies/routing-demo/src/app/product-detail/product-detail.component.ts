// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ProductService } from '../product.service';
// import { CommonModule } from '@angular/common';
// import { OnInit } from '@angular/core';
// @Component({
//   selector: 'app-product-detail',
//   imports: [CommonModule],
//   template:
//   `<div class="card" *ngIf="product">
//     <h2>{{product.name}}</h2>
//     <p>ID: {{product.productID}}</p>
//     <p>Price: {{product.price}}</p>
//   </div>`
  
// })
// export class ProductDetailComponent implements OnInit{
//   product: any;
//   constructor(
//     private route: ActivatedRoute, 
//     private service: ProductService
//   ){}

//   ngOnInit(){
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.product = this.service.getProductById(id);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: 
  `
  <div class="detail-container" *ngIf="product">

  <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" />

  <div class="info">
    <h2>{{ product.name }}</h2>
    <p><b>ID:</b> {{ product.productID }}</p>
    <p class="price">₹{{ product.price }}</p>

    <button routerLink="/products">⬅ Back</button>
  </div>

</div>
    `,
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.service.getProductById(id);
  }
}
