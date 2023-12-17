import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../include/material/material.module';
import { PostRoutingModule } from './post-routing.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { CategoryComponent } from './category/category.component';
import { TagsComponent } from './tags/tags.component';
import { TableDataComponent } from './table-data/table-data.component';
import { CreateOptionsComponent } from './create-options/create-options.component';


@NgModule({
  declarations: [
    AllPostsComponent,
    AddNewPostComponent,
    CategoryComponent,
    TagsComponent,
    TableDataComponent,
    CreateOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PostRoutingModule
  ]
})
export class PostModule { }
