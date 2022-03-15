import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerCarruselComponent } from './components/banner-carrusel/banner-carrusel.component';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraAlbumComponent } from './components/calculadora-album/calculadora-album.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraCalendarioComponent } from './components/calculadora-calendario/calculadora-calendario.component';
import { NgxMaskModule } from 'ngx-mask';
import { CalculadoraCamisetaComponent } from './components/calculadora-camiseta/calculadora-camiseta.component';
import { FotosComponent } from './components/fotos/fotos.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerCarruselComponent,
    HomeComponent,
    CalculadoraAlbumComponent,
    CalculadoraCalendarioComponent,
    CalculadoraCamisetaComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
