import { Component, OnInit } from '@angular/core';
import { BestCardModel } from './best-card.model';
import { BestService } from './best.service';
import { mock_best_list } from './mock_best_list';

@Component({
    selector: 'newegg-best-deals',
    templateUrl: 'best-sellers-layout.component.html',
    styleUrls: ['best-sellers-layout.component.css']
})
export class BestSellersLayoutComponent implements OnInit{
    products: BestCardModel [] = [];

    constructor(private bestService:BestService) {

    }

    ngOnInit(): void {
        this.bestService.getBest().subscribe(data => {
          console.log("Fetching product data");
          for (var product of data) {
            console.log(product);
            this.products.push(product);
          }
        })
    }
}