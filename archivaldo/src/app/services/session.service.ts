import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SessionService {

  constructor(private http:Http) { }
  BASE_URL = 'http://localhost:3000/users'
  login(auth){
    return this.http.post(`${this.BASE_URL}/login`, auth, {withCredentials:true})
    .map(res=>res.json())
    .catch(e=>Observable.throw(e))
  }

}
