import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  '../models/user';
import { JwtResponse } from  '../models/jwt-response';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { ResponseMessage} from '../models/response-message'
import { Email } from '../models/email';
import {ForgotPassword} from '../models/forgotpassword';
import { LinkemailComponent } from '../components/linkemail/linkemail.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   
  AUTH_SERVER = "/web-api/user";

  authSubject  =  new  BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }


  register(user: User): Observable<JwtResponse> {  

     return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/new`, user, httpOptions).pipe(
      tap((res:  JwtResponse ) => {
         if (res.status==1) {
           console.log(res);
           localStorage.setItem("email_message", res.todo.verifyEmail);
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

code(e: Email):Observable<ResponseMessage> {
    return this.httpClient.post<ResponseMessage>(`${this.AUTH_SERVER}/forgotpassword`,e, httpOptions).pipe(
      tap(async (res: ResponseMessage) => {
          this.authSubject.next(true);
        
      })
    );
  }


  codeChangePassword(f : ForgotPassword):Observable<ResponseMessage> {
    return this.httpClient.put<ResponseMessage>(`${this.AUTH_SERVER}/forgotpassword.newpassword`,f,httpOptions).pipe(
      tap(async (res: ResponseMessage) => {
          console.log (res.status +"\n"+ res.message);
              this.authSubject.next(true);   
        
      })
    );
  }
isAuthenticated() {

    return  this.authSubject.asObservable();


}
resend(): Observable<ResponseMessage> {

  return this.httpClient.get<ResponseMessage>(`${this.AUTH_SERVER}/confirmation/verify-email/resend-email`);
  }


linkEmail(userID: string): Observable<ResponseMessage> {
  return this.httpClient.get<ResponseMessage>(`${this.AUTH_SERVER}/confirmation/verify-email.${userID}`).pipe(
    tap(async (res: ResponseMessage) => {
        console.log(res);
    })
  );
  }


  linkemail(): Observable<ResentMessage> {
    return this.httpClient.get<ResentMessage>(`${this.AUTH_SERVER}/confirmation/verify-email.{userID}`);
  }


  // logout() {
  //     return this.httpClient.get<logoutStatus>('api/logout.php')
  // }

 
}


