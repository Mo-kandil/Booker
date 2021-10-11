import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopCartComponent } from './pages/shop/shop-cart/shop-cart.component';
import { ForgetPasswordComponent } from './pages/login/forget-password/forget-password.component';
import { NotFoundComponent } from './pages/login/not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
  {path:'register', component:RegisterComponent},
  {path:'shop', component:ShopComponent},
  {path:'shopCart', component:ShopCartComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top',anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
