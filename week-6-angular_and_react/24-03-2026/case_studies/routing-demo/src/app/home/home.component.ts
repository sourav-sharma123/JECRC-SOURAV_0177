import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `<div class="home">
  <h1>Welcome to My Store 🛍️</h1>
  <p>Explore amazing products at best prices</p>

  <button routerLink="/products">Shop Now</button>
</div>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
