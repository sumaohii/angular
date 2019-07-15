import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { passValidator} from './confirmpassword';
import {AlertService} from '../../components/alert/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register.component.css', './../login/css/main.css','./../login/css/util.css' ]
})
export class RegisterComponent implements OnInit {

    form = new FormGroup ({  
    username: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    confirmpassword: new FormControl('',[Validators.required,passValidator])
    
  }) 
  constructor(private authService: AuthService, private router: Router, private alertService: AlertService) { }
  ngOnInit() {}

 register(form) {
  console.log(form.value);
    this.authService.register(form.value).subscribe(
      (res) => {
        if (res.status==1) {
            console.log(res.message);
            this.alertService.success(res.message +" Redirecting...");
            setTimeout(() => {this.router.navigateByUrl('/verifyemail');},3000); 
          }
        else if (res.status==0) { console.log(res.message);
          this.alertService.error(res.message)
        }    
     
  })
  
  }
}
  
