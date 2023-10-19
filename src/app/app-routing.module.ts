import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { OrdersComponent } from './components/orders/orders.component';
import { authGuard } from './common/auth.guard';
import { ProjectShoppingComponent } from './components/project-shopping/project-shopping.component';

const routes: Routes = [
  {path:'',component:ProjectShoppingComponent},
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'cart', component: CartComponent ,canActivate:[authGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: NotFoundComponent },
  // { path: 'product/:id', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
