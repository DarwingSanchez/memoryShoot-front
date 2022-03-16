import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
token : string | null = ""
usuario : any
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getToken()
  }
logOut(){
  this.userService.logout()
}
getToken(){
  this.usuario = this.userService.decodeToken()
  console.log("getTokenNavbar", this.usuario)
}
}
