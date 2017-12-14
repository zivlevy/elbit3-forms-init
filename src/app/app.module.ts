import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login-1/login-1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Login2Component } from './login-2/login-2.component';
import { MakeRedDirective } from './directives/make-red.directive';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login1Component,
    Login2Component,
    MakeRedDirective,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
