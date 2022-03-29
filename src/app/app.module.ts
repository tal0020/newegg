import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { PromotionsCarouselComponent } from './categories/promotions.carousel.component';
import { FooterComponent } from './footer/footer.component';
import { SecondTopComponent } from './header/second.top.component';
import { TopComponent } from './header/top.component';
import { AppRoutingModule } from './app-routing.module';
import { BestDealsLayoutComponent } from './categories/best-deals-layout.component';
import { HomeLayoutComponent } from './categories/home-layout.component';
import { BestSellersLayoutComponent } from './categories/best-sellers-layout.component';
import { BuildLayoutComponent } from './categories/build-layout.component';
import { BlackFridayLayoutComponent } from './categories/black-friday-layout.component';
import { ProductCardComponent } from './categories/product.card.component';
import { BestCardComponent } from './categories/best-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './categories/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SecondTopComponent,
    CategoryCardComponent,
    PromotionsCarouselComponent,
    FooterComponent,
    BestDealsLayoutComponent,
    HomeLayoutComponent,
    BestSellersLayoutComponent,
    BuildLayoutComponent,
    BlackFridayLayoutComponent,
    ProductCardComponent,
    BestDealsLayoutComponent,
    BestCardComponent,
    UserInfoComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
