import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllMediasComponent } from './all-medias/all-medias.component';
import { LibraryComponent } from './library/library.component';
import { AddNewMediaComponent } from './add-new-media/add-new-media.component';
import { SingleMediaComponent } from './single-media/single-media.component';

const routes: Routes = [
  {path: 'library', component:LibraryComponent},
  {path: 'add-library', component:AddNewMediaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
