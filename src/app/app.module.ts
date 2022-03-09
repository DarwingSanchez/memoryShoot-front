import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LandingStepsGirlComponent } from './components/landing-steps-girl/landing-steps-girl.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactoComponent,
    ProductosComponent,
    LandingStepsGirlComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
