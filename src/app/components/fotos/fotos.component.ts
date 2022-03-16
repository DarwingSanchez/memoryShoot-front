import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  numeroFotosImprimir = 0;
  precioFotosImprimir = 1000;

  constructor() { }

  ngOnInit(): void {}
  costoFotosImprimir() {
    return this.numeroFotosImprimir * this.precioFotosImprimir;
  }
  subtotal(): number {
    return (
      this.numeroFotosImprimir * this.precioFotosImprimir
    );
  }

  createOrder(){

  }

}
