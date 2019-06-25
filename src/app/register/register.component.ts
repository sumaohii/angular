import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AuthService } from './../auth/auth.service'


import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  


  form = new FormGroup ({  

    

    userName: new FormControl('',Validators.required),
    passWord: new FormControl('',[Validators.required, Validators.minLength(8)]),
    email: new FormControl('',[Validators.required, Validators.email])

  })
  
  constructor(private authService: AuthService, private router: Router) { }

  

  ngOnInit() {}

 register(form) {
    console.log(form.value);
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('login');
    });
  }
  }

  

