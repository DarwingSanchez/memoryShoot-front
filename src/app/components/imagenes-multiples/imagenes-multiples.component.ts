import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/userService/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-imagenes-multiples',
  templateUrl: './imagenes-multiples.component.html',
  styleUrls: ['./imagenes-multiples.component.css'],
})
export class ImagenesMultiplesComponent implements OnInit {
  public images: FileList | undefined = undefined;
  public imagesArray: Array<any> = [];
  public user: User | undefined = undefined;
  constructor(
    private sanitizer: DomSanitizer,
    private userService: UserService
  ) {
    const token = localStorage.getItem('token');
    const user: User | null = token ? jwt_decode(token) : null;
    if (user) this.user = user;
  }

  ngOnInit(): void {}
  displayImages(event: any) {
    this.images = event.target.files;
    this.imagesArray = Array.from(event.target.files);
  }

  getFileUrl(file: File) {
    let fileUrl = URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustUrl(fileUrl);
  }
  cargar() {
    if (this.user)
      this.userService.saveImages(this.images!, this.user.user_id).subscribe({
        next: () => console.log('net'),
        error: () => console.log('error'),
      });
  }
}
