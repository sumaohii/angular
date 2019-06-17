import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  angForm: any;
  fb: any;
  ps: any;
  
   ngOnInit() {
     
   }

  //   angForm : FormGroup;
  // constructor(private fb: FormBuilder, private ps: UserService) {
  //  this.createForm();
  //   }

   createForm() {
    this.angForm = this.fb.group({
      UserName: ['', Validators.required ],
      PassWord: ['', Validators.required ],
      Email: ['', Validators.required ]
    });

  }
   addUser(UserName, PassWord, Email) {
     this.ps.addUser(UserName, PassWord, Email);
   }
}
