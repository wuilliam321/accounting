import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Output } from '../../../../models/output';
import { Account } from '../../../../models/account';

@Component({
  selector: 'account-component',
  templateUrl: 'account.component.html'
})
export class AccountComponent {
  @Input() output: Output;
  @Input() accounts: Account[];

  constructor(public navCtrl: NavController) {

  }

}
