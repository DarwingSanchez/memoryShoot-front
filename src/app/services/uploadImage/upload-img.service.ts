import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {

  private API_URL = 'http://localhost:5200/api/charge-img'

  constructor(
    private http: HttpClient
  ) { }

  upload(file: Blob){
    const dto = new FormData();
    dto.append('image', file);
    return this.http.post(`${this.API_URL}/upload`,dto)
  }

}
