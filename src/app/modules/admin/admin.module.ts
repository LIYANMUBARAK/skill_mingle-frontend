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


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CategoriesAndSubcategoriesComponent,
    AddCategoryComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
