import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/helpers/interfaces/orderData.interface';
import { FrontendService } from 'src/app/services/frontend.service';
import { ReviseWorkComponent } from '../revise-work/revise-work.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  revisionOverError:boolean=false
  selectedFiles!:string[]
  orderId!:string
  orderData!:Order
  public stars: boolean[] = Array(5).fill(false);
  rating:number=0
  reviewMesssage!:string
  formError:boolean=false

  constructor(private route:ActivatedRoute,
    private service:FrontendService,
    private storage: AngularFireStorage,
    private dialog:MatDialog,
    ){}
 ngOnInit(){
  this.route.paramMap.subscribe(()=>{
    this.orderId = history.state.orderId
    
})
  this.getOrder(this.orderId)

 }

 getOrder(orderId:string){
  this.service.getOrderById(orderId).subscribe((orderData:Order)=>{
    this.orderData=orderData
    if(this.orderData.revisionCount==Number(this.orderData.revision)+1){
      this.revisionOverError=true
    }
  })
 }

 openReviseModal(){
  this.dialog.open(ReviseWorkComponent, {
    data: this.orderData._id// Pass the data to the modal
  }).afterClosed().subscribe(()=>{
    this.getOrder(this.orderId)
  })
 }

 completeOrder(){

  Swal.fire({
    title: 'Are you sure to complete order?',
    
    showCancelButton: true,
    confirmButtonText: 'Yes',
    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
    

  this.service.completeOrder({orderId:this.orderId}).subscribe((response)=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    this.getOrder(this.orderId)
    Toast.fire({
      icon: 'success',
      title: 'Order completed.'
    })
  })
}})
 }



 openModal(){
     
  // this.dialog.open()
}

reviewSubmit(){
  if(this.reviewMesssage&&this.rating)
  {
    console.log(this.rating,this.reviewMesssage)
    this.service.addReview({gigId:this.orderData.gigId,orderId:this.orderData._id,userId:this.orderData.user._id,rating:this.rating,reviewMesssage:this.reviewMesssage}).subscribe((response)=>{
      this.getOrder(this.orderId)
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      this.getOrder(this.orderId)
      Toast.fire({
        icon: 'success',
        title: 'Review added.'
      })
    })
  }
  else{
    this.formError=true
  }
}


public rate(rating: number) {
  this.rating=rating
  this.stars = this.stars.map((_, i) => rating > i);
  console.log(rating)
}
 }

