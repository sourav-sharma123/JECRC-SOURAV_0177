import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceHighlightDirective } from './price-highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, PriceHighlightDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'price-highlight-directive';
  products = [
    { name: 'Laptop', price: 75000 },
    { name: 'Mobile', price: 20000 },
    { name: 'TV', price: 60000 },
    { name: 'Headphones', price: 3000 }
  ];
}
