import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Output } from '../../../models/output';

/**
 * Generated class for the OutputListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-output-list',
  templateUrl: 'output-list.html',
})
export class OutputListPage {
  private db: AngularFireDatabase;
  outputs: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.db = db;
  }

  ionViewDidLoad() {
    this.outputs = this.db.list('/outputs');
    console.log('ionViewDidLoad OutputListPage');
    console.log(this.outputs);
  }

}
