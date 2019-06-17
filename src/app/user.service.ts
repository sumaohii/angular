import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  
      constructor(private http: HttpClient) { }

        url = 'http://localhost:3000/web-api';

  addUser(UserName, PassWord, Email) {
    const obj = {
      UserName,
      PassWord,
      Email
    };
    console.log(obj);
    this.http.post(`${this.url}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

}