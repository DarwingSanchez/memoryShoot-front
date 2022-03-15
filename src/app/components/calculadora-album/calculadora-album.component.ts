import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-album',
  templateUrl: './calculadora-album.component.html',
  styleUrls: ['./calculadora-album.component.css'],
})
export class CalculadoraAlbumComponent implements OnInit {
  tipoPortada = '0';
  numeroFotos = 0;
  precioFoto = 1000;
  imagenDesign: Design = {};

  constructor() {}

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
  
}

interface Design {
  precio?: number;
  url?: '';
}
