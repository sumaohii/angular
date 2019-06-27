import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service'
import { User } from './../auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup ({  
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {}
  login(form){
    console.log(form.value);
    this.authService.login(form.value).subscribe(
      (res)=>{
        if (res.data) {
      console.log("Logged in!");
      this.router.navigateByUrl('/profile');}
    else  console.log ("Could not authenticate")});    
}
}