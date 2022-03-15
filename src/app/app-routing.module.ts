import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraAlbumComponent } from './components/calculadora-album/calculadora-album.component';
import { CalculadoraCalendarioComponent } from './components/calculadora-calendario/calculadora-calendario.component';
import { CalculadoraCamisetaComponent } from './components/calculadora-camiseta/calculadora-camiseta.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calculadora-album', component: CalculadoraAlbumComponent},
  {path: 'calculadora-calendario', component: CalculadoraCalendarioComponent},
  {path: 'calculadora-camiseta', component: CalculadoraCamisetaComponent},
  {path: 'fotos', component: FotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
