import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  form = new FormGroup ({  

    email: new FormControl('',[Validators.required, Validators.email]),

  })
  
    constructor(private auth : AuthService ) { }

  ngOnInit() {
  }

  codeEmail(form)
  {
    console.log(form.value);
    return this.auth.code(form.email).subscribe((res) => {
      console.log(res.message);
    })
  }

}

