import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CrudService } from 'src/app/shared/services/blog-crud.service';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MediaFileComponent } from '../../../models/media-file/media-file.component';
import { map } from 'rxjs';


@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {

  pageForm!:FormGroup;
  collectionName = 'POSTS';
  htmlContent = '';

  CategoryListData:any;
  tagsData:any;
  featuredImage:any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder,private crudService: CrudService,) {
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


    this.pageForm = this.formBuilder.group({
      title: ['', Validators.required],
      textEditor: [''],
      featureimage: ['']
    })
  }

  ngOnInit(): void {
  }

  public(){
    this.crudService.createPost(this.pageForm.value, this.collectionName);
    this.pageForm.reset('');
  }



  checkCategory(data:any,dataChecked:boolean) {
   
  }

  checktags(data:any,dataChecked:boolean) {

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
    });
  }


  removeFeatureImg() {
    this.featuredImage = '';
  }


}
