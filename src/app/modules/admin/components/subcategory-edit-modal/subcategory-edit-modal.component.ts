import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subcategory-edit-modal',
  templateUrl: './subcategory-edit-modal.component.html',
  styleUrls: ['./subcategory-edit-modal.component.css']
})
export class SubcategoryEditModalComponent {

  editSubcategoryData:any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  private fb:FormBuilder,private service:FrontendService,
  private router:Router,
  public dialogRef:MatDialogRef<SubcategoryEditModalComponent>
  ) { }

ngOnInit(){}

  editSubcategoryForm = this.fb.group({
    newSubcategoryName:['']
  })

  editSubcategory(){
    this.editSubcategoryData={
      newSubcategoryName:this.editSubcategoryForm.value.newSubcategoryName,
      subcategoryId:this.data._id


    }
   

    this.service.editSubcategory(this.editSubcategoryData).subscribe((response:any)=>{
      if(response.editSubcategory===true){
        this.dialogRef.close()
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
          title: 'Subcategory edited'
        })
      }
    })
  }


  closeModal(){
    this.dialogRef.close()
  }


}
