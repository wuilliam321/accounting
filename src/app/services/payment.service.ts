import { Payment } from '../../models/payment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaymentService {
  private serviceUrl = 'api/payments';
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  getPayments(): Promise<Payment[]> {
    return this.http.get(this.serviceUrl)
               .toPromise()
               .then(response => response.json().data as Payment[])
               .catch(this.handleError);
  }

  // getPayment(id: number): Promise<Payment> {
  //   const url = `${this.serviceUrl}/${id}`;
  //   return this.http
  //              .get(url)
  //              .toPromise()
  //              .then(response => response.json().data as Payment)
  //              .catch(this.handleError);
  // }

  // update(payment: Payment): Promise<Payment> {
  //   const url = `${this.serviceUrl}/${payment.id}`;
  //   return this.http
  //              .put(url, JSON.stringify(payment), {headers: this.headers})
  //              .toPromise()
  //              .then(() => payment)
  //              .catch(this.handleError);
  // }

  // create(payment: any): Promise<Payment> {
  //   return this.http
  //              .post(this.serviceUrl, JSON.stringify(payment), {headers: this.headers})
  //              .toPromise()
  //              .then((response) => response.json().data as Payment)
  //              .catch(this.handleError);
  // }

  // delete(id: number): Promise<void> {
  //   const url = `${this.serviceUrl}/${id}`;
  //   return this.http
  //              .delete(url, {headers: this.headers})
  //              .toPromise()
  //              .then(() => null)
  //              .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
