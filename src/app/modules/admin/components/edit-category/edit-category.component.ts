import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { patterns } from 'src/app/helpers/regexPatterns';
import { FrontendService } from 'src/app/services/frontend.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  id!: string
  oldCategoryName!: string
  categoryId!:string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, 
    private service: FrontendService, 
    private router: Router,
   
     private route: ActivatedRoute,
     public dialogRef:MatDialogRef<EditCategoryComponent>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.id = history.state.id;
      this.categoryId=this.data.id
      console.log(this.categoryId)
      this.oldCategoryName = history.state.categoryName;
      this.data=this.data.categoryName
      this.editCategoryForm.get('categoryName')?.setValue(this.oldCategoryName);
    })
  }

  editCategoryForm = this.fb.group({
    categoryName: patterns.name
  })

  onSubmit() {

  const newCategoryName = this.editCategoryForm.value.categoryName
    console.log(newCategoryName)
    this.service.editCategory({ newCategoryName, id: this.categoryId }).subscribe((response) => {
      if (response.categoryExistError) {
        console.log(response.categoryExistError)
      }
      else if (response.cateogrySave) {
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
          title: 'Category edited'
        })
      }
    })
  }


  closeModal() {
    this.dialogRef.close()
  }

}
