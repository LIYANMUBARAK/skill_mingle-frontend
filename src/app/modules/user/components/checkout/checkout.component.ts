import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrontendService } from 'src/app/services/frontend.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  gigData:any
  orderData:any
  serviceFee:any
  total!:number
  handler:any=null

  constructor(private route: ActivatedRoute,private service:FrontendService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.orderData = history.state
      
      this.getGig(this.orderData.id)
      console.log(this.orderData)
      this.serviceFee=Number(this.orderData.price)*10/100
this.total = this.serviceFee+Number(this.orderData.price)
      console.log(this.serviceFee)
    })


    this.loadStripe();
  }

  getGig(id: string) {
    this.service.getGig(id).subscribe((response)=>{
      this.gigData=response.gigData
      console.log(response)
    })
  }



  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NiZHtSG7u0ZJ7CuQZRnfrUoUJTh28VtXqUFjogpgw5YgeLiKZjvnIesatObqe1NuvJ20BNEGlew6fL3Frf1yhnH00vU3jmRmL',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        Swal.fire({
          icon: 'success',
          title: 'Order successful',
          text: `Your Order Id is :${token.id}`,
          confirmButtonText: 'Ok',
          allowOutsideClick: false, 
        })
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
 
  }


  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

}
