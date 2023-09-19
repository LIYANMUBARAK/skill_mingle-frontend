import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { FrontendService } from 'src/app/services/frontend.service';
import { OrderComponent } from '../order/order.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { freelancer } from 'src/app/helpers/interfaces/freelancer.interface';


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
  plan!: string
  revisions!: string
  pricing!: string
  deliveryTime!: string
  priceType = priceType
  selectedType!: priceType
  gigId!: string
  userIsFreelancer: boolean = false
  freelancerId!: string
  userId!: string | null
  freelancerData!:freelancer

  constructor(private route: ActivatedRoute,
    private service: FrontendService,
    private dialog: MatDialog,
    private router: Router) { }
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const id = history.state.id
      this.gigId = id

      this.getGig(this.gigId)
      
    })


  }



  getGig(id: string) {

    this.service.getGig(id).subscribe((response) => {
      this.gigData = response.gigData
      console.log(this.gigData)
      this.freelancerId = this.gigData.freelancerId._id
      this.basicPricing()
      this.checkUserIsFreelancer()
      this.getFreelancerData()
    })
  }

  getFreelancerData(){
    const freelancerId = this.gigData.freelancerId.freelancerId
   console.log(freelancerId)
    this.service.getFreelancerById(this.gigData.freelancerId.freelancerId).subscribe((response:freelancer)=>{
      console.log(response)
      this.freelancerData=response
    })
  }

  basicPricing() {
    this.plan = "basic"
    this.selectedType = priceType.basic
    this.revisions = this.gigData.basicRevisions
    this.pricing = this.gigData.basicPrice
    this.deliveryTime = this.gigData.basicDeliveryTime
  }

  standardPricing() {
    this.plan = "standard"
    this.selectedType = priceType.standard
    this.revisions = this.gigData.standardRevisions
    this.pricing = this.gigData.standardPrice
    this.deliveryTime = this.gigData.standardDeliveryTime
  }

  premiumPricing() {
    this.plan = "premium"
    this.selectedType = priceType.premium
    this.revisions = this.gigData.premiumRevisions
    this.pricing = this.gigData.premiumPrice
    this.deliveryTime = this.gigData.premiumDeliveryTime
  }

  toGigConfirm() {

    this.dialog.open(OrderComponent, {
      data: {
        id: this.gigId,
        plan: this.plan,
        price: this.pricing,
        revision: this.revisions,
        deliveryTime: this.deliveryTime
      },

    }).afterClosed().subscribe(() => {

    })
  }

  checkUserIsFreelancer() {
    this.userId = localStorage.getItem('userId')

    console.log(this.freelancerId)
    if (this.userId) {
      if (this.freelancerId == this.userId) {
        this.userIsFreelancer = true
      }
    }
  }

  chat() {
    this.service.chat({ freelancerId: this.freelancerId, userId: this.userId }).subscribe((response) => {
      if (response.chatConnect) {
        const freelancerAndUserid = { freelancerId: this.freelancerId, userId: this.userId }
        const navigationExtras : NavigationExtras = {
          state:freelancerAndUserid,
        }
        this.router.navigate(['/chat'],navigationExtras)
       
      }
    })
  }
}