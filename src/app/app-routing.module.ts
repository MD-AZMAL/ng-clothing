import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClothesPageComponent } from './components/pages/clothes-page/clothes-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: SignupComponent},
  {path: 'clothes/:catId', component: ClothesPageComponent},
  {path: 'clothes/product/:id', component: ProductPageComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'about', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
