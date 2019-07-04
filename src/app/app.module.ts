import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClient } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { AuthService } from './services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AlertComponent } from './components/shared componets/alert/alert.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';
import { WelcomeComponent} from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AlertComponent,
    VerifyemailComponent,
    WelcomeComponent

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
