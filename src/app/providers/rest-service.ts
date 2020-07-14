import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

let apiBaseUrl = 'http://localhost:8080/o/headless-delivery/v1.0/sites/';
let siteId = "xxx";
let apiUrl = apiBaseUrl + siteId + "/blog-postings?sort=dateCreated%3Adesc";
let username = 'test';
let password = 'test';
let token = btoa(username + ":" + password);
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.


*/
@Injectable()
export class RestService {

  constructor(
    public http: HttpClient) {
    console.log('Hello AuthService Provider');

  }

  getData(type){

    return new Promise((resolve, reject) =>{
      let headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + token + ''
      });

      console.log("Token: " + token);
      this.http.get(apiUrl+type, {headers}).
      subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });

    });

  }

}
