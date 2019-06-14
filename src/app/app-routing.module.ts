import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { 
    path: 'Register', 
    component: RegisterComponent
  },
  { 
    path: 'Login', 
    component: LoginComponent
  },
  {
    path: 'Profile',
    component: ProfileComponent
  },
  { 
    path: '', 
    redirectTo: 'Login', 
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
