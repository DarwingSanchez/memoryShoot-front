import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admService/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public date: Date;
  public hour: number = 0;
  public saludo : string = '';
  public menuChoosed : string = 'home'


  public admInfo = {
    name: 'Darwing'
  }

  constructor(
    private admService : AdminService
  ) {
    this.date = new Date;
  }

  ngOnInit(): void {
    this.date = new Date
    this.getHour()
    this.getAdmInfo()
    this.createNewVisit()
  }

  createNewVisit(){
    this.admService.getApiAdress()
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
    console.log(this.hour)
    this.hour >= 0 && this.hour <= 11 ? this.saludo='Buenos días' :
    this.hour > 11 && this.hour <= 17 ? this.saludo='Buenas tardes' :
    this.saludo = 'Buenas noches'
  }
}
