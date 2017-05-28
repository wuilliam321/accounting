import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { Output } from '../../../models/output';
import { OutputProvider } from '../../../providers/output/output';
import { AccountProvider } from '../../../providers/account/account';
import { PaymentProvider } from '../../../providers/payment/payment';
import { CurrencyProvider } from '../../../providers/currency/currency';

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
  outputAddForm: FormGroup;
  accounts: FirebaseListObservable<any[]>;
  payments: FirebaseListObservable<any[]>;
  currencies: FirebaseListObservable<any[]>;

  constructor(
    public fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public outputProvider: OutputProvider,
    public accountProvider: AccountProvider,
    public paymentProvider: PaymentProvider,
    public currencyProvider: CurrencyProvider
  ) {
    this.createForm();
  }

  ionViewDidLoad() {
    this.accounts = this.accountProvider.getAccounts();
    this.payments = this.paymentProvider.getPayments();
    this.currencies = this.currencyProvider.getCurrencies();
    console.log('ionViewDidLoad OutputAddPage');
  }

  createForm() {
    this.outputAddForm = this.fb.group({
      account: ['', Validators.required],
      payment: 'Efectivo',
      currency: 'Pesos ($)',
      amount: ['', Validators.required]
    });
  }

  onSubmit() {
    let output = this.prepareSaveOutput();
    this.outputProvider
      .save(output)
      .then(() => {
        this.showOutputAddedMsg();
        this.createForm();
      })
      // TODO: make a beter handler
      .catch(error => console.log(error));
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

  showOutputAddedMsg() {
    let alert = this.alertCtrl.create({
      title: 'Excellent!',
      subTitle: 'Your record has been added!',
      buttons: ['OK']
    });
    alert.present();
  }

}
