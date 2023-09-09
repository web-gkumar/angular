import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from '../include/header/header.component';
import { FooterComponent } from '../include/footer/footer.component';
import { SidebarComponent } from '../include/sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { CreateBlogsComponent } from './blogs/create-blogs/create-blogs.component';
import { EditBlogsComponent } from './blogs/edit-blogs/edit-blogs.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AdminComponent,
    DashboardComponent,
    FormsListComponent,
    CreateFormComponent,
    BlogListComponent,
    CreateBlogsComponent,
    EditBlogsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  
})
export class AdminModule {}
