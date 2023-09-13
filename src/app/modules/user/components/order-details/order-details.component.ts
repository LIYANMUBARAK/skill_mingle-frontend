import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/helpers/interfaces/orderData.interface';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {


  selectedFiles!:string[]
  orderId!:string
  orderData!:Order

  constructor(private route:ActivatedRoute,
    private service:FrontendService,
    private storage: AngularFireStorage,
    private dialog:MatDialog){}
 ngOnInit(){
  this.route.paramMap.subscribe(()=>{
    this.orderId = history.state.orderId
    
})
  this.getOrder(this.orderId)

 }

 getOrder(orderId:string){
  this.service.getOrderById(orderId).subscribe((orderData:Order)=>{
    this.orderData=orderData
    console.log(this.orderData)
  })
 }




 openModal(){
     
  // this.dialog.open()
}
 }

