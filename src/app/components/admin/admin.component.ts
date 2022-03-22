import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admService/admin.service';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/app/models/userModel';
import { environment } from 'src/environments/environment';




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
  public adminInfo: User | null = null

  url_api = `${environment.API_URL}/`.replace('/api', '');

  constructor(
    private admService : AdminService,
    public userService: UserService,
  ) {
    this.date = new Date;
  }

  ngOnInit(): void {
    this.getAdminInfo()
    this.date = new Date
    this.getHour()
    this.createNewVisit()
  }

  getAdminInfo() {
    this.adminInfo = this.userService.decodeToken()
  }

  createNewVisit(){
    this.admService.getApiAdress()
  }

  chooseMenu(option: string){
    switch (option) {
      case 'home':
        this.menuChoosed = 'home'
        break;
      case 'ventas':
        this.menuChoosed = 'ventas'
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
    this.hour > 11 && this.hour <= 17 ? this.saludo='Buenas tardes' :
    this.saludo = 'Buenas noches'
  }
}
