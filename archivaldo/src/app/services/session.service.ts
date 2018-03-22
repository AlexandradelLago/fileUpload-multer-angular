import { Injectable, ViewContainerRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Injectable()
export class SessionService {

  constructor(
    private http:Http,
    private toastr:ToastsManager
  ) { 
  }
  BASE_URL = 'http://localhost:3000/users'
  login(auth){
    return this.http.post(`${this.BASE_URL}/login`, auth, {withCredentials:true})
    .map(res=>{
      return res.json()
    })
    .catch(e=>{
      this.toastr.error(e, 'Error');
      return Observable.throw(e)
    })
  }

}
