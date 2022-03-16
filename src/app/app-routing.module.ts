import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

import { Page404Component } from './components/page404/page404.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';

import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'client', component: ClientComponent },
  { path: 'payment-methods', component: PaymentMethodsComponent },
  { path: 'nosotros', component: NosotrosComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
