import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllPostsComponent } from './all-posts/all-posts.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { CategoryComponent } from './category/category.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: 'all-post', component: AllPostsComponent},
  { path: 'new-post', component: AddNewPostComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'tag', component: TagsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
