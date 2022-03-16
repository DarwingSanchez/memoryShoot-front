import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { RegisterComponent } from './components/register/register.component';
import { CalculadoraAlbumComponent } from './components/calculadora-album/calculadora-album.component';
import { CalculadoraCalendarioComponent } from './components/calculadora-calendario/calculadora-calendario.component';
import { CalculadoraCamisetaComponent } from './components/calculadora-camiseta/calculadora-camiseta.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'admin', component: AdminComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'client', component: ClientComponent },
  { path: 'payment-methods', component: PaymentMethodsComponent },
  {path: 'calculadora-album', component: CalculadoraAlbumComponent},
  {path: 'calculadora-calendario', component: CalculadoraCalendarioComponent},
  {path: 'calculadora-camiseta', component: CalculadoraCamisetaComponent},
  {path: 'fotos', component: FotosComponent},
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
