import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admService/admin.service';

@Component({
  selector: 'app-adm-home',
  templateUrl: './adm-home.component.html',
  styleUrls: ['./adm-home.component.css']
})
export class AdmHomeComponent implements OnInit {

  public visits = [{}]
  public totalVisits = 0
  public visitsToday = 0
  public totalUsers = 0
  public totalSales = 0
  public totalProducts = 0

  public generalReport = {
    sales: this.totalSales,
    users: this.totalUsers,
    products: this.totalProducts,
    visit: {
      today: this.visitsToday,
      total: this.totalVisits
    }
  }

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getTotalVisits()
    this.getSales()
  }

  getSales(){
    this.adminService.getSales()
    .subscribe({
      next: data => {
        /* Getting totalSales */
        console.log(data)
      }
    })
  }
  updateInfo(){
    this.generalReport = {
      sales: this.totalSales,
      users: this.totalUsers,
      products: this.totalProducts,
      visit: {
        today: this.visitsToday,
        total: this.totalVisits
      }
    }
  }

  sendReport(){
    this.updateInfo()
    this.adminService.sendGeneralReport(this.generalReport)
    .subscribe({
      next: data => {
        alert('Reporte envíado exitosamente')
      }
    })
  }

  getTotalVisits(){
    this.adminService.getVisits()
    .subscribe({
      next: data => {
        this.visits = data
        console.log('data',data)
        /* Getting total visits */
        this.totalVisits = this.visits.length
        /* Gettiin visits today */
        let date = new Date
        this.visitsToday = data.filter( item => item.date.day == date.getDay()).length
        console.log('todayVisitis:',this.visitsToday)
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
