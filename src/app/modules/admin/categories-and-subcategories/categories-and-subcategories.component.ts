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

  addSubcategory(id:string,categoryName:string){
    
    const data={id:id}
    
    const navigationExtras : NavigationExtras = {
      state:data,
    }
    this.router.navigate(['/admin/addSubcategory'],navigationExtras)
    
  }

  editCategory(id:string,categoryName:string){
    const data={id:id,categoryName}
    
    const navigationExtras : NavigationExtras = {
      state:data,
    }
    this.router.navigate(['/admin/editCategory'],navigationExtras)
    
  }

  deleteCategory(id:string){
    const categoryData=id
    console.log(categoryData)
    this.service.deleteCategory(categoryData).subscribe((response)=>{
      this.loadCategoriesAndSubcategories() 
    })
    
  }

  getSubcategoriesForCategory(categoryId: string) {
    console.log(categoryId)
    const abc =  this.subcategories.filter((subcategory:any) => subcategory.categoryId === categoryId);
  console.log("abc"+abc)
  return abc
  }
}

