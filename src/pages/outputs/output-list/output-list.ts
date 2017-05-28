import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { OutputProvider } from '../../../providers/output/output';

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
  outputs: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private outputProvider: OutputProvider) {
  }

  ionViewDidLoad() {
    this.outputs = this.outputProvider.getOutputs();
    console.log('ionViewDidLoad OutputListPage');
  }

}
