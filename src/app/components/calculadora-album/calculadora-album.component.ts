import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admService/admin.service';

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

  CalculadoraAlbum = {
    tipoPortada: this.tipoPortada,
    numeroFotos: this.numeroFotos,
    total: this.subtotal(),
    id: this.id,
    created: this.created,
  };

  constructor(public admService: AdminService) {}

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
    const date = new Date;
      let day = date.getDate(); // Día del mes
      let month = date.getMonth(); // Mes del año, del 0 al 11, 0 siendo Enero
      let year = date.getFullYear(); // Trae el año
    this.updateInfo();
    const newSale = {
      productID: this.CalculadoraAlbum.id,
      totalPrice: this.CalculadoraAlbum.total,
      created : `${day}/${month+1}/${year}`
    };
    console.log(newSale)
    this.admService.createSale(newSale)
    .subscribe({
      next: data => console.log(data),
      error: error => console.log(error), 
    })

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
