import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { CreateBlogsComponent } from './blogs/create-blogs/create-blogs.component';
import { EditBlogsComponent } from './blogs/edit-blogs/edit-blogs.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: '',
        children: [
          { path: 'form-list', component: FormsListComponent },
          { path: 'create-forms', component: CreateFormComponent },
          { path: 'blog', component: BlogListComponent },
          { path: 'create-blog', component: CreateBlogsComponent },
          { path: 'edit-blog/:id', component: EditBlogsComponent },
          { path: '', component: DashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
