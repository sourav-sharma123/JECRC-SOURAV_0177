import { AsyncPipe, CommonModule, DatePipe, KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomCurrencyPipe } from './custom-currency.pipe';
import { of } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [AsyncPipe, DatePipe, KeyValuePipe, CustomCurrencyPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-app';
  today = new Date();
  data$ = of([
    {
      id: 1, 
      producctName: 'Laptop',
      price: 50000,
      status: 'delivered'
    },
    {
      id: 2, 
      productName: 'Mobile',
      price: 50000,
      status: 'pending'
    }
  ]);
  product = {
    name: 'Laptop',
    price: 50000
  };
}
