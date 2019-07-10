import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { passValidator} from './confirmpassword';

@Component({
  selector: 'app-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register.component.css', './../login/css/main.css','./../login/css/util.css' ]
})
export class RegisterComponent implements OnInit {
  message:any;
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
    this.authService.register(form.value).subscribe(
      (res) => { this.message=res.message;
        if (res.status==1) {console.log(this.message);
        this.router.navigateByUrl('/verifyemail'); }},

     (err) => {console.log("Username or password is already taken!")})

      // if (res.status==1)
      // {
      // // console.log(res.message);
      // this.router.navigateByUrl('/verifyemail');
      // }
      // else if (res.status==0) console.log(res.message);
      
    
  }
  
  }
  
  
