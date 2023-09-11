import { Component } from '@angular/core';
import {Router, NavigationExtras } from '@angular/router';
import { SubcategoryData, subcategory } from 'src/app/helpers/interfaces/subcategory.interface';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-gigs-listing',
  templateUrl: './gigs-listing.component.html',
  styleUrls: ['./gigs-listing.component.css']
})
export class GigsListingComponent {

  


   gigs:any
   
   subcategories!:any

   categoryName!:string

   constructor(private service:FrontendService,private router:Router){}


  ngOnInit(){
    this.categoryName = history.state.categoryName
  
    this.getGigOfCategory(this.categoryName)
    this.getSubcategoriesOfCategory(this.categoryName)
  }

  

  getSubcategoriesOfCategory(categoryName:string){
    this.service.getSubcategoriesOfCategory(categoryName).subscribe((response:any)=>{
    
    this.subcategories=response.subcategoryData
console.log(this.subcategories)
  })
  }

  getAllGigs(){
    this.service.getGigs().subscribe((response:any)=>{
       this.gigs=response.gigsData
      
    })
  }

  getGigOfCategory(categoryName:string){
    this.service.getGigOfCategory(categoryName).subscribe((response)=>{
      this.gigs= response.gigsData
      console.log(this.gigs)

    })
  }

  clearFilter(){
    this.getGigOfCategory(this.categoryName)
  }

  subcategorySelected(subcategoryName:string){
    
    this.service.getGigOfCategory(this.categoryName).subscribe((response)=>{
      this.gigs= response.gigsData.filter((gig:any) => gig.subcategory.name === subcategoryName);
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
