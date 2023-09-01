import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { patterns } from 'src/app/helpers/regexPatterns';
import { FrontendService } from 'src/app/services/frontend.service';
import {Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  isDisabled:boolean=false
  submit:Boolean=false
 category:any
categoryName!:string
categoryId!:string

 subcategoryExistError:boolean=false
  

 constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private fb:FormBuilder,
  private service:FrontendService,
  private router:Router,
  private route:ActivatedRoute,
  public dialogRef:MatDialogRef<AddSubcategoryComponent>){}

addSubcategoryForm=this.fb.group({
  subcategoryName:patterns.name,
})

ngOnInit(): void {
  this.route.paramMap.subscribe(()=>{
    const id = history.state.id
  this.service.loadCategoriesAndSubcategories().subscribe((response)=>{
    for(let i=0;i<response.categories.length;i++){
      if(id==response.categories[i]._id){
        this.category=response.categories[i]
      }
    }
    this.categoryName = this.data.categoryName
    this.categoryId=this.data.id
    console.log(this.data)
  })
  })
}
  

  onSubmit(){
    this.submit=true
    const subcategoryName = this.addSubcategoryForm.get("subcategoryName")?.value
    const subcategoryData={subcategoryName,categoryId:this.data.id}
   console.log(subcategoryData)
    this.service.addSubcategory(subcategoryData).subscribe((response)=>{
     if(response.subcategorySave===true)
     {
      
      this.closeModal()
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
        title: 'Subcategory added'
      })
     }
     else if(response.subcategoryExistError){
      console.log(response)
      this.subcategoryExistError=true
     }
    })
  }

  closeModal() {
    this.dialogRef.close()
  }
}
