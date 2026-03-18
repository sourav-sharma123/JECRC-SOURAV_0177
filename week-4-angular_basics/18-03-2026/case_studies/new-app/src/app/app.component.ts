import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
  productName = 'Laptop';
  price = 50000;
  quantity = 1;
  isAvailable = true;
  imageUrl = 'https://picsum.photos/150';

  customerName = '';
  address = '';

  increaseQty()
  {
    this.quantity++;
  }

  decreaseQty()
  {
    if (this.quantity > 1) this.quantity--;
  }

  toogleAvailability()
  {
    this.isAvailable = !this.isAvailable;
  }

  getTotal()
  {
    return this.price * this.quantity;
  }
}
