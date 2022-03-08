import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from './product-item.model';
import { mock_product_list } from './mock_product_list';
import { ProductService } from './product.service';

@Component({
    selector: 'newegg-best-deals',
    templateUrl: 'best-deals-layout.component.html',
    styleUrls: ['best-deals-layout.component.css']
})
export class BestDealsLayoutComponent implements OnInit{
    products: ProductItemModel [] = [];

    constructor(private productService:ProductService) {

    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => {
          console.log("Fetching product data");
          for (var product of data) {
            console.log(product);
            this.products.push(product);
          }
        })
    }
}