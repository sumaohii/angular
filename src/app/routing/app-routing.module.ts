import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../components/common components/register/register.component';
import { LoginComponent } from '../components/common components/login/login.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { VerifyemailComponent } from '../components/common components/verifyemail/verifyemail.component';
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
