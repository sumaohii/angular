import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from '../register/register.component';
import {AuthService} from 'src/app/services/auth.service'
@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {
message: any;
  constructor(private register: RegisterComponent, private authService: AuthService) { }

  ngOnInit() {
    //console.log(this.register.emailMessage);
    this.message=localStorage.getItem("email_message");
    
  }
resendEmail(){
  this.authService.resend();
}
}