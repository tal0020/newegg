import { Injectable } from "@angular/core";
import { BestCardModel } from "./best-card.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class BestService {

    constructor(private db: AngularFireDatabase) {

    }

    public getBest() {
        return this.db.list<BestCardModel>("bestsellers").valueChanges();
    }

    addSeller(best : BestCardModel) {
        this.db.list<BestCardModel>("bestsellers").push(best);
    }
}