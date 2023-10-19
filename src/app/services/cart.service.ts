import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';
import { Cart } from '../models/cart';
import { User } from '../models/user';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}
  getCount(): number {
    let count = 0;
    let cart: Cart[] = this.storageService.getCart();
    let loggedUser: User = this.authService.getLoggedInUser();

    return count;
  }

  addToCart(id: number) {
    let products: Product[] = this.storageService.getProduct();
    let product = products.find((p) => p.id === id);
    if (product) {
      let loggedUser: User = this.authService.getLoggedInUser();
      let cart: Cart[] = this.storageService.getCart();
      let userCart: Cart = cart.find((c) => c.user.id === loggedUser.id)!;
      if (userCart) {
        let existingCartItem = userCart.cart.find((p) => p.id === id);
        if (existingCartItem) {
          existingCartItem.count! += 1;
        } else {
          userCart.cart.push({ ...product, count: 1 });
        }
      } else {
        cart.push({ user: loggedUser, cart: [{ ...product, count: 1 }] });
      }
      this.storageService.setCart(cart);
    }
  }
  getCart(): Product[] {
    let loggedUser: User = this.storageService.getLoggedInUser();
    let cart: Cart[] = this.storageService.getCart();
    let userCart: Cart | undefined = cart.find(
      (cartItem) => cartItem.user.id === loggedUser.id
    );
    if (!userCart) {
      return [];
    }
    return userCart.cart;
  }
  checkout() {
    let cart: Cart[] = this.storageService.getCart();
    let loggedUser: User = this.storageService.getLoggedInUser();
    let products: Product[] = this.storageService.getProduct();
    let item = products.find((p) => p.id === loggedUser.id);
    let newcart = cart.find((c) => c.user.id === loggedUser.id);
    let orders: Order[] = [];
    if (newcart) {
      orders.push(newcart);
    }
    let othersCart = cart.filter((c) => c.user.id !== loggedUser.id);
    localStorage.setItem('carts', JSON.stringify(othersCart));
    localStorage.setItem('orders', JSON.stringify(orders));
  }
}
