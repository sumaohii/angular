import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { 
    path: 'register', 
    component: RegisterComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
