import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClientComponent } from './components/client/client.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ClientComponent,
    CommentsComponent,
    PaymentMethodsComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
