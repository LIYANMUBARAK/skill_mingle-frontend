import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NavigationExtras } from '@angular/router';
import { Order } from 'src/app/helpers/interfaces/orderData.interface';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancer-orders',
  templateUrl: './freelancer-orders.component.html',
  styleUrls: ['./freelancer-orders.component.css']
})
export class FreelancerOrdersComponent {

  freelancerId!:string
  dataSource!: any
  displayedColumns: string[] = ["Image", "Gig", "User", "DueOn", "ReviewCountRemaining", "Status","Details"]

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(private service:FrontendService,private router:Router){}

  ngOnInit(){
    this.freelancerId=localStorage.getItem('userId') as string
  this.getAllOrdersForFreelancer()
  }

  getAllOrdersForFreelancer(){
    this.service.getAllOrdersForFreelancer(this.freelancerId).subscribe((orderData:Order[])=>{
      this.dataSource=new MatTableDataSource<Order>(orderData)
      console.log(orderData)
    })
}

openDetailsPage(orderId:string){
  const data = {orderId}
  console.log(orderId)
    const navigationExtras : NavigationExtras = {
      state:data
    }
    this.router.navigate(['/freelancerOrderDetails'],navigationExtras)
}
}
