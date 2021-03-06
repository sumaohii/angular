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
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { AlertComponent } from './components/alert/alert.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';
import { WelcomeComponent} from './pages/welcome/welcome.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component'
import { Forgotpasswordstep2Component } from './pages/forgotpasswordstep2/forgotpasswordstep2.component'
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { LinkemailComponent } from './components/linkemail/linkemail.component';
import { KycImageComponent } from './pages/kyc-image/kyc-image.component';
import { HeaderService} from './services/header.service';
import { VerifyKycComponent } from './pages/admin-dashboard/verify-kyc/verify-kyc.component';
import { MainDashboardComponent } from './pages/admin-dashboard/main-dashboard/main-dashboard.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    VerifyemailComponent,
    WelcomeComponent,
    ForgotpasswordComponent,
    Forgotpasswordstep2Component,
    WelcomeComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    LinkemailComponent,
    KycImageComponent,
    VerifyKycComponent,
    MainDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,

  
  ],
  exports: [RouterModule],
  providers: [RegisterComponent,VerifyemailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
