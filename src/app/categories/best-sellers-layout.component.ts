import { Component } from '@angular/core';
import { BestCardModel } from './best-card.model';
import { mock_best_list } from './mock_best_list';

@Component({
    selector: 'newegg-best-deals',
    templateUrl: 'best-sellers-layout.component.html',
    styleUrls: ['best-sellers-layout.component.css']
})
export class BestSellersLayoutComponent {
    products: BestCardModel [] = [];

    constructor() {
      for (var product of mock_best_list) {
        console.log(product);
        this.products.push(product);
      }
    }
}