import { Component, OnInit } from '@angular/core';
import { BestCardModel } from '../best-card.model';
import { BestService } from '../best.service';
import { ProductItemModel } from '../product-item.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {

  constructor(public ps : ProductService, public bs : BestService) { }

  ngOnInit(): void {
  }

  addProduct(product : ProductItemModel) {
    console.log("You clicked add product");
    console.log(product);
    this.ps.addProduct(product);
  }

  addSeller(best : BestCardModel) {
    console.log("You clicked add seller");
    console.log(best);
    this.bs.addSeller(best);
  }
}
