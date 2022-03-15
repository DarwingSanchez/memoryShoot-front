import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-calendario',
  templateUrl: './calculadora-calendario.component.html',
  styleUrls: ['./calculadora-calendario.component.css']
})
export class CalculadoraCalendarioComponent implements OnInit {
  tipoMaterial = '0';
  numeroFotosCalendar = 0;
  precioFotoCalendar = 1000;
  imagenDesignCalendar: Design = {};
  
  constructor() { }

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

}
interface Design {
  precio?: number;
  url?: '';
}
