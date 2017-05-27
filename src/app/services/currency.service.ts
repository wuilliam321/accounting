import { Currency } from '../../models/currency';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CurrencyService {
  private serviceUrl = 'api/currencies';
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  getCurrencies(): Promise<Currency[]> {
    return this.http.get(this.serviceUrl)
               .toPromise()
               .then(response => response.json().data as Currency[])
               .catch(this.handleError);
  }

  // getCurrency(id: number): Promise<Currency> {
  //   const url = `${this.serviceUrl}/${id}`;
  //   return this.http
  //              .get(url)
  //              .toPromise()
  //              .then(response => response.json().data as Currency)
  //              .catch(this.handleError);
  // }

  // update(currency: Currency): Promise<Currency> {
  //   const url = `${this.serviceUrl}/${currency.id}`;
  //   return this.http
  //              .put(url, JSON.stringify(currency), {headers: this.headers})
  //              .toPromise()
  //              .then(() => currency)
  //              .catch(this.handleError);
  // }

  // create(currency: any): Promise<Currency> {
  //   return this.http
  //              .post(this.serviceUrl, JSON.stringify(currency), {headers: this.headers})
  //              .toPromise()
  //              .then((response) => response.json().data as Currency)
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
