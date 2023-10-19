import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Cart } from '../models/cart';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private storageService: StorageService) {}
  getOrder(): Product[] {
    let loggedUser: User = this.storageService.getLoggedInUser();
    let order: Order[] = this.storageService.getorder();
    console.log(order);

    let userCart: Order | undefined = order.find(
      (cartItem) => cartItem.user.id === loggedUser.id
    );
    console.log(userCart);
    userCart;
    if (!userCart) {
      return [];
    }
    return userCart.cart;
  }
}
