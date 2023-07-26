import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesAndSubcategoriesComponent } from './categories-and-subcategories/categories-and-subcategories.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
{
  path:'login',
  component:LoginComponent
},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'categoriesAndSubcategories',
  component:CategoriesAndSubcategoriesComponent
},
{
  path:'addCategory',
  component:AddCategoryComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
