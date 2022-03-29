import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BestDealsLayoutComponent } from './categories/best-deals-layout.component';
import { HomeLayoutComponent } from './categories/home-layout.component';
import { BestSellersLayoutComponent } from './categories/best-sellers-layout.component';
import { BuildLayoutComponent } from './categories/build-layout.component';
import { BlackFridayLayoutComponent } from './categories/black-friday-layout.component';
import { AddProductComponent } from './categories/add-product/add-product.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Best-Deals', component: BestDealsLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'Best-Sellers', component: BestSellersLayoutComponent},
  {path: 'Build', component: BuildLayoutComponent},
  {path: 'Black-Friday', component: BlackFridayLayoutComponent},
  {path: 'admin', component: AddProductComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
