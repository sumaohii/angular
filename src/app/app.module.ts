import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClient } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { AuthService } from './services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AlertComponent } from './components/shared-components/alert/alert.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';
import { WelcomeComponent} from './pages/welcome/welcome.component';
import { FooterComponent } from './components/shared-components/footer/footer.component';
import { SidebarComponent } from './components/shared-components/sidebar/sidebar.component';
import { NavbarComponent } from './components/shared-components/navbar/navbar.component';
import { NotificationsComponent } from './pages/user-homepage/notification/notifications.component';
import { DashboardComponent } from './pages/user-homepage/dashboard/dashboard.component';
import { AuthenticationComponent } from './pages/user-homepage/authentication/authentication.component';
import { InboxComponent } from './pages/user-homepage/inbox/inbox.component';
import { UserLayoutComponent } from './pages/user-homepage/user-layout/user-layout.component';
import { ProfileComponent } from './pages/user-homepage/profile/profile.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import * as $ from "jquery";
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AlertComponent,
    VerifyemailComponent,
    WelcomeComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    NotificationsComponent,
    DashboardComponent,
    AuthenticationComponent,
    InboxComponent,
    UserLayoutComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    BrowserAnimationsModule

  
  ],
  exports: [RouterModule],
  providers: [RegisterComponent,VerifyemailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
