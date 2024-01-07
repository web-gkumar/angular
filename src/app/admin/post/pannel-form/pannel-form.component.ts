import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { MediaFileComponent } from '../../../models/media-file/media-file.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-pannel-form',
  templateUrl: './pannel-form.component.html',
  styleUrls: ['./pannel-form.component.scss']
})
export class PannelFormComponent implements OnInit {

  CategoryListData:any;
  tagsData:any;
  featuredImage:any;
  
  @Output() PannelResponse = new EventEmitter<any>();

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog
    ) {
    this.crudService.getAllPost('CATEGORY').snapshotChanges().pipe(
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

    this.crudService.getAllPost('TAGS').snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.tagsData = data;
      }
    });
  }

  ngOnInit(): void {
   
  }


  checkCategory(data:any,dataChecked:boolean) {
    if(dataChecked) {
      this.PannelResponse.emit(data.name);
    }
    
  }

  checktags(data:any,dataChecked:boolean) {
    if(dataChecked) {
      this.PannelResponse.emit(data.name);
    }
    
  }

  featureImg() {
    this.dialog.open(MediaFileComponent, {
      width: '1100px',
      data: {
        title: 'Featured Images',
        btntitle: 'Set Featured Images',
      },
    })
    .afterClosed().subscribe(result => {
      this.featuredImage = result;
      this.PannelResponse.emit(this.featuredImage);
    });
  }


  removeFeatureImg() {
    this.featuredImage = '';
  }


}
