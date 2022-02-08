import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { PromotionsCarouselComponent } from './categories/promotions.carousel.component';
import { SecondTopComponent } from './header/second.top.component';
import { TopComponent } from './header/top.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SecondTopComponent,
    CategoryCardComponent,
    PromotionsCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
