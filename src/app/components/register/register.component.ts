import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {}

  register() {
    const date = new Date();
    let dia = date.getDay();
    let mes = date.getMonth();
    let year = date.getFullYear();

    this.userService.selectedUser.created = `${dia}/${mes}/${year}`;
    const {
      phone,
      username,
      email,
      password,
      confirmPassword,
      permissions,
      created,
    } = this.userService.selectedUser;

    console.log(this.userService.selectedUser);
    if (!phone || !username || !email || !password || !confirmPassword) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Uno o mas campos estan vacios',
        showConfirmButton: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Las contraseñas no coinciden',
        showConfirmButton: true,
      });
      this.userService.selectedUser.password = '';
      this.userService.selectedUser.confirmPassword = '';
      return;
    }

    this.userService
      .register({ email, password, username, phone, permissions, created })
      .subscribe({
        next: () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: `Usuario creado correctamente`,
            showConfirmButton: true,
          });
          this.router.navigate(['/login']);
        },
        error: () => {},
      });
  }
}
