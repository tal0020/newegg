import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private db: AngularFireDatabase) {

    }

    public getProducts() {
        return this.db.list<ProductItemModel>("products").valueChanges();
    }
}