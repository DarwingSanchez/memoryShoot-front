import { Component, OnInit } from '@angular/core';
import { AdmHomeComponent } from '../adm-home/adm-home.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public date = new Date
  public hour: number = 0
  public saludo : string = '';
  public menuChoosed : string = 'home'

  public admInfo = {
    name: 'Darwing'
  }

  constructor() { }

  ngOnInit(): void {
    this.getHour()
    this.getAdmInfo()
  }

  getAdmInfo(){

  }

  chooseMenu(option: string){
    switch (option) {
      case 'home':
        this.menuChoosed = 'home'
        break;
      case 'ventas':
        this.menuChoosed = 'ventas'
        break;
      case 'usuarios':
        this.menuChoosed = 'home'
        break;
      case 'ordenes':
        this.menuChoosed = 'ordenes'
        break;
      default:
        break;
    }
  }

  getHour(){
    this.hour = this.date.getHours()
    this.hour >= 0 && this.hour <= 11 ? this.saludo='Buenos días' :
    this.hour < 11 && this.hour <= 5 ? this.saludo='Buenas tardes' :
    this.saludo = 'Buenas noches'
  }
}
