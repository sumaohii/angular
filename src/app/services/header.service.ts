import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';


@Injectable()
export class HeaderService {

    constructor() {    
    }

    addHeader(headerName: string, token:string){
       return new HttpHeaders().set(headerName, `Bearer ${token}`);
    }
}