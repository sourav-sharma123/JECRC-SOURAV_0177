import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
  return [
    new Product(
      1,
      'Laptop',
      50000,
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
    ),
    new Product(
      2,
      'SmartPhone',
      30000,
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    ),
    new Product(
      3,
      'HeadPhone',
      2000,
      'https://images.unsplash.com/photo-1518444028785-8f9b3e0c6b5b'
    )
  ];
}
}
