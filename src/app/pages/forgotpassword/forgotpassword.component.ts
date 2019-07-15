import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AlertService} from '../../components/alert/alert.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  form = new FormGroup ({  

    email: new FormControl('',[Validators.required, Validators.email]),

  })
  
    constructor(private auth : AuthService, private alert: AlertService, private router: Router ) { }

  ngOnInit() {
  }

  codeEmail(form)
  {
    console.log(form.value);
    return this.auth.code(form.value).subscribe((res) => {
      if (res.status==0) this.alert.error(res.message);
      else if (res.status==1) {
        console.log(res);
        this.alert.success("Code sent! Redirecting...");
        setTimeout(()=> {this.router.navigateByUrl('/forgotpasswordstep2')}, 3000);
       }
    })
  }

}

