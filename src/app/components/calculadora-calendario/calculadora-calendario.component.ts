import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admService/admin.service';

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
  
  constructor(public admService: AdminService) { }

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
    console.log()
  }
}
interface Design {
  precio?: number;
  url?: '';
}
