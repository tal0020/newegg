import { Component, OnInit } from '@angular/core';
import { CategoryItemModel } from './category-item.model';
import { CategoryService } from './category.service';
import { mock_category_list } from './mock_category_list';

@Component({
    selector: 'newegg-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit{
    products: CategoryItemModel [] = [];

    constructor(private categoryService:CategoryService) {

    }

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe(data => {
          console.log("Fetching category data");
          for (var category of data) {
            console.log(category);
            this.products.push(category);
          }
        })
    }
}