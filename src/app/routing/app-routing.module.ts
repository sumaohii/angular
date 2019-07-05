import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../pages/register/register.component';
import { LoginComponent } from '../pages/login/login.component';
import { ProfileComponent } from '../pages/user-homepage/profile/profile.component';
import { VerifyemailComponent } from '../pages/verifyemail/verifyemail.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { NotificationsComponent } from '../pages/user-homepage/notification/notifications.component';
import { DashboardComponent } from '../pages/user-homepage/dashboard/dashboard.component';
import { AuthenticationComponent } from '../pages/user-homepage/authentication/authentication.component';
import { InboxComponent } from '../pages/user-homepage/inbox/inbox.component';
import { UserLayoutComponent } from '../pages/user-homepage/user-layout/user-layout.component';

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
    path: 'user/dashboard',
    component: DashboardComponent
  },
  { 
    path: 'user/profile',   
    component: ProfileComponent 
  },
  { 
    path: 'user/authentication',     
  component: AuthenticationComponent 
},
  { 
    path: 'user/inbox',     
  component: InboxComponent  
},
  { 
    path: 'user/notifications',          
    component: NotificationsComponent 
  },
{
  path: 'user',
  redirectTo: 'user/profile',
  pathMatch: 'full'
},
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [{
      path: 'user',
      loadChildren: () => import(`../pages/user-homepage/user-layout/user-layout.module`).then(m => m.UserLayoutModule) 
    }]
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
