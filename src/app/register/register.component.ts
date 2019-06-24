import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import {Location} from '@angular/common';
import User from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          email: ['', [Validators.required, Validators.email]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}  
//   user = new User();
//   submitted = false;

//   constructor(
//     private userService: UserService,
//     private location: Location,
//     private router: Router
//   ) { }
  
//   addUser(): void {
//     if(this.user!=null)
//     {
//       this.submitted = false;
//       this.user = new User();
//       this.save();
//       this.router.navigateByUrl('/profile');
//     }
//   }
//   private save(): void {
//     console.log(this.user);
//     this.userService.addUser(this.user).subscribe();
//   }

// }