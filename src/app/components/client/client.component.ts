import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/userService/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  public imageUrl: string = '';
  public image: File | undefined = undefined;
  public user: User | undefined = undefined;
  url_api = `${environment.API_URL}/`.replace('/api', '');

  constructor(
    private sanitizer: DomSanitizer,
    public userService: UserService
  ) {
    const token = localStorage.getItem('token');
    const user: User | null = token ? jwt_decode(token) : null;
    if (user) this.user = user;
  }

  ngOnInit(): void {
    this.getOneUser();
  }

  capturarFile(event: any) {
    this.imageUrl = URL.createObjectURL(event.target.files[0]);
    this.image = event.target.files[0] || null;
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  uploadImage() {
    if (this.user && this.image) {
      this.userService
        .uploadProfilePicture(this.image, this.user.user_id)
        .subscribe({
          next: () => {
            console.log('done');
            this.getOneUser();
            location.reload();
          },
          error: () => console.log('error'),
        });
    }
  }

  getOneUser() {
    console.log(this.user);
    this.userService.getOneUser(this.user?.user_id).subscribe({
      next: (data) => {
        console.log(data);
        this.userService.selectedUser = data;
        console.log(this.userService.selectedUser);
      },
      error: (error) => console.log(error),
    });
  }
}
