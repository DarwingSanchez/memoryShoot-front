import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { AdmOrdersComponent } from './components/adm-orders/adm-orders.component';
import { ClientComponent } from './components/client/client.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ImagenesMultiplesComponent } from './components/imagenes-multiples/imagenes-multiples.component';

import { BannerCarruselComponent } from './components/banner-carrusel/banner-carrusel.component';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraAlbumComponent } from './components/calculadora-album/calculadora-album.component';

import { CalculadoraCalendarioComponent } from './components/calculadora-calendario/calculadora-calendario.component';
import { NgxMaskModule } from 'ngx-mask';
import { CalculadoraCamisetaComponent } from './components/calculadora-camiseta/calculadora-camiseta.component';
import { FotosComponent } from './components/fotos/fotos.component';

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
    AdmOrdersComponent,
    ClientComponent,
    CommentsComponent,
    PaymentMethodsComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    NosotrosComponent,
    BannerCarruselComponent,
    HomeComponent,
    CalculadoraAlbumComponent,
    CalculadoraCalendarioComponent,
    CalculadoraCamisetaComponent,
    FotosComponent,
    ImagenesMultiplesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
