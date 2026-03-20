import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems:any[] = [];

getTotal(){
  return this.cartItems.reduce((sum,item)=> sum + item.price * item.qty,0);
}

increase(item:any){ item.qty++; }
decrease(item:any){ if(item.qty>1) item.qty--; }

remove(item:any){
  this.cartItems = this.cartItems.filter(i=>i!==item);
}

clearCart(){
  this.cartItems = [];
}
}
