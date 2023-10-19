import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService) {}

  isValidUser(user: User): boolean {
    let users: User[] = this.storageService.getAllUser();
    let isUser: boolean = false;
    let founduser: User = users.find(
      (u) => u.email === user.email && u.password === user.password
    )!;
    this.storageService.setLoggedUser(founduser);
    if (founduser) {
      isUser = true;
    }
    return isUser;
  }
  isLoggedIn(): boolean {
    return this.storageService.isLoggedInUser();
  }
  getLoggedInUser():User{
    return this.storageService.getLoggedInUser();
  }
}
