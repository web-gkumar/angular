import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannnerRoutingModule } from './bannner-routing.module';
import { MaterialModule } from '../../../include/material/material.module';

import { BannerComponent } from './banner.component';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BannnerRoutingModule
  ]
})
export class BannnerModule { }
