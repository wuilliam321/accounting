// import { Component, OnInit } from '@angular/core';
// import { NavController, AlertController } from 'ionic-angular';
// import 'rxjs/add/operator/switchMap';
// import { Output } from '../../../models/output';
// import { Account } from '../../../models/account';
// import { Payment } from '../../../models/payment';
// import { Currency } from '../../../models/currency';
// import { OutputService } from '../../services/output.service';
// import { AccountService } from '../../services/account.service';
// import { PaymentService } from '../../services/payment.service';
// import { CurrencyService } from '../../services/currency.service';
// @Component({
//   selector: 'add-output-component',
//   templateUrl: 'add-output.component.html'
// })
// export class AddOutputComponent implements OnInit {
//   profile_id: number;
//   output: Output;
//   outputs: Output[];
//   accounts: Account[];
//   payments: Payment[];
//   currencies: Currency[];
//
//   constructor(
//     public navCtrl: NavController,
//     public alertCtrl: AlertController,
//     private outputService: OutputService,
//     private accountService: AccountService,
//     private paymentService: PaymentService,
//     private currencyService: CurrencyService
//   ) { }
//
//   ngOnInit(): void {
//     this.setEmptyOutput();
//     this.getProfileId();
//     this.getOutputs();
//     this.getAccounts();
//     this.getPayments();
//     this.getCurrencies();
//   }
//
//   setEmptyOutput(): void {
//     this.output = {
//       id: null,
//       profile_id: null,
//       account_id: null,
//       payment_id: 1,
//       currency_id: 1,
//       amount: null,
//       date: Date.now(),
//       account: null,
//       payment: null,
//       currency: null
//     }
//   }
//
//   getProfileId(): void {
//     // this.route.params
//     //   .subscribe((params: Params) => {
//     //     this.profile_id = params['id'];
//     //   });
//     this.profile_id = 1;
//   }
//
//   getOutputs(): void {
//     this.outputService
//       .getOutputs()
//       .then(outputs => this.outputs = outputs);
//   }
//
//   getAccounts(): void {
//     this.accountService
//       .getAccounts()
//       .then(accounts => this.accounts = accounts);
//   }
//
//   getPayments(): void {
//     this.paymentService
//       .getPayments()
//       .then(payments => this.payments = payments);
//   }
//
//   getCurrencies(): void {
//     this.currencyService
//       .getCurrencies()
//       .then(currencies => this.currencies = currencies);
//   }
//
//   add(output: Output): void {
//     output.profile_id = this.profile_id;
//     if (!output.amount
//       || !output.profile_id
//       || !output.account_id
//       || !output.payment_id
//       || !output.currency_id
//       || !output.date) {
//       return;
//     }
//     this.outputService
//       .create(output)
//       .then(output => {
//         this.outputs.push(output);
//         this.setEmptyOutput();
//
//         let alert = this.alertCtrl.create({
//           title: 'Excellent!',
//           subTitle: 'Your spending record has been added successfully!',
//           buttons: ['OK']
//         });
//         alert.present();
//       }).
//     catch(function(error) {
//       let alert = this.alertCtrl.create({
//         title: 'Oops!',
//         subTitle: 'En error has been occurred, try again!',
//         buttons: ['OK']
//       });
//       alert.present();
//       console.log(error);
//     });
//   }
//
// }
