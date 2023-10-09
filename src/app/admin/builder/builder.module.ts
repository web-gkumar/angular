import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuilderRoutingModule } from './builder-routing.module';
import { MaterialModule } from '../../material/material.module';
import { FormsListComponent } from './forms-list/forms-list.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { FormFieldsDetailsComponent } from './form-fields-details/form-fields-details.component';

@NgModule({
  declarations: [FormsListComponent,CreateFormComponent, FormFieldsComponent, FormFieldsDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BuilderRoutingModule
  ]
})
export class BuilderModule { }
