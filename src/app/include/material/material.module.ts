import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';







const materialKit = [
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatFormFieldModule,
      MatMenuModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatTabsModule,
      MatSortModule,
      MatCardModule,
      MatTableModule,
      MatDialogModule,
      MatPaginatorModule,
      MatSelectModule,
      MatChipsModule,
      MatListModule,
      MatRippleModule,
      MatSliderModule,
      MatAutocompleteModule,
      DragDropModule,
      MatTooltipModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatDividerModule,
      MatBottomSheetModule
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
