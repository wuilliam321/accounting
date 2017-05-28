import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { Output } from '../../../models/output';
import { Account } from '../../../models/account';
import { Currency } from '../../../models/currency';
import { Payment } from '../../../models/payment';

/**
 * Generated class for the OutputAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-output-add',
  templateUrl: 'output-add.html',
})
export class OutputAddPage {
  private db: AngularFireDatabase;
  outputAddForm: FormGroup;
  output: Output;
  accounts: FirebaseListObservable<any[]>;
  payments: FirebaseListObservable<any[]>;
  currencies: FirebaseListObservable<any[]>;
  outputs: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.db = db;
    this.accounts = this.db.list('/accounts');
    this.payments = this.db.list('/payments');
    this.currencies = this.db.list('/currencies');
    this.outputs = this.db.list('/outputs');
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutputAddPage');
  }

  createForm() {
    console.log(this.payments.first());
    this.outputAddForm = this.fb.group({
      account: ['', Validators.required],
      payment: '',
      currency: '',
      amount: ['', Validators.required]
    });
  }

  onSubmit() {
    this.output = this.prepareSaveOutput();
    this.outputs.push(this.output);
    console.log(this.output);
  }

  prepareSaveOutput(): Output {
    const formModel = this.outputAddForm.value;
    const outputForSave: Output = {
      amount: <number>formModel.amount,
      profile: '1',
      account: formModel.account,
      payment: formModel.payment,
      currency: formModel.currency,
      date: Date.now()
    };

    return outputForSave;
  }

}
