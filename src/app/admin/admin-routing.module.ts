import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { CreateFormComponent } from './create-form/create-form.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: '',
        children: [
          { path: 'form-list', component: FormsListComponent },
          { path: 'create-forms', component: CreateFormComponent },
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
