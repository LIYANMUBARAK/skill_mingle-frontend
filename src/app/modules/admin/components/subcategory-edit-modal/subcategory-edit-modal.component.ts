import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';

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
          
      }
    })
  }


  closeModal(){
    this.dialogRef.close()
  }


}
