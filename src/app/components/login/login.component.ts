import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {}
  login() {
    if (
      !this.userService.selectedUser.email ||
      !this.userService.selectedUser.password
    )
      throw 'Uno o más campos estan vacios';
    this.userService.login(this.userService.selectedUser).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        console.log(res);
        this.router.navigate(['/client']);
      },
      error: (err: any) => console.log(err),
    });
  }
}
