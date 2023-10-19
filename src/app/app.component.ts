import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Shopping';
  constructor(
    private storageservice: StorageService,
    private authService: AuthService
  ) {}

  
  ngOnInit(): void {
    this.storageservice.loadUser();
    this.storageservice.loadCart();
  }
  isLoggedInUser(): boolean {
    return this.authService.isLoggedIn();
  }
}
