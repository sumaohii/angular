import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   

  constructor(private service: UserService) { }

  ngOnInit() {     

  }

}
