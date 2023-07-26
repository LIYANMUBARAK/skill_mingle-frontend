import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { patterns } from 'src/app/helpers/regexPatterns';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{


  constructor(private fb:FormBuilder,private service:FrontendService,private router:Router){}

  ngOnInit(): void {}

addCategoryForm=this.fb.group({
  categoryName:patterns.name
})

onSubmit(){
  console.log(this.addCategoryForm.value)
  this.service.addCategory(this.addCategoryForm.value).subscribe((response)=>{
    if(response.categoryExistError){
      console.log(response.categoryExistError)
    }
    else if(response.cateogrySave){
      console.log("Category Saved")
      this.router.navigate(['/admin/categoriesAndSubcategories'])
    }
  })
}

}
