import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AuthService } from './../auth/auth.service'
import { User } from './../auth/user';
import { Router } from '@angular/router';
import {passValidator} from './confirmpassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form = new FormGroup ({  
    username: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    confirmpassword: new FormControl('',[Validators.required,passValidator])
    
  }) 
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {}

 register(form) {
  console.log(form.value);
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('/verifyemail');
      
    });
  }
  
  }
  
  
