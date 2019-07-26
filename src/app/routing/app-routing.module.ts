import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../pages/register/register.component';
import { LoginComponent } from '../pages/login/login.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { VerifyemailComponent } from '../pages/verifyemail/verifyemail.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ForgotpasswordComponent } from '../pages/forgotpassword/forgotpassword.component'
import { Forgotpasswordstep2Component } from '../pages/forgotpasswordstep2/forgotpasswordstep2.component'
import { FooterComponent } from '../pages/footer/footer.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {LinkemailComponent} from '../components/linkemail/linkemail.component';
import {KycImageComponent} from '../pages/kyc-image/kyc-image.component'
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
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'forgotpasswordstep2',
    component: Forgotpasswordstep2Component
  },
  {
    path: 'user-profile',
    component: ProfileComponent
  },
  {path: 'dashboard',
component: DashboardComponent},

  { path: 'verify-account-email/:id',
    component: LinkemailComponent
  },
  
  {
    path: 'verify-by-images',
    component: KycImageComponent
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
