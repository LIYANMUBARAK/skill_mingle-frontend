import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/helpers/interfaces/orderData.interface';
import { FrontendService } from 'src/app/services/frontend.service';
import { DeliverWorkComponent } from '../deliver-work/deliver-work.component';
import { user } from 'src/app/helpers/interfaces/user.interface';


@Component({
  selector: 'app-freelancer-order-details',
  templateUrl: './freelancer-order-details.component.html',
  styleUrls: ['./freelancer-order-details.component.css']
})
export class FreelancerOrderDetailsComponent {
  
  userId!:string
  userData!:user
  selectedFiles!:string[]
  orderId!:string
  orderData!:Order

  constructor(private route:ActivatedRoute,
    private service:FrontendService,
    private storage: AngularFireStorage,
    private dialog:MatDialog){}
 ngOnInit(){
  this.userId= localStorage.getItem('userId') as string
  this.route.paramMap.subscribe(()=>{
    this.orderId = history.state.orderId
    
})
// this.service.getUserUsingId(this.userId).subscribe((response)=>{
//   this.userData=response.userData
//   console.log(this.userData)
// })
  this.getOrder(this.orderId)

 }

 getOrder(orderId:string){
  this.service.getOrderById(orderId).subscribe((orderData:Order)=>{
    this.orderData=orderData
    console.log(this.orderData)
  })
 }

async onImageSelected(event:Event){

  // this.thumbnail = <File>(event.target as HTMLInputElement)?.files?.[0]
    
  const inputElement = event.target as HTMLInputElement;
  if (inputElement.files) {
    const files=inputElement.files
    for(let i=0;i<files.length;i++){
      const imagePath=`revision/image/${files[i].name}`
      const uploadImage=await this.storage.upload(imagePath,files[i])
      const imageUrl =<string>await uploadImage.ref.getDownloadURL()
      this.selectedFiles.push(imageUrl)
      console.log(this.selectedFiles)
    }
    
  }
 }


 openModal(){
     
  this.dialog.open(DeliverWorkComponent, {
    data: this.orderData._id// Pass the data to the modal
  }).afterClosed().subscribe(()=>{
    this.getOrder(this.orderId)
  })
}
 }
