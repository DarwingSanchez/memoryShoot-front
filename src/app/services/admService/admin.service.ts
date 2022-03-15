import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visit } from './../../models/visitModel';
import { Sale } from 'src/app/models/saleModel';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private API_URL_VISITS = 'http://localhost:5200/api/visits'
  private API_URL_GENERATE_GENERAL_REPORT = 'http://localhost:5200/api/mailer'
  private API_URL_SALES = 'http://localhost:5200/api/sales/create-sale'
  private ipAdress = ""


  constructor(
    private http : HttpClient
  ) { }

  /* SALESADM */



  /* HOMEADM */
  getUsers(){

  }

  getSales(){
    return this.http.get<Sale[]>(`${this.API_URL_SALES}/get-sales`)
  }
  getProducts(){

  }

  sendGeneralReport(report: {}){
    return this.http.post(`${this.API_URL_GENERATE_GENERAL_REPORT}/send-general-report`, report)
  }

  sendSalesReport(report: {}){
    return this.http.post(`${this.API_URL_GENERATE_GENERAL_REPORT}/send-sales-report`, report)
  }

  createVisit(ip: string){
    const date = new Date()
    let body = {
      date: {
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
      },
      userIP: ip
    }

    return this.http.post<Visit>(`${this.API_URL_VISITS}/create-visit`, body)
    .subscribe({
      next: data => {
        console.log(data)
      },
      error: error => { console.log('Error', error) }
    })
  }

  getApiAdress(){
    return this.http.get<Visit>("http://api.ipify.org/?format=json")
    .subscribe({
      next: data => {
        this.createVisit(data.ip)
       }
    });
  }

  getVisits(){
    return this.http.get<Visit[]>(`${this.API_URL_VISITS}/get-visits`)
  }
  createSale(body : Sale){
    return this.http.post<Sale>(`${this.API_URL_SALES}`,body)
  }
}

