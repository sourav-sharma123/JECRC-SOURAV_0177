import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showProducts = true;

  products = [
    { name: 'Laptop', price: 1000, status: 'Available' },
    { name: 'Smartphone', price: 500, status: 'Out of Stock' },
    { name: 'Tablet', price: 300, status: 'Limited Stock' }
  ];

}