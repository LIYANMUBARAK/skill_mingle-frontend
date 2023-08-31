import { Component, OnInit, ViewChild } from '@angular/core';
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
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { SubcategoryEditModalComponent } from '../subcategory-edit-modal/subcategory-edit-modal.component';
import Swal from 'sweetalert2';

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
  subcategoryData:any

  dataSource:any
  displayedColumns:string[]=["Name","Category Name","Edit Subcategory","Delete Subcategory"]

  categoryDataSource:any
  categoryDisplayedColumns:string[]=["Category Name","Add Subcategory","Edit Category","Delete Category"]


  

@ViewChild(MatPaginator) paginator!:MatPaginator
@ViewChild(MatSort) sort!:MatSort



editSubcategory(id:string){
  this.service.getSubCategoryUsingId(id).subscribe((response)=>{
   
    
  this.dialog.open(SubcategoryEditModalComponent, {
      data: response.subcategoryData // Pass the data to the modal
    }).afterClosed().subscribe(()=>{
      this.loadCategoriesAndSubcategories() 
    })
  })
  
  
}

deleteSubcategory(id:any){

  Swal.fire({
    title: 'Do you want to delete the subcategory?',
    
    showCancelButton: true,
    confirmButtonText: 'Delete',
    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

      this.service.deleteSubCategoryUsingId(id).subscribe((response)=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Subcategory deleted'
        })
        console.log(response)
        this.loadCategoriesAndSubcategories() 
      })
    
    }
  })


  
}

  constructor(private service:FrontendService,private router:Router,private dialog:MatDialog){}

  ngOnInit(): void {
   this.loadCategoriesAndSubcategories() 
   
  }



  loadCategoriesAndSubcategories(){ 
    this.service.loadCategoriesAndSubcategories().subscribe((response)=>{
      if(response.categories&&response.subcategories){
        
        this.categories=response.categories
        this.subcategories = response.subcategories

        this.categoryDataSource = new MatTableDataSource<any>(this.categories)
        this.categoryDataSource.paginator=this.paginator
        this.categoryDataSource.sort=this.sort

        this.dataSource = new MatTableDataSource<any>(this.subcategories)
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
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
   
    Swal.fire({
      title: 'Do you want to delete the category?',
      
      showCancelButton: true,
      confirmButtonText: 'Delete',
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.service.deleteCategory(categoryData).subscribe((response)=>{
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Category deleted'
          })
          this.loadCategoriesAndSubcategories() 
        })
      }
  })



    
  }

  getSubcategoriesForCategory(categoryId: string) {
    console.log(categoryId)
    const abc =  this.subcategories.filter((subcategory:any) => subcategory.categoryId === categoryId);
  console.log("abc"+abc)
  return abc
  }
}

