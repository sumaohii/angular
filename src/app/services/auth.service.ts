import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  '../models/user';
import { JwtResponse } from  '../models/jwt-response';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { ResponseMessage} from '../models/response-message'
import { Email } from '../models/email';
import {ForgotPassword} from '../models/forgotpassword';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
// };
const headers = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   
  AUTH_SERVER = "/web-api/user";

  authSubject  =  new  BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }


  register(user: User): Observable<JwtResponse> {  

     return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/new`, user).pipe(
      tap((res:  JwtResponse ) => {
         if (res.status==1) {
           console.log(res);
           sessionStorage.setItem("email_message", res.todo.verifyEmail);
           sessionStorage.setItem("email", res.data.user.email );
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

          sessionStorage.setItem("ACCESS_TOKEN", res.data.token);       

          this.authSubject.next(true);
        }
      })
    );
  }

code(e: Email):Observable<ResponseMessage> {
    return this.httpClient.post<ResponseMessage>(`${this.AUTH_SERVER}/forgotpassword`,e).pipe(
      tap(async (res: ResponseMessage) => {
         sessionStorage.setItem("codeid", res.data.codeID);
          this.authSubject.next(true);
        
      })
    );
  }
  codeChangePassword(f : ForgotPassword, codeid:string):Observable<ResponseMessage> {
    return this.httpClient.put<ResponseMessage>(`${this.AUTH_SERVER}/forgotpassword.newpassword`,f,{headers: headers.append("codeid",codeid)}).pipe(

      tap(async (res: ResponseMessage) => {
       
          console.log (res.status +"\n"+ res.message);
              this.authSubject.next(true);   
        
      })
    );
  }
isAuthenticated() {

    return  this.authSubject.asObservable();


}
resend(e: Email): Observable<ResponseMessage> {
  console.log(e);
  return this.httpClient.post<ResponseMessage>(`${this.AUTH_SERVER}/confirmation/verify-email/resend-email`, e).pipe(
    tap(async (res: ResponseMessage) => {
        console.log(res.message);
    })
  );
  }


linkEmail(userID: string): Observable<ResponseMessage> {
  return this.httpClient.get<ResponseMessage>(`${this.AUTH_SERVER}/confirmation/verify-email.${userID}`).pipe(
    tap(async (res: ResponseMessage) => {
        console.log(res);
    })
  );
  }



  // logout() {
  //     return this.httpClient.get<logoutStatus>('api/logout.php')
  // }

 
}


