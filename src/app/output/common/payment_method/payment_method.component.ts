import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Output } from '../../../../models/output';
import { Payment } from '../../../../models/payment';

@Component({
  selector: 'payment-method-component',
  templateUrl: 'payment_method.component.html'
})
export class PaymentMethodComponent {
  @Input() output: Output;
  @Input() payments: Payment[];

  constructor(public navCtrl: NavController) {

  }

}
