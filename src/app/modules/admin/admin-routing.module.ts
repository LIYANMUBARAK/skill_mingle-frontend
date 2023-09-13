import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesAndSubcategoriesComponent } from './components/categories-and-subcategories/categories-and-subcategories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSubcategoryComponent } from './components/add-subcategory/add-subcategory.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AdminLoginAuthGuard } from './guards/admin-login-auth.guard';
import { UsersComponent } from './components/users/users.component';
import { FreelancersComponent } from './components/freelancers/freelancers.component';
import { GigsComponent } from './components/gigs/gigs.component';
import { OrdersComponent } from './components/orders/orders.component';

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
},
{
  path:'gigs',canActivate:[AdminAuthGuard],
  component:GigsComponent
},
{
  path:'orders',canActivate:[AdminAuthGuard],
  component:OrdersComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
