import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { patterns } from 'src/app/helpers/regexPatterns';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{


  categoryExistError:boolean=false

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private service:FrontendService,
    private router:Router,
    public dialogRef:MatDialogRef<AddCategoryComponent>){}

  ngOnInit(): void {}

addCategoryForm=this.fb.group({
  categoryName:patterns.name
})

onSubmit(){
  console.log(this.addCategoryForm.value)
  this.service.addCategory(this.addCategoryForm.value).subscribe((response)=>{
    if(response.categoryExistError){
      console.log(response.categoryExistError)
      this.categoryExistError=true
    }
    else if(response.cateogrySave){
      console.log("Category Saved")
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
        title: 'Category Added'
      })
   }
  })
}

closeModal(){
  this.dialogRef.close()
}

}
