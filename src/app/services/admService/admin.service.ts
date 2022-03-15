import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visit } from './../../models/visitModel';
import { Sale } from 'src/app/models/saleModel';
import { User } from 'src/app/models/userModel';
import { Order } from 'src/app/models/orderModel';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private API_URL_VISITS = 'http://localhost:5200/api/visits'
  private API_URL_GENERATE_GENERAL_REPORT = 'http://localhost:5200/api/mailer'
  private API_URL_SALES = 'http://localhost:5200/api/sales'
  private API_URL_ORDERS = 'http://localhost:5200/api/orders'
  private API_URL_USERS = 'http://localhost:5200/api/user'
  private ipAdress = ""


  constructor(
    private http : HttpClient
  ) { }


  /* ORDERS-ADM */

  getOrders(){
    return this.http.get<Order[]>(`${this.API_URL_ORDERS}/get-orders`)
  }

  dispatchOrder(id:string){
    return this.http.put<Order>(`${this.API_URL_ORDERS}/dispatch-order`, {id})
  }

  /* SALESADM */

  getOneSale(id: string){
    return this.http.get<Sale>(`${this.API_URL_SALES}/get-sale/${id}`)
  }
  getSales(){
    return this.http.get<Sale[]>(`${this.API_URL_SALES}/get-sales`)
  }

  /* HOMEADM */
  getUsers(){
    return this.http.get<User[]>(`${this.API_URL_USERS}/get-users`)
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
    return this.http.post<Sale>(`${this.API_URL_SALES}/create-sale`,body)
  }
}
