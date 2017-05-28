import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Output } from '../../models/output';

/*
  Generated class for the OutputProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OutputProvider {

  constructor(private db: AngularFireDatabase) {
    console.log('Hello OutputProvider Provider');
  }

  getOutputs(): FirebaseListObservable<any[]> {
    return this.db.list('/outputs');
  }

  save(output: Output) {
    let outputs = this.db.list('/outputs');
    return outputs.push(output);
  }

}
