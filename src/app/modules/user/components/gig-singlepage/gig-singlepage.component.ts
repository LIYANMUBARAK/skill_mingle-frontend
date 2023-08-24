import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrontendService } from 'src/app/services/frontend.service';
import { OrderComponent } from '../order/order.component';
import { MatDialog } from '@angular/material/dialog';


export enum priceType {
  basic = 'basic',
  standard = 'standard',
  premium = 'premium'
}

@Component({
  selector: 'app-gig-singlepage',
  templateUrl: './gig-singlepage.component.html',
  styleUrls: ['./gig-singlepage.component.css']
})
export class GigSinglepageComponent {

  gigData: any
  plan!:string
  revisions!: string
  pricing!: string
  deliveryTime!: string
  priceType = priceType
  selectedType!: priceType
  gigId!: string


  constructor(private route: ActivatedRoute, private service: FrontendService, private dialog: MatDialog) { }
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const id = history.state.id
      this.gigId = id
      this.getGig(id)
    })


  }



  getGig(id: string) {
    this.service.getGig(id).subscribe((response) => {
      this.gigData = response.gigData
      this.basicPricing()
    })
  }

  basicPricing() {
    this.plan="basic"
    this.selectedType = priceType.basic
    this.revisions = this.gigData.basicRevisions
    this.pricing = this.gigData.basicPrice
    this.deliveryTime = this.gigData.basicDeliveryTime
  }

  standardPricing() {
    this.plan="standard"
    this.selectedType = priceType.standard
    this.revisions = this.gigData.standardRevisions
    this.pricing = this.gigData.standardPrice
    this.deliveryTime = this.gigData.standardDeliveryTime
  }

  premiumPricing() {
    this.plan="premium"
    this.selectedType = priceType.premium
    this.revisions = this.gigData.premiumRevisions
    this.pricing = this.gigData.premiumPrice
    this.deliveryTime = this.gigData.premiumDeliveryTime
  }

  toGigConfirm() {
    console.log(this.gigData)

    console.log(this.pricing)
    this.dialog.open(OrderComponent, {
      data: {
        id:this.gigId,
        plan:this.plan,
        price: this.pricing,
        revision: this.revisions,
        deliveryTime: this.deliveryTime
      },

    }).afterClosed().subscribe(() => {

    })
  }
}