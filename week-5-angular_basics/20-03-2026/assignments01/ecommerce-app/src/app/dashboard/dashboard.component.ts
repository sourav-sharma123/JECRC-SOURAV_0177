import { CommonModule} from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @Input() products: any[] = [];
  @Input() cartItems: any[] = [];

  getTotalProducts() {
    return this.products.length;
  }

  getCartCount() {
    return this.cartItems.length;
  }

  getTotalRevenue() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.qty, 0
    );
  }

}
