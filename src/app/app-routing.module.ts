import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
{path:'login', component: LoginComponent},
{path:'register', component: RegisterComponent},
{path:'payment', component: PaymentComponent},
{path:'payment-methods', component: PaymentMethodsComponent},



{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: '**', component: Page404Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
