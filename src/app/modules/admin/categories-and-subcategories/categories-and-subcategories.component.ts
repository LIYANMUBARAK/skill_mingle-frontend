import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-categories-and-subcategories',
  templateUrl: './categories-and-subcategories.component.html',
  styleUrls: ['./categories-and-subcategories.component.css']
})
export class CategoriesAndSubcategoriesComponent implements OnInit {

  categories:any
  subcategories:any

  constructor(private service:FrontendService,private router:Router){}

  ngOnInit(): void {
   this.loadCategoriesAndSubcategories() 
  }

  loadCategoriesAndSubcategories(){ 
    this.service.loadCategoriesAndSubcategories().subscribe((response)=>{
      if(response.categories&&response.subcategories){
        console.log(response.categories)
        this.categories=response.categories
        this.subcategories = response.subcategories
      }
    })
  }

  onClick(id:string){
    
    const data={id:id}
    console.log(data)
    const navigationExtras : NavigationExtras = {
      state:data,
    }
    this.router.navigate(['/admin/addSubcategory'],navigationExtras)
    
  }

  getSubcategoriesForCategory(categoryId: string) {
    console.log(categoryId)
    const abc =  this.subcategories.filter((subcategory:any) => subcategory.categoryId === categoryId);
  console.log("abc"+abc)
  return abc
  }
}

