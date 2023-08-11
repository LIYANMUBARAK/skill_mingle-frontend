import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { patterns } from 'src/app/helpers/regexPatterns';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{

  id!:string
  oldCategoryName!:string

  constructor(private fb:FormBuilder,private service:FrontendService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
    this.id = history.state.id;
    this.oldCategoryName=history.state.categoryName;
    })
}

editCategoryForm=this.fb.group({
  categoryName:patterns.name
})

onSubmit(){
  const newCategoryName = this.editCategoryForm.get("categoryName")?.value
  this.service.editCategory({newCategoryName,id:this.id}).subscribe((response)=>{
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
