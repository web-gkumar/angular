import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { CreateBlogsComponent } from './create-blogs/create-blogs.component';

const routes: Routes = [
  {path : '', component: BlogListComponent},
  {path : 'create-blogs', component: CreateBlogsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
