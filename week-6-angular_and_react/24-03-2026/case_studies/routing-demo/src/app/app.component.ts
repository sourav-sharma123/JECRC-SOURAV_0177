import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
  <h1>Angular Routing Demo</h1>

  <nav> 
    <a routerLink="/home">Home</a>
    <a routerLink="/contact">Contact</a>
    <a routerLink="/products">Product</a>
    <a routerLink="/product/1">Product/1</a>
  </nav>
  <br>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'routing-demo';
}
