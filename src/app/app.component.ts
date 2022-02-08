import { Component } from '@angular/core';
import { CategoryItemModel } from './categories/category-item.model';
import { mock_category_list } from './categories/mock_category_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  products: CategoryItemModel [] = [];

  constructor() {
    for (var product of mock_category_list) {
      console.log(product);
      this.products.push(product);
    }
  }
}
