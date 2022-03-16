import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClientComponent } from './components/client/client.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ImagenesMultiplesComponent } from './components/imagenes-multiples/imagenes-multiples.component';

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
    NosotrosComponent,
    ImagenesMultiplesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
