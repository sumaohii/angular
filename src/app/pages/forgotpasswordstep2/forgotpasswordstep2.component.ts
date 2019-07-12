import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { passValidator } from '../register/confirmpassword';
import {AlertService} from '../../components/alert/alert.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-forgotpasswordstep2',
  templateUrl: './forgotpasswordstep2.component.html',
  styleUrls: ['./forgotpasswordstep2.component.css']
})
export class Forgotpasswordstep2Component implements OnInit {
  form = new FormGroup ({  
    newpassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
    code: new FormControl('',[Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
    confirmpassword: new FormControl('',[Validators.required,passValidator])
  })
  constructor(private auth : AuthService, private alert: AlertService, private router: Router) { }

  ngOnInit() {
  }
changePassword(form){
  console.log(form.value);
  return this.auth.codeChangePassword(form.value).subscribe((res) => {
    if (res.status==0) this.alert.error(res.message);
    else if (res.status==1) {
      console.log(res);
       this.alert.success(res.message +" Redirecting...");
      setTimeout(()=> {this.router.navigateByUrl('/login')}, 3000);
     }
  })
}
}
