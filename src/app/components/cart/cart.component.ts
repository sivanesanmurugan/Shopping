import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carts:Product[]=[];
  constructor(private cartService:CartService){
    this.carts=cartService.getCart();
  }
  checkOut(){
    this.cartService.checkout();
    this.carts=[];
  }
}
