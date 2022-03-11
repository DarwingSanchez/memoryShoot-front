import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LandingStepsGirlComponent } from './components/landing-steps-girl/landing-steps-girl.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmHomeComponent } from './components/adm-home/adm-home.component';
import { AdmSalesComponent } from './components/adm-sales/adm-sales.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactoComponent,
    ProductosComponent,
    LandingStepsGirlComponent,
    AdminComponent,
    AdmHomeComponent,
    AdmSalesComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
