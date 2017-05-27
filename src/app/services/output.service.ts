import { Output } from '../../models/output';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OutputService {
  private serviceUrl = 'api/outputs';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  getOutputs(): Promise<Output[]> {
    return this.http.get(this.serviceUrl)
               .toPromise()
               .then(response => response.json().data as Output[])
               .catch(this.handleError);
  }

  // getOutput(id: number): Promise<Output> {
  //   const url = `${this.serviceUrl}/${id}`;
  //   return this.http
  //              .get(url)
  //              .toPromise()
  //              .then(response => response.json().data as Output)
  //              .catch(this.handleError);
  // }

  // update(output: Output): Promise<Output> {
  //   const url = `${this.serviceUrl}/${output.id}`;
  //   return this.http
  //              .put(url, JSON.stringify(output), {headers: this.headers})
  //              .toPromise()
  //              .then(() => output)
  //              .catch(this.handleError);
  // }

  create(output: any): Promise<Output> {
    return this.http
               .post(this.serviceUrl, JSON.stringify(output), {headers: this.headers})
               .toPromise()
               .then((response) => response.json().data as Output)
               .catch(this.handleError);
  }

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
