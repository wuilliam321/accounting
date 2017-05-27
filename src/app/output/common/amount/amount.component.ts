import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Output } from '../../../../models/output';

@Component({
  selector: 'amount-component',
  templateUrl: 'amount.component.html'
})
export class AmountComponent {
  @Input() output: Output;

  constructor(public navCtrl: NavController) {

  }

}
