// import { Profile } from './profile';
// import { Account } from './account';
// import { Payment } from './payment';
// import { Currency } from './currency';

export class Output {
  id?: string;
  profile_id: string;
  account_id: string;
  payment_id: string;
  currency_id: string;
  amount: number;
  date: number;
  //
  // constructor(output: {profile: Profile, account: Account, payment: Payment, currency: Currency, amount?: number}) {
  //   this.profile = output.profile;
  //   this.account = output.account;
  //   this.payment =  output.payment;
  //   this.currency =  output.currency;
  //   this.amount = output.amount || 0;
  //   this.date = Date.now();
  // }
}
