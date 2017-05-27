import { Profile } from '../../models/profile';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {
  private serviceUrl = 'api/profiles';
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  getProfiles(): Promise<Profile[]> {
    return this.http.get(this.serviceUrl)
               .toPromise()
               .then(response => response.json().data as Profile[])
               .catch(this.handleError);
  }

  // getProfile(id: number): Promise<Profile> {
  //   const url = `${this.serviceUrl}/${id}`;
  //   return this.http
  //              .get(url)
  //              .toPromise()
  //              .then(response => response.json().data as Profile)
  //              .catch(this.handleError);
  // }

  // update(profile: Profile): Promise<Profile> {
  //   const url = `${this.serviceUrl}/${profile.id}`;
  //   return this.http
  //              .put(url, JSON.stringify(profile), {headers: this.headers})
  //              .toPromise()
  //              .then(() => profile)
  //              .catch(this.handleError);
  // }

  // create(name: string): Promise<Profile> {
  //   return this.http
  //              .post(this.serviceUrl, JSON.stringify({name: name}), {headers: this.headers})
  //              .toPromise()
  //              .then((response) => response.json().data as Profile)
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
