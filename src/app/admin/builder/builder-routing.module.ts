import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsListComponent } from './forms-list/forms-list.component';
import { CreateFormComponent } from './create-form/create-form.component';

const routes: Routes = [
  {path: '', component: FormsListComponent},
  {path: 'create-forms', component: CreateFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
