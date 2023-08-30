import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { CreateFormComponent } from './create-form/create-form.component';


import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    FormsListComponent,
    CreateFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ],
  
})
export class AdminModule {}
