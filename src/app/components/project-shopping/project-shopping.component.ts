import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project-shopping',
  templateUrl: './project-shopping.component.html',
  styleUrls: ['./project-shopping.component.css']
})
export class ProjectShoppingComponent {
  constructor(private router:Router,private authService:AuthService){}
  login(){
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  isLoggedInUser(): boolean {
    return this.authService.isLoggedIn();
  }
}
