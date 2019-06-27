import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from './../register/register.component'
@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {
message: any;
  constructor(private register: RegisterComponent) { }

  ngOnInit() {
    //console.log(this.register.emailMessage);
    this.message=localStorage.getItem("email_message");
  }

}