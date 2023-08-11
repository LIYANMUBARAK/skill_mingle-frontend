import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FrontendService } from 'src/app/services/frontend.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../interfaces/customer.interfaces';

@Component({
  selector: 'app-categories-and-subcategories',
  templateUrl: './categories-and-subcategories.component.html',
  styleUrls: ['./categories-and-subcategories.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class CategoriesAndSubcategoriesComponent implements OnInit {

  categories:any
  subcategories:any

  testDatabase:any=[{name:"liyan",phone:"999999",email:"test@test.com",status:"active"}]
  dataSource:any
  displayedColumns:string[]=["Name","Category Name","Edit","Delete"]




editSubCategory(id:any){

}
deleteSubCategory(id:any){

}
  constructor(private service:FrontendService,private router:Router){}

  ngOnInit(): void {
   this.loadCategoriesAndSubcategories() 
   
  }



  loadCategoriesAndSubcategories(){ 
    this.service.loadCategoriesAndSubcategories().subscribe((response)=>{
      if(response.categories&&response.subcategories){
        
        this.categories=response.categories
        this.subcategories = response.subcategories
        this.dataSource = new MatTableDataSource<any>(this.subcategories)
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

