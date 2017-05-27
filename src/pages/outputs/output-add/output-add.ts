import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  outputAddForm: FormGroup;
  output: Output;

  // TODO: Move this to services
  accounts: Account[] = [
    { id: 1, name: 'Transport' },
    { id: 2, name: 'Food' },
    { id: 3, name: 'Fun' },
    { id: 4, name: 'Shared Spends' },
    { id: 5, name: 'Water' },
    { id: 6, name: 'Light' },
    { id: 7, name: 'Internet' },
    { id: 8, name: 'TV' },
    { id: 9, name: 'Health' },
    { id: 10, name: 'House' },
  ];
  payments: Payment[] = [
    { id: 1, name: 'Cash' },
    { id: 2, name: 'Debit' },
    { id: 3, name: 'Credit' },
    { id: 4, name: 'Other' }
  ];
  currencies: Currency[] = [
    { id: 1, name: 'Pesos', short_name: '$' },
    { id: 2, name: 'Dollars', short_name: 'U$S' }
  ];

  constructor(private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutputAddPage');
  }

  createForm() {
    this.outputAddForm = this.fb.group({
      account: ['', Validators.required],
      payment: '1',
      currency: '1',
      amount: ['', Validators.required]
    });
  }

  onSubmit() {
    this.output = this.prepareSaveOutput();
    console.log(this.output);
  }

  prepareSaveOutput(): Output {
    const formModel = this.outputAddForm.value;
    const outputForSave: Output = {
      amount: <number>formModel.amount,
      profile_id: '1',
      account_id: formModel.account,
      payment_id: formModel.payment,
      currency_id: formModel.currency,
      date: Date.now()
    };

    return outputForSave;
  }

}
