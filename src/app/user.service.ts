import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/web-api';

  constructor(private http: HttpClient) { }

  addUser(UserName, PassWord, Email) {
    const obj = {
      UserName,
      PassWord,
      Email
    };
    console.log(obj);
    this.http.post(`${this.url}/new`, obj)
        .subscribe(res => console.log('Done'));
  }
  
}