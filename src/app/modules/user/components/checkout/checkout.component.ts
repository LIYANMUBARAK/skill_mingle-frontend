import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private route:ActivatedRoute){}
  
  ngOnInit(){
    this.route.paramMap.subscribe(()=>{
      const orderData = history.state
      console.log(orderData)
    })
  }
}
