import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: object,
  private router:Router,
  private dialogRef:MatDialogRef<OrderComponent>
               ){}

  ngOnInit(){
    console.log(this.data)
  }

  toCheckoutPage(){
    
    
      const orderData=this.data
      
      const navigationExtras : NavigationExtras = {
        state:orderData,
      }
      this.router.navigate(['/checkout'],navigationExtras)
      this.dialogRef.close()  
    
  }
}
