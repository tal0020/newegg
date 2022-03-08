import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BestCardModel } from "./best-card.model";

@Injectable({
    providedIn: 'root'
})
export class BestService {
    private baseUrl: string = "https://newegg-project-default-rtdb.firebaseio.com/"
    private productsEndpoint: string = "bestsellers.json"

    constructor(private http: HttpClient) {

    }

    public getBest() {
        return this.http.get<BestCardModel []>(this.baseUrl + this.productsEndpoint);
    }
}