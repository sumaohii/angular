import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { passValidator } from '../register/confirmpassword';

@Component({
  selector: 'app-forgotpasswordstep2',
  templateUrl: './forgotpasswordstep2.component.html',
  styleUrls: ['./forgotpasswordstep2.component.css']
})
export class Forgotpasswordstep2Component implements OnInit {
  form = new FormGroup ({  
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    newcode: new FormControl('',[Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
    confirmpassword: new FormControl('',[Validators.required,passValidator])
  })
  constructor() { }

  ngOnInit() {
  }

}
