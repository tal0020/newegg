import { Component } from '@angular/core';
import { ProductItemModel } from './product-item.model';
import { mock_product_list } from './mock_product_list';

@Component({
    selector: 'newegg-best-deals',
    templateUrl: 'best-deals-layout.component.html',
    styleUrls: ['best-deals-layout.component.css']
})
export class BestDealsLayoutComponent {
    products: ProductItemModel [] = [];

    constructor() {
      for (var product of mock_product_list) {
        console.log(product);
        this.products.push(product);
      }
    }
}