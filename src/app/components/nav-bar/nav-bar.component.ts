import { Component, OnInit } from '@angular/core';
import { UploadImgService } from 'src/app/services/uploadImage/upload-img.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public imgRta = '';

  constructor(
    public uploadImageService : UploadImgService
  ) { }

  ngOnInit(): void {
  }

  onUpload(event: Event){
    console.log('Ejecuto el botón onUpload')
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0)
    if(file){
      this.uploadImageService.upload(file)
      .subscribe({
        next: data => {
          console.log(data)
        },
        error: err => {
          console.log(err)
        }
      })
    }
  }
}
