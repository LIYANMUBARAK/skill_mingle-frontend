import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesAndSubcategoriesComponent } from './components/categories-and-subcategories/categories-and-subcategories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddSubcategoryComponent } from './components/add-subcategory/add-subcategory.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { UsersComponent } from './components/users/users.component';
import { FreelancersComponent } from './components/freelancers/freelancers.component'

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort';
import { SubcategoryEditModalComponent } from './components/subcategory-edit-modal/subcategory-edit-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GigsComponent } from './components/gigs/gigs.component';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SharedModule } from 'src/app/shared modules/shared.module';
import { FreelancerMoreInfoComponent } from './components/freelancer-more-info/freelancer-more-info.component';


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
    FreelancersComponent,
    SubcategoryEditModalComponent,
    GigsComponent,
    ConfirmationPopupComponent,
    OrdersComponent,
    FreelancerMoreInfoComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    SharedModule
  ]
})
export class AdminModule { }
