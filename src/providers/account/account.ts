import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the AccountProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AccountProvider {

  constructor(private db: AngularFireDatabase) {
    console.log('Hello AccountProvider Provider');
  }

  getAccounts(): FirebaseListObservable<any[]> {
    return this.db.list('/accounts');
  }

}
