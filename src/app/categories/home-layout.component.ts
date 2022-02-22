import { Component } from '@angular/core';
import { CategoryItemModel } from './category-item.model';
import { mock_category_list } from './mock_category_list';

@Component({
    selector: 'newegg-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent{
    products: CategoryItemModel [] = [];

    constructor() {
      for (var product of mock_category_list) {
        console.log(product);
        this.products.push(product);
      }
    }
}