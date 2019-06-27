import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  './user';
import { JwtResponse } from  './jwt-response';
import { catchError, map, tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
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
    // let headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : 'http://142.93.253.93:81/web-api/new', 'Access-Control-Allow-Credentials':'true' });
    
  
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
          // localStorage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }


  isAuthenticated() {
    return  this.authSubject.asObservable();
}

  constructor(private httpClient: HttpClient) { }
}
