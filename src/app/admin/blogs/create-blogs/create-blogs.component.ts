import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { FileUploadComponent } from 'src/app/models/file-upload/file-upload.component';



@Component({
  selector: 'app-create-blogs',
  templateUrl: './create-blogs.component.html',
  styleUrls: ['./create-blogs.component.scss']
})
export class CreateBlogsComponent implements OnInit {

  blogForms:FormGroup;
  title = 'Create Blog';
  category = ['Books','Sports','Entertments','News']

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    public dialogRef: MatDialogRef<CreateBlogsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
      this.blogForms = this.formBuilder.group({
        blog_title: ['', Validators.required],
        category: ['', Validators.required],
        blog_image: [''],
        blog_desc: [''],
        mta_title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
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
      this.crudService.createPost(this.blogForms.value, 'Blogs');
    }
  }

  change(event:any)
  {
    if(event.value) {
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

  
}
