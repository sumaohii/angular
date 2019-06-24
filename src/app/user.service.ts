import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import  User from './user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3000/web-api';
  url2= 'http://localhost:3000/hello';
  constructor(private http: HttpClient) { }

  // addUser(UserName, PassWord, Email) {
  //   const obj = {
  //     UserName,
  //     PassWord,
  //     Email
  //   };
  //   console.log(obj);
  //   this.http.post(`${this.url}/new`, obj)
  //       .subscribe(res => console.log('Done'));
  // }
  addUser (user: User) {
    return this.http.post<any>(this.baseUrl +'/new', user);
  }
  login(User) {
    return this.http.post<any>(this.baseUrl + '/login', User);
  }
  getHello(): Observable<any>{
    return this.http.get<any>(this.url2);
}
}