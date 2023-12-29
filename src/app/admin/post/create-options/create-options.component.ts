import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { MediaFileComponent } from '../../../models/media-file/media-file.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-create-options',
  templateUrl: './create-options.component.html',
  styleUrls: ['./create-options.component.scss']
})
export class CreateOptionsComponent implements OnInit {


  collectionName = 'CATEGORY';
  CategoryListData:any;
  featuredImage:any;
  categoryForm:any = FormGroup;
  step = 0;

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog
    ) {
    this.crudService.getAllPost(this.collectionName).snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.CategoryListData = data;
      }
    });
  }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index;
  }

  checkCategory(data:any,dataChecked:boolean) {

  }

  openDialog() {
    this.dialog.open(MediaFileComponent, {
      width: '1100px',
      data: {
        title: 'Featured Images',
        btntitle: 'Set Featured Images',
      },
    })
    .afterClosed().subscribe(result => {
      this.featuredImage = result;
    });
  }

}
