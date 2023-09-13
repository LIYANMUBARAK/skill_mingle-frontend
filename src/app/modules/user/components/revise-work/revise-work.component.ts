import { Component, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { Order } from 'src/app/helpers/interfaces/orderData.interface';
import { orderFiles } from 'src/app/helpers/interfaces/selectedFiles.interface';
import { FrontendService } from 'src/app/services/frontend.service';


@Component({
  selector: 'app-revise-work',
  templateUrl: './revise-work.component.html',
  styleUrls: ['./revise-work.component.css']
})
export class ReviseWorkComponent {

  formError!:Boolean
  userRecommendations!:string
  orderId!:string
  orderData!:Order

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  private router:Router,
  private dialogRef:MatDialogRef<ReviseWorkComponent>,
  private service:FrontendService,
  private storage: AngularFireStorage,
  ){}

  ngOnInit(){
    console.log(this.data)
    this.getOrder(this.data)
  }

  getOrder(orderId:string){
    this.service.getOrderById(orderId).subscribe((orderData:Order)=>{
      this.orderData=orderData
      console.log(this.orderData)
    })
   }

  closeModal(){
    this.dialogRef.close()
  }

  onSubmit(){
    if(this.userRecommendations){
      this.service.reviseWork({orderId:this.data,revisionId:this.orderData.revisionData[this.orderData.revisionData.length-1]._id,userRecommendations:this.userRecommendations}).subscribe((response)=>{
        this.closeModal()
      })
    }
    else{
      this.formError=true
    }
  }
}
