import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';
import { FileUploadComponent } from 'src/app/models/file-upload/file-upload.component';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';


@Component({
  selector: 'app-create-blogs',
  templateUrl: './create-blogs.component.html',
  styleUrls: ['./create-blogs.component.scss']
})
export class CreateBlogsComponent implements OnInit {

  blogForms:FormGroup;
  title = 'Create Blog';
  category = ['Books','Sports','Entertments','News']


  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    public dialogRef: MatDialogRef<CreateBlogsComponent>,
    private fileUploadService:FileUploadService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
    ) {
      this.blogForms = this.formBuilder.group({
        id: [],
        blog_title: ['', Validators.required],
        category: ['', Validators.required],
        blog_image: [''],
        blog_desc: [''],
        mta_title: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(60)]],
        mta_desc: [''],
      })
    }

  ngOnInit(): void {
    this.blogForms.patchValue(this.data)
  }


  addPost() {
    if(this.data && this.data != null ) {
      this.crudService.updateBlogs(this.data.id, this.blogForms.value);
    }else {
      this.crudService.createBlogpost(this.blogForms.value);
    }
  }

  change(event:any)
  {
    if(event.value) {
     // console.log(event.source.value, event.source.selected);
    }
  }

  fileupload() {
    this.dialog.open(FileUploadComponent, {
      width: '1000px',
      data: {
        title: 'Blog Image Post',
      }
    })
    .afterClosed().subscribe(result => {
      
    });

  }

  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   const path = `application/${file.name}`;
  //   if(file) {
  //     let downaloURl = this.fileUploadService.uploadImage(file);
  //     console.log(downaloURl);
  //   }
  // }


  downloadURL!: Observable<string>;
  imagepath: any;

  onFileSelected(event:any) {
    const file = event.target.files[0];
    const filePath = `application/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.imagepath = url;
            }
          });
        })
      ).subscribe();
  }
 
}
