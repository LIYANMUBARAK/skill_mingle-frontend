import { Component , ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Order } from 'src/app/helpers/interfaces/orderData.interface';
import { FrontendService } from 'src/app/services/frontend.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  dataSource!:any
  displayedColumns:string[]=["Image","Gig","User","Freelancer","DueOn","ReviewCountRemaining","Price","Status"]


@ViewChild(MatPaginator) paginator!:MatPaginator
@ViewChild(MatSort) sort!:MatSort

constructor(private service:FrontendService){}

ngOnInit(){
  
  this.getAllOrders()
}

getAllOrders(){
  this.service.getAllOrders().subscribe((orderData:Order[])=>{
    this.dataSource=new MatTableDataSource<Order>(orderData)
    console.log(orderData)
  })
}

}
