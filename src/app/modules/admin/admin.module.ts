import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesAndSubcategoriesComponent } from './categories-and-subcategories/categories-and-subcategories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { UsersComponent } from './users/users.component';
import { FreelancersComponent } from './freelancers/freelancers.component'

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CategoriesAndSubcategoriesComponent,
    AddCategoryComponent,
    SidebarComponent,
    NavbarComponent,
    AddSubcategoryComponent,
    EditCategoryComponent,
    UsersComponent,
    FreelancersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule

  ]
})
export class AdminModule { }
