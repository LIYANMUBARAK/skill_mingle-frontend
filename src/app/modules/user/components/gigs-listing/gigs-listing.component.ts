import { Component } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-gigs-listing',
  templateUrl: './gigs-listing.component.html',
  styleUrls: ['./gigs-listing.component.css']
})
export class GigsListingComponent {
   gigs:any

  ngOnInit(){
    this.getAllGigs()
  }

  constructor(private service:FrontendService){}


  getAllGigs(){
    this.service.getGigs().subscribe((response:any)=>{
       this.gigs=response.gigsData
    })
  }

}
