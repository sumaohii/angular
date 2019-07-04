import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../pages/register/register.component';
import { LoginComponent } from '../pages/login/login.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { VerifyemailComponent } from '../pages/verifyemail/verifyemail.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';

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
    path: 'verifyemail',
    component: VerifyemailComponent
  },
  {

    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'user-profile',
    component: ProfileComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
