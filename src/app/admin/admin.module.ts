import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from '../include/header/header.component';
import { FooterComponent } from '../include/footer/footer.component';
import { SidebarComponent } from '../include/sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    AdminRoutingModule
  ],
  
})
export class AdminModule {}
