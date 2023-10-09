import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Order } from 'src/app/helpers/interfaces/orderData.interface';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelance-dashboard',
  templateUrl: './freelance-dashboard.component.html',
  styleUrls: ['./freelance-dashboard.component.css']
})
export class FreelanceDashboardComponent {
  userId!:string|null
  userData!:any
  allConnections:any
  pendingOrders!:Order[]
 

  constructor(private service:FrontendService,
    private router:Router){}

  ngOnInit(){
      this.userId=localStorage.getItem('userId')
      this.getUser(this.userId)
      this.getConnectionsForFreelancer()
      this.getPendingOrders()
  }

  getUser(userId:any){
    this.service.getUserUsingId(userId).subscribe((response)=>{
     if(response.user){
      this.userData=response.user
      console.log(this.userData)
    }
     else{
      console.log(response)
     }
      
    })
  }

  getPendingOrders(){
    this.service.getPendingOrdersForFreelancer(this.userId).subscribe((pendingOrders:Order[])=>{
      console.log(pendingOrders)
      this.pendingOrders=pendingOrders
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

  getThisMonthEarning(){
   
  }

  getConnectionsForFreelancer(){
   
      this.service.getConnectionsForFreelancer(this.userId).subscribe((response)=>{
     this.allConnections=response.connections
      })
    }
  }

