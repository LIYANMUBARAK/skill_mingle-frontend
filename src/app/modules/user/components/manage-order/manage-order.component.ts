import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Order } from 'src/app/helpers/interfaces/orderData.interface';
import { FrontendService } from 'src/app/services/frontend.service';


@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent {

  userId!:string
  dataSource!:any
  displayedColumns:string[]=["Image","Gig","Freelancer","DueOn","ReviewCountRemaining","Status"]


@ViewChild(MatPaginator) paginator!:MatPaginator
@ViewChild(MatSort) sort!:MatSort


constructor(private service:FrontendService){}

ngOnInit(){
  this.userId=localStorage.getItem('userId') as string
  this.getAllOrdersForUser()
}

getAllOrdersForUser(){
    this.service.getAllOrdersForUser(this.userId).subscribe((orderData:Order[])=>{
      this.dataSource=new MatTableDataSource<Order>(orderData)
      console.log(orderData)
    })
}

}
