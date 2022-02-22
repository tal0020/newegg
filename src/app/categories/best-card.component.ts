import { Component, Input } from "@angular/core"

@Component({
    selector: 'newegg-best-carousel',
    templateUrl: 'best-card.component.html',
    styleUrls: ['best-card.component.css']
})
export class BestCardComponent {
    @Input() img: string;
    @Input() description: string;

    constructor(){
        this.img="img";
        this.description="description";
    }
}