// import { Component, OnInit } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { Output } from '../../../models/output';
// import { Account } from '../../../models/account';
// import { Payment } from '../../../models/payment';
// import { Currency } from '../../../models/currency';
// import { OutputService } from '../../services/output.service';
// import { AccountService } from '../../services/account.service';
// import { PaymentService } from '../../services/payment.service';
// import { CurrencyService } from '../../services/currency.service';
// import _ from "lodash";
//
// @Component({
//   selector: 'list-output-component',
//   templateUrl: 'list-output.component.html'
// })
// export class ListOutputComponent implements OnInit {
//   outputs: Output[];
//   accounts: Account[];
//   payments: Payment[];
//   currencies: Currency[];
//
//   constructor(
//     public navCtrl: NavController,
//     private outputService: OutputService,
//     private accountService: AccountService,
//     private paymentService: PaymentService,
//     private currencyService: CurrencyService
//   ) { }
//
//   ngOnInit(): void {
//     this.getOutputs();
//     this.getAccounts();
//     this.getPayments();
//     this.getCurrencies();
//   }
//
//   getOutputs(): void {
//     this.outputService
//       .getOutputs()
//       .then((outputs) => {
//         // this.outputs = outputs;
//         // TODO: Remove
//         this.outputs = [
//           { id: 1, profile_id: 1, account_id: 1, payment_id: 1, currency_id: 1, amount: 30, account: null, payment: null, currency: null, date: Date.now()},
//           { id: 2, profile_id: 1, account_id: 1, payment_id: 1, currency_id: 1, amount: 30, account: null, payment: null, currency: null, date: Date.now()},
//           { id: 3, profile_id: 1, account_id: 1, payment_id: 1, currency_id: 1, amount: 30, account: null, payment: null, currency: null, date: Date.now()},
//         ];
//         this.prepareOutputs();
//       });
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
//   prepareOutputs(): void {
//     _.map(this.outputs, (output) => {
//       console.log(this.accounts);
//       output.account = _.find(this.accounts, account => account.id === output.account_id);
//       console.log(output);
//     });
//     // TODO: Here i go trying to prepare the outputs
//     // _.map(this.outputs, function(output) {
//     //   output.account = _.find(this.accounts, {id: output.account_id});
//     //   output.payment = _.find(this.payments, {id: output.payment_id});
//     //   output.currency = _.find(this.currencies, {id: output.currency_id});
//     //   console.log();
//     // })
//   }
//
// }
