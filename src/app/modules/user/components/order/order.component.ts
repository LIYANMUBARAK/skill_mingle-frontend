import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { gig } from 'src/app/helpers/interfaces/gig.interface';
import { gigOrder } from 'src/app/helpers/interfaces/gigOrder.interface';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  gigData!:gig


  constructor(@Inject(MAT_DIALOG_DATA) public data: gigOrder,
  private router:Router,
  private dialogRef:MatDialogRef<OrderComponent>,
  private service:FrontendService
               ){}

  ngOnInit(){
    console.log(this.data)
    
    this.getGigData()
    

  }

  getGigData(){
    this.service.getGig(this.data.id).subscribe((response)=>{
      this.gigData=response.gigData
     
    })
  }

  toCheckoutPage(){
    
    
      const orderData=this.data
      
      const navigationExtras : NavigationExtras = {
        state:orderData,
      }
      this.router.navigate(['/checkout'],navigationExtras)
      this.dialogRef.close()  
    
  }

  closeModal(){
    this.dialogRef.close()
  }
}
