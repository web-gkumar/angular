import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: '',
        children: [
          { path: 'forms', loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule)},
          { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)},
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
