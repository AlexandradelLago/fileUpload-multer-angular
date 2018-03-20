import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class FileService {

  constructor(private http:Http) { }

  singleFile(formData){
    return this.http.post('http://localhost:3000/single', formData)
    .map(res=>res.json())
    .catch(e=>Observable.throw(e));
  }

  arrayFiles(formData){
    return this.http.post('http://localhost:3000/array', formData)
    .map(res=>res.json())
    .catch(e=>Observable.throw(e));
  }

  multipleFiles(formData){
    return this.http.post('http://localhost:3000/multiple', formData, {withCredentials:true})
    .map(res=>res.json())
    .catch(e=>Observable.throw(e));
  }
  
}
