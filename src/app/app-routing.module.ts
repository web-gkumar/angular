import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './dashboard/create-form/create-form.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FormsListComponent } from './dashboard/forms-list/forms-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'forms', component: FormsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
