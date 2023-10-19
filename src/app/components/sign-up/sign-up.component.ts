import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private storageService: StorageService, private router: Router) {}
  onRegsister(SignupFrom: NgForm) {
    this.storageService.setUser(SignupFrom.value);
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
