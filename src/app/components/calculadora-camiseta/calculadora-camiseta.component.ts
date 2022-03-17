import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admService/admin.service';

@Component({
  selector: 'app-calculadora-camiseta',
  templateUrl: './calculadora-camiseta.component.html',
  styleUrls: ['./calculadora-camiseta.component.css'],
})
export class CalculadoraCamisetaComponent implements OnInit {
  id = 2517;
  created = '';
  imagenDesignCamiseta: Design = {};
  numeroFotosCamiseta = 0;
  precioFotoCamiseta = 1000;

  constructor(public admService: AdminService) {}

  CalculadoraCamiseta = {
    numeroFotos: this.numeroFotosCamiseta,
    total: this.subtotal(),
    id: this.id,
    created: this.created,
  };
  ngOnInit(): void {}
  costoFotosCamiseta() {
    return this.numeroFotosCamiseta * this.precioFotoCamiseta;
  }
  subtotal(): number {
    return (
      this.numeroFotosCamiseta * this.precioFotoCamiseta +
      (this.imagenDesignCamiseta.precio || 0)
    );
  }

  createOrder() {
    const date = new Date();
    let day = date.getDate(); // Día del mes
    let month = date.getMonth(); // Mes del año, del 0 al 11, 0 siendo Enero
    let year = date.getFullYear(); // Trae el año
    this.updateInfo();
    const newSale = {
      productID: this.CalculadoraCamiseta.id,
      totalPrice: this.CalculadoraCamiseta.total,
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
    this.CalculadoraCamiseta = {
      numeroFotos: this.numeroFotosCamiseta,
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