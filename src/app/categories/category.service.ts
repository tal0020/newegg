import { Injectable } from "@angular/core";
import { CategoryItemModel } from "./category-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private db: AngularFireDatabase) {

    }

    public getCategories() {
        return this.db.list<CategoryItemModel>("categories").valueChanges();
    }
}