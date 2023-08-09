import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesAndSubcategoriesComponent } from './categories-and-subcategories/categories-and-subcategories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AdminLoginAuthGuard } from './guards/admin-login-auth.guard';
import { UsersComponent } from './users/users.component';
import { FreelancersComponent } from './freelancers/freelancers.component';

const routes: Routes = [
{
  path:'login',canActivate:[AdminLoginAuthGuard],
  component:LoginComponent
},
{
  path:'dashboard',canActivate:[AdminAuthGuard],
  component:DashboardComponent
},
{
  path:'', redirectTo:'dashboard',pathMatch:'full',

},
{
  path:'categoriesAndSubcategories',canActivate:[AdminAuthGuard],
  component:CategoriesAndSubcategoriesComponent
},
{
  path:'addCategory',canActivate:[AdminAuthGuard],
  component:AddCategoryComponent
},
{
  path:'addSubcategory',canActivate:[AdminAuthGuard],
  component:AddSubcategoryComponent
},
{
  path:'editCategory',canActivate:[AdminAuthGuard],
  component:EditCategoryComponent
},
{
  path:'users',canActivate:[AdminAuthGuard],
  component:UsersComponent
},
{
  path:'freelancers',canActivate:[AdminAuthGuard],
  component:FreelancersComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
