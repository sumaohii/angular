import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user';
import { AlertService} from '../../components/alert/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login.component.css', './css/main.css', './css/util.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup ({  
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor(private authService: AuthService, private router: Router, private alertService: AlertService) { }
  ngOnInit() {}
  login(form){
    console.log(form.value);
    this.authService.login(form.value).subscribe(
      (res)=>{
        if (res.data) {
      console.log("Logged in! ");
      this.alertService.success(res.message+" Redirecting...");
      if(res.data.user.role=="user") setTimeout(() => {this.router.navigateByUrl('/dashboard');}, 2000);
      else if(res.data.user.role=="admin") setTimeout(() => {this.router.navigateByUrl('/admin-dashboard/verify-kyc');}, 2000);
        }
    else {
        console.log ("Could not authenticate");
        this.alertService.error(res.message);}
      });    
}
}