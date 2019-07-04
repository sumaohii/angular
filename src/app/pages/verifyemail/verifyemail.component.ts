import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from '../register/register.component';

import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {
message: any;

  constructor(private register: RegisterComponent, private auth: AuthService, private router:Router) { }


  ngOnInit() {
    this.message=localStorage.getItem("email_message");
    
  }

  resentEmail() {
    return this.auth.resend().subscribe((res) => {
      console.log(res.message);
      // this.router.navigateByUrl('/login');
    })
  }
}