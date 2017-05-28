import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PaymentProvider {

  constructor(private db: AngularFireDatabase) {
    console.log('Hello PaymentProvider Provider');
  }

  getPayments(): FirebaseListObservable<any[]> {
    return this.db.list('/payments');
  }

}
