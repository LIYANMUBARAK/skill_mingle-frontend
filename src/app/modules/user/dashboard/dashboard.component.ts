import { Component, OnInit } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  categories!:any
  subcategories!:object

  constructor(private service:FrontendService){}


  ngOnInit(){
    this.loadCategoriesAndSubcategories()
  }

  loadCategoriesAndSubcategories(){
    this.service.loadCategoriesAndSubcategories().subscribe((response)=>{
      this.categories=response.categories
      this.subcategories=response.subcategories
    })
  }

}
