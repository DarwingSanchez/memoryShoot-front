import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admService/admin.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
})
export class FotosComponent implements OnInit {
  id = 2518;
  created = '';
  numeroFotosImprimir = 0;
  precioFotosImprimir = 1000;

  constructor(public admService: AdminService) {}

  Fotos = {
    numeroFotos: this.numeroFotosImprimir,
    total: this.subtotal(),
    id: this.id,
    created: this.created,
  };

  ngOnInit(): void {}
  costoFotosImprimir() {
    return this.numeroFotosImprimir * this.precioFotosImprimir;
  }
  subtotal(): number {
    return this.numeroFotosImprimir * this.precioFotosImprimir;
  }

  createOrder() {
    const date = new Date();
    let day = date.getDate(); // Día del mes
    let month = date.getMonth(); // Mes del año, del 0 al 11, 0 siendo Enero
    let year = date.getFullYear(); // Trae el año
    this.updateInfo();
    const newSale = {
      productID: this.Fotos.id,
      totalPrice: this.Fotos.total,
      created: `${day}/${month + 1}/${year}`,
    };
    console.log('nueva venta', newSale);
    this.admService.createSale(newSale).subscribe({
      next: (data) => {
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
          next: (data) => console.log(data),
          error: (error) => console.log(error),
        });
      },
      error: (error) => console.log(error),
    });
  }
  updateInfo() {
    this.Fotos = {
      numeroFotos: this.numeroFotosImprimir,
      total: this.subtotal(),
      id: this.id,
      created: this.created,
    };
  }
}
