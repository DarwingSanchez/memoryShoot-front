import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-camiseta',
  templateUrl: './calculadora-camiseta.component.html',
  styleUrls: ['./calculadora-camiseta.component.css']
})
export class CalculadoraCamisetaComponent implements OnInit {
  imagenDesignCamiseta: Design = {};
  numeroFotosCamiseta = 0;
  precioFotoCamiseta = 1000;

  constructor() { }

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

  createOrder(){

  }

}
interface Design {
  precio?: number;
  url?: '';
}
