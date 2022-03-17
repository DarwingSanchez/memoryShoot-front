import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admService/admin.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-calculadora-album',
  templateUrl: './calculadora-album.component.html',
  styleUrls: ['./calculadora-album.component.css'],
})
export class CalculadoraAlbumComponent implements OnInit {
  id = 2515;
  created = '';
  tipoPortada = '0';
  numeroFotos = 0;
  precioFoto = 1000;
  imagenDesign: Design = {};

  subTotal = 0;

  CalculadoraAlbum = {
    tipoPortada: this.tipoPortada,
    numeroFotos: this.numeroFotos,
    total: this.subtotal(),
    id: this.id,
    created: this.created,
  };

  constructor(
    public admService: AdminService,
    public userService: UserService
  ) {}

  ngOnInit(): void {}

  costoFotos() {
    return this.numeroFotos * this.precioFoto;
  }

  subtotal(): number {
    return (
      this.numeroFotos * this.precioFoto +
      parseInt(this.tipoPortada) +
      (this.imagenDesign.precio || 0)
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
      productID: this.CalculadoraAlbum.id,
      totalPrice: this.CalculadoraAlbum.total,
      created: `${day}/${month + 1}/${year}`,
    };
    console.log('nueva venta', newSale);
    this.admService.createSale(newSale).subscribe({
      next: (data) => {
        ordenCreada = data;
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
    this.CalculadoraAlbum = {
      tipoPortada: this.tipoPortada,
      numeroFotos: this.numeroFotos,
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
