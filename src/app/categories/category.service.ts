import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryItemModel } from "./category-item.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private baseUrl: string = "https://newegg-project-default-rtdb.firebaseio.com/"
    private productsEndpoint: string = "categories.json"

    constructor(private http: HttpClient) {

    }

    public getCategories() {
        return this.http.get<CategoryItemModel []>(this.baseUrl + this.productsEndpoint);
    }
}