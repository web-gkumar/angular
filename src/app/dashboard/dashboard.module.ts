import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddInfoComponent } from './add-info/add-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';



@NgModule({
  declarations: [
    ProfileComponent,
    AddProductComponent,
    ProductListComponent,
    UserInfoComponent,
    AddInfoComponent,
    EditInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
