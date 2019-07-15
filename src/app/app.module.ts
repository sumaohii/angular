import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { MaincontentComponent } from './components/Maincontent/maincontent.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent
  ]
})
export class AppModule { }
