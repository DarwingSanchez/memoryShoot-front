import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/saleModel';
import { AdminService } from 'src/app/services/admService/admin.service';

@Component({
  selector: 'app-adm-sales',
  templateUrl: './adm-sales.component.html',
  styleUrls: ['./adm-sales.component.css']
})
export class AdmSalesComponent implements OnInit {


  public generalReport = {
    totalSales: 0,
    totalIncome: 0,
    /* Ganancias netas */
    totalNeto: 0,
    /* Gastos */
    totalSpent: 0,
    totalAvarage:0
  }

  public dailyReport = {
    totalSales: 0,
    totalIncom: 0,
    totalAvarage: 0
  }

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getSalesData()
  }

  getSalesData(){
    this.adminService.getSales()
    .subscribe({
      next: data => {
        this.updateInfo(data)
      }
    })
  }

  updateInfo(sales:Sale[]){

    if(Array.isArray(sales)){
      /* General report */
      this.generalReport.totalSales = sales.length;
      this.generalReport.totalIncome = sales.reduce((previusValue, currentValue) => previusValue + currentValue.totalPrice, 0)
      this.generalReport.totalSpent = .1 * this.generalReport.totalIncome //Gastos
      this.generalReport.totalNeto = (.3 * this.generalReport.totalIncome) - this.generalReport.totalSpent //Ganancias netas
      this.generalReport.totalAvarage = this.generalReport.totalIncome / this.generalReport.totalSales

      /* DailyReport */
      const date = new Date;
      let day = date.getDate(); // Día del mes
      let month = date.getMonth(); // Mes del año, del 0 al 11, 0 siendo Enero
      let year = date.getFullYear(); // Trae el año
      let todayReport = sales.filter( item => item.created === `${day}/${month+1}/${year}`)
      if(todayReport.length > 0){
        this.dailyReport.totalSales = todayReport.length;
        this.dailyReport.totalIncom = todayReport.reduce((previusValue, currentValue) => previusValue + currentValue.totalPrice, 0)
        this.dailyReport.totalAvarage = this.dailyReport.totalIncom/this.dailyReport.totalSales
      }
    }else{

    }
  }

  sendReport(){
    this.adminService.sendSalesReport(this.generalReport)
    .subscribe({
      next: data => {
        alert('Reporte envíado exitosamente')
      }
    })
  }

}
