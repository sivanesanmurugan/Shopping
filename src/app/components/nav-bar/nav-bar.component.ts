import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private storageService:StorageService, private router:Router, private cartService:CartService){}
  Logout(){
     this.storageService.removedLoggedUser();
     this.router.navigate(['/login'], { replaceUrl: true });
  }
  getCount():number{
   return this.cartService.getCount();
  }
}
