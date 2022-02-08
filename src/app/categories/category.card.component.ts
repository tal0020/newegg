import { Component, Input } from "@angular/core";

@Component({
    selector: 'newegg-category-card',
    templateUrl: 'category.card.component.html',
    styleUrls: ['category.card.component.css']
})
export class CategoryCardComponent{
    @Input() img: string;
    @Input() description: string;

    constructor(){
        this.img="img";
        this.description="description";
    }
}