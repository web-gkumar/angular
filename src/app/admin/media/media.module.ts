import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../include/material/material.module';
import { AllMediasComponent } from './all-medias/all-medias.component';
import { LibraryComponent } from './library/library.component';
import { AddNewMediaComponent } from './add-new-media/add-new-media.component';
import { SingleMediaComponent } from './single-media/single-media.component';

@NgModule({
  declarations: [
    AllMediasComponent,
    LibraryComponent,
    AddNewMediaComponent,
    SingleMediaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
