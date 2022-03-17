import { Injectable } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User;
  //url_api = 'http://localhost:5000/api/user'
  url_api = `${environment.API_URL}/user`;

  constructor(public http: HttpClient, public router: Router) {
    this.selectedUser = new User();
  }
  loggedIn() {
    return localStorage.getItem('token') ? true : false;
  }

  login(credentials: any) {
    return this.http.post(`${this.url_api}/login`, credentials);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  register(formUser: any) {
    return this.http.post(`${this.url_api}/create-user`, formUser);
  }

  uploadProfilePicture(image: File, userId: string) {
    const formData: FormData = new FormData();
    formData.append('file', image);
    return this.http.post(
      `${this.url_api}/upload-profile-picture/${userId}`,
      formData
    );
  }

  getOneUser(userId: any) {
    return this.http.get<User>(`${this.url_api}/get-one-user/${userId}`);
  }
  decodeToken(): any {
    let token = String(localStorage.getItem('token'));
    return jwt_decode(token || 'error');
  }
  saveImages(images: FileList, userId: string) {
    const formData: FormData = new FormData();

    Array.from(images).forEach((image) => {
      formData.append('files', image);
    });

    return this.http.post(`${this.url_api}/save-images/${userId}`, formData);
  }

  isAdmin() {
    const { permissions } = this.decodeToken();
    if (permissions.admin) return true;

    return false;
  }

  crearOrden(id: number, body: any) {
    return this.http.post(`${this.url_api}/crear-orden/${id}`, body);
  }
}
