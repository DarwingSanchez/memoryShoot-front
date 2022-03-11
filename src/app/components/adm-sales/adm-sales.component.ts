import { Component, OnInit } from '@angular/core';
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
    totalSpent: 0,
    totalNeto: 0,
    totalAvarage:0,
    dailySale: {
      totalToday: 0,
      avaregeToday: 0,
      totalNetoToday: 0
    }
  }

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {

  }



  sendReport(){
    this.adminService.sendGeneralReport(this.generalReport)
    .subscribe({
      next: data => {
        alert('Reporte envíado exitosamente')
      }
    })
  }

}
