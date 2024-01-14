import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsRoutingModule } from './news-routing.module';
import { MaterialModule } from '../../../include/material/material.module';
import { NewsComponent } from './news.component';


@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
