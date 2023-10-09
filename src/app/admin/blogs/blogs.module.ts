import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogsRoutingModule } from './blogs-routing.module';
import { MaterialModule } from '../../material/material.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CreateBlogsComponent } from './create-blogs/create-blogs.component';


@NgModule({
  declarations: [BlogListComponent, CreateBlogsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
