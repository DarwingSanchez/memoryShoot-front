import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admService/admin.service';
import { Order } from 'src/app/models/orderModel';

@Component({
  selector: 'app-adm-orders',
  templateUrl: './adm-orders.component.html',
  styleUrls: ['./adm-orders.component.css']
})
export class AdmOrdersComponent implements OnInit {

  public ordersToDespatch: Order[] = []
  public ordersDespatched: Order[] = []

  public saleID = ""

  public saleInfo  = {
    _id: "",
    productID: 0,
    totalPrice: 0,
    created: "",
  }

  constructor(
    private adminService : AdminService
  ) { }

  ngOnInit(): void {
    this.getOrders()
  }

  updateStatus(){

  }

  getSale(){
    this.adminService.getOneSale(this.saleID)
    .subscribe({
      next: data => {
        this.saleInfo._id = data._id;
        this.saleInfo.productID = data.productID
        this.saleInfo.created = data.created
        this.saleInfo.totalPrice = data.totalPrice
      },
      error: err => console.log(err)
    })
  }

  despatchOrder(id: string){
    console.log(id)
    this.adminService.dispatchOrder(id)
    .subscribe({
      next: data => {
        console.log(data)
        this.getOrders()
      },
      error: err => console.log(err)
    })
  }

  getOrders(){
    this.adminService.getOrders()
    .subscribe({
      next: data => {
        this.ordersToDespatch = data.filter(item => item.status == true)
        this.ordersDespatched = data.filter(item => item.status == false)
      },
      error: err => console.log(err)
    })
  }

  cleanSaleSearchInput(){
    this.saleID = ""
  }

}
