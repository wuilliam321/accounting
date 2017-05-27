import { Account } from '../../models/account';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {
  private serviceUrl = 'api/accounts';
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  getAccounts(): Promise<Account[]> {
    return this.http.get(this.serviceUrl)
               .toPromise()
               .then(response => response.json().data as Account[])
               .catch(this.handleError);
  }

  // getAccount(id: number): Promise<Account> {
  //   const url = `${this.serviceUrl}/${id}`;
  //   return this.http
  //              .get(url)
  //              .toPromise()
  //              .then(response => response.json().data as Account)
  //              .catch(this.handleError);
  // }

  // update(account: Account): Promise<Account> {
  //   const url = `${this.serviceUrl}/${account.id}`;
  //   return this.http
  //              .put(url, JSON.stringify(account), {headers: this.headers})
  //              .toPromise()
  //              .then(() => account)
  //              .catch(this.handleError);
  // }

  // create(account: any): Promise<Account> {
  //   return this.http
  //              .post(this.serviceUrl, JSON.stringify(account), {headers: this.headers})
  //              .toPromise()
  //              .then((response) => response.json().data as Account)
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
