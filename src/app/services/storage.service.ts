import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private users: User[] = [
    { id: 1, email: 'siva@gmail.com', password: 'siva@2002' },
    { id: 2, email: 'hello@gmail.com', password: '1234' },
  ];
  private products: Product[] = [];
  private carts: Cart[] = [];
  private order: Order[] = [];
  constructor() {}
  loadUser() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  loadCart() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('carts', JSON.stringify(this.carts));
    }
  }
  getCart(): Cart[] {
    return JSON.parse(localStorage.getItem('carts') as string);
  }
  setCart(cart: Cart[]) {
    localStorage.setItem('carts', JSON.stringify(cart));
  }
  getAllUser(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }
  setUser(user: User) {
    if (user) {
      this.users.push({
        id: this.users.length + 1,
        email: user.email,
        password: user.password,
      });
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  setLoggedUser(user: User): void {
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }
  removedLoggedUser(): void {
    localStorage.removeItem('loggedUser');
  }
  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('loggedUser') as string);
  }
  isLoggedInUser(): boolean {
    return localStorage.getItem('loggedUser') !== null;
  }
  loadTheProduct(products: Product[]) {
    localStorage.setItem('products', JSON.stringify(products));
  }
  getProduct(): Product[] {
    return JSON.parse(localStorage.getItem('products')!);
  }
  setorder(order: Order) {
    localStorage.setItem('orders', JSON.stringify(order));
  }
  getorder(): Order[] {
    return JSON.parse(localStorage.getItem('orders')!);
  }
}
