import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admService/admin.service';
import { UserService } from 'src/app/services/userService/user.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-calculadora-calendario',
  templateUrl: './calculadora-calendario.component.html',
  styleUrls: ['./calculadora-calendario.component.css'],
})
export class CalculadoraCalendarioComponent implements OnInit {
  id = 2516;
  created = '';
  tipoMaterial = '0';
  numeroFotosCalendar = 0;
  precioFotoCalendar = 1000;
  imagenDesignCalendar: Design = {};

  constructor(
    public admService: AdminService,
    public userService: UserService,
    public router: Router
  ) {}

  CalculadoraCalendario = {
    tipoMaterial: this.tipoMaterial,
    numeroFotos: this.numeroFotosCalendar,
    total: this.subtotal(),
    id: this.id,
    created: this.created,
  };

  ngOnInit(): void {}
  costoFotosCalendar() {
    return this.numeroFotosCalendar * this.precioFotoCalendar;
  }
  subtotal(): number {
    return (
      this.numeroFotosCalendar * this.precioFotoCalendar +
      parseInt(this.tipoMaterial) +
      (this.imagenDesignCalendar.precio || 0)
    );
  }

  createOrder() {
    let ordenCreada = {};
    const date = new Date();
    let day = date.getDate(); // Día del mes
    let month = date.getMonth(); // Mes del año, del 0 al 11, 0 siendo Enero
    let year = date.getFullYear(); // Trae el año
    this.updateInfo();
    const newSale = {
      productID: this.CalculadoraCalendario.id,
      totalPrice: this.CalculadoraCalendario.total,
      created: `${day}/${month + 1}/${year}`,
    };
    console.log('nueva venta', newSale);
    this.admService.createSale(newSale).subscribe({
      next: (data) => {
        ordenCreada = data;
        console.log(data);
        const nuevaOrden = {
          saleID: data._id,
          address: 'calle 8 # 36a - 22',
          city: 'Bogotá',
          state: 'Cundinamarca',
          status: true,
          created: data.created,
        };
        this.admService.createOrder(nuevaOrden).subscribe({
          next: (data) => {
            const token = this.userService.decodeToken();
            Swal.fire({
              position: 'center',
              icon: 'success',
              text: `Gracias por tu compra`,
              showConfirmButton: true,
            });
            this.router.navigate(['/client']);
            this.userService.crearOrden(token.user_id, ordenCreada).subscribe({
              next: (data) => {
                console.log(data);
              },
              error: (error) => {
                console.log(error);
              },
            });
            console.log('nueva orden', data);
          },
          error: (error) => console.log(error),
        });
      },
      error: (error) => console.log(error),
    });
  }
  updateInfo() {
    this.CalculadoraCalendario = {
      tipoMaterial: this.tipoMaterial,
      numeroFotos: this.numeroFotosCalendar,
      total: this.subtotal(),
      id: this.id,
      created: this.created,
    };
  }
}
interface Design {
  precio?: number;
  url?: '';
}
