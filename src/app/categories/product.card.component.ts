import { Component, Input } from "@angular/core";

@Component({
    selector: 'newegg-product-card',
    templateUrl: 'product.card.component.html',
    styleUrls: ['product.card.component.css']
})
export class ProductCardComponent{
    @Input() img: string;
    @Input() description: string;

    constructor(){
        this.img="img";
        this.description="description";
    }
}