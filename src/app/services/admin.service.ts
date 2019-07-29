import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  '../models/user';
import { JwtResponse } from  '../models/jwt-response';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { ResponseMessage} from '../models/response-message';

const headers = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  AUTH_SERVER = "/web-api/admin/dashboard";

  authSubject  =  new  BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }

  fetchAllNonKyc(){
    return this.httpClient.get(`${this.AUTH_SERVER}/kyc-verify`,{headers: headers.append("Authorization", sessionStorage.getItem("ACCESS_TOKEN"))}).pipe(
      tap(async (res) => {
          console.log(res);
          this.authSubject.next(true); 
      })
    );
    }
}
