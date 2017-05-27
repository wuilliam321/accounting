import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Output } from '../../../../models/output';
import { Currency } from '../../../../models/currency';

@Component({
  selector: 'currency-component',
  templateUrl: 'currency.component.html'
})
export class CurrencyComponent {
  @Input() output: Output;
  @Input() currencies: Currency[];

  constructor(public navCtrl: NavController) {

  }

}
