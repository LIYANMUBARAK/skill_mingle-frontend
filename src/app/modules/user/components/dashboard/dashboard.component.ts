import { Component, OnInit } from '@angular/core';
import { NavigationExtras, RouterEvent } from '@angular/router';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  

  categories!:any
  subcategories!:object

  constructor(private service:FrontendService,
    private router:Router){}


  ngOnInit(){
    
    this.loadCategoriesAndSubcategories()
  }

  loadCategoriesAndSubcategories(){
    this.service.loadCategoriesAndSubcategoriesForUser().subscribe((response)=>{
      console.log(response)
      this.categories=response.categories
      this.subcategories=response.subcategories
    })
  }

  loadCategoryPage(categoryName:string){
    const data = {categoryName:categoryName}
    const navigationExtras : NavigationExtras = {
      state:data
    }
    this.router.navigate(['/gigs'],navigationExtras)
  }
  
}
