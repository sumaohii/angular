import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  '../models/user';
import { JwtResponse } from  '../models/jwt-response';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { ResponseMessage} from '../models/response-message';
import {AllNonKyc} from '../models/all-non-kyc';
import {KycUserDetail} from '../models/kyc-user-detail';
const headers = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  AUTH_SERVER = "/web-api/admin/dashboard";

  authSubject  =  new  BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }

  fetchAllNonKyc(): Observable<AllNonKyc>{
    return this.httpClient.get<AllNonKyc>(`${this.AUTH_SERVER}/kyc-verify`,{headers: headers.append("Authorization", sessionStorage.getItem("ACCESS_TOKEN"))}).pipe(
      tap(async (res) => {
          console.log(res.data);
          this.authSubject.next(true); 
      })
    );
    }

  userDetail(userId: string): Observable<KycUserDetail>{
    return this.httpClient.get<KycUserDetail>(`${this.AUTH_SERVER}/kyc-verify/${userId}`,{headers: headers.append("Authorization", sessionStorage.getItem("ACCESS_TOKEN"))}).pipe(
      tap(async (res: KycUserDetail) => {
        console.log(res.data[1].path);
        this.authSubject.next(true);
      })
    )
  }
}
