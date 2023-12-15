import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: '',
        children: [
          { path: 'forms', loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule)},
          { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)},
          { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m =>m.DashboardModule)},
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
