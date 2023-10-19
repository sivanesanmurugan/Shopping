import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { StorageService } from 'src/app/services/storage.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductsService,
    private storageService: StorageService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.storageService.loadTheProduct(data);
      },
      complete: () => {},
      error: (error: Error) => {},
    });
  }
  addToCart(id: number) {
    this.cartService.addToCart(id);
  }
}
