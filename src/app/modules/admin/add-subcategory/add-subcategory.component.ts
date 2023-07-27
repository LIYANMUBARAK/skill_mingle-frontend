import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { patterns } from 'src/app/helpers/regexPatterns';
import { FrontendService } from 'src/app/services/frontend.service';
import {Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  isDisabled:boolean=false
  submit:Boolean=false
 category:any

ngOnInit(): void {
  this.route.paramMap.subscribe(()=>{
    const id = history.state.id
  this.service.loadCategoriesAndSubcategories().subscribe((response)=>{
    for(let i=0;i<response.categories.length;i++){
      if(id==response.categories[i]._id){
        this.category=response.categories[i]
      }
    }
    console.log(this.category)
  })
  })
}
  constructor(private fb:FormBuilder,private service:FrontendService,private router:Router,private route:ActivatedRoute){}

  addSubcategoryForm=this.fb.group({
    subcategoryName:patterns.name,
  })

  onSubmit(){
    this.submit=true
    const subcategoryName = this.addSubcategoryForm.get("subcategoryName")?.value
    const subcategoryData={subcategoryName,categoryId:this.category._id}
   
    this.service.addSubcategory(subcategoryData).subscribe((response)=>{
     if(response.subcategorySave===true)
     {
      this.router.navigate(['/admin/categoriesAndSubcategories'])
     }
    })
  }
}
