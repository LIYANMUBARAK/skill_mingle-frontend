import { Component } from '@angular/core';
import {Router, NavigationExtras } from '@angular/router';
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

  constructor(private service:FrontendService,private router:Router){}


  getAllGigs(){
    this.service.getGigs().subscribe((response:any)=>{
       this.gigs=response.gigsData
       console.log(this.gigs)
    })
  }


  toGigPage(id:string){
    
    const data={id:id}
    
    const navigationExtras : NavigationExtras = {
      state:data,
    }
    this.router.navigate(['/gigDetails'],navigationExtras)
    
  }

}
