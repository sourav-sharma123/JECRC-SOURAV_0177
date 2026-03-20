import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
  { id:1, name:'Laptop', price:70000, category:'Electronics', rating:4.5, image:'https://via.placeholder.com/150', qty:1 },
  { id:2, name:'Shoes', price:2000, category:'Fashion', rating:4, image:'https://via.placeholder.com/150', qty:1 },
];

searchText = '';
selectedCategory = '';

addToCart(product:any){
  product.qty = 1;
  this.cart.push({...product});
}

cart:any[] = [];
}
