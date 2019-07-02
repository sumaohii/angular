import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  '../models/user';
import { JwtResponse } from  '../models/jwt-response';
import {  tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import {ResentMessage} from '../models/resent-email'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   
  AUTH_SERVER = "/web-api";

  authSubject  =  new  BehaviorSubject(false);

  register(user: User): Observable<JwtResponse> {  

     return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/new`, user, httpOptions)
     .pipe(
      tap((res:  JwtResponse ) => {
 
         if (res.statusCode==1) {
           console.log(res);
           localStorage.setItem("email_message", res.todo.verifyEmail);
           // localStorage.set("EXPIRES_IN", res.user.expires_in);
           this.authSubject.next(true);
         }
      })
    )
   }

   login(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
      tap(async (res: JwtResponse) => {
        console.log(res);
        if (res.data) {

          localStorage.setItem("ACCESS_TOKEN", res.data.token);       

          this.authSubject.next(true);
        }
      })
    );
  }


  isAuthenticated() {
    return  this.authSubject.asObservable();
}
resend() {
  return this.httpClient.get(`${this.AUTH_SERVER}/confirmation/verify-email/resend-email`);
}
  constructor(private httpClient: HttpClient) { }
}

