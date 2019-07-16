import { Component, OnInit } from '@angular/core';
import { RegisterComponent} from '../register/register.component';
import { AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {
message: any;
form: FormGroup;
  constructor(private register: RegisterComponent, private auth: AuthService, private router:Router, private fb: FormBuilder) { }


  ngOnInit() {
    this.message=sessionStorage.getItem("email_message");
    this.form = this.fb.group({
      email: ['', Validators.required] });
    
  }

  resentEmail() {
    this.form.setValue({email: sessionStorage.getItem("email")});
    sessionStorage.removeItem("email_message");
    return this.auth.resend(this.form.value).subscribe((res) => {
      console.log(res.message);
      // this.router.navigateByUrl('/login');

    })
  }
}