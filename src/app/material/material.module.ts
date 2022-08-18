import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';



const materialKit = [
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatMenuModule,
      MatSnackBarModule,
      MatTabsModule,
      MatSortModule,
      MatCardModule,
      MatTableModule,
      MatDialogModule,
      MatPaginatorModule,
      MatSelectModule,
      MatChipsModule,
      MatListModule
]


@NgModule({
  declarations: [],
  imports: [
    materialKit
  ],
  exports: [
    materialKit
  ]
})
export class MaterialModule { }
