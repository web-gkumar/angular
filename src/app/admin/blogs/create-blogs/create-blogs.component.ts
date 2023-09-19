import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/blog-crud.service';


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
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.blogForms = this.formBuilder.group({
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
    let formdata = [
      
    ]
    if(this.data && this.data != null ) {
      this.crudService.updateBlogs(this.data.id, this.blogForms.value);
    }else {
      this.crudService.createBlogpost(this.blogForms.value);
    }
  }

  change(event:any)
  {
    if(event.value) {
      console.log(event.source.value, event.source.selected);
    }
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  
  onUpload() {
    if (this.selectedFile) {
      this.crudService.uploadFile(this.selectedFile, 'gs://blogs-76980.appspot.com').subscribe((downloadUrl) => {
        if (downloadUrl) {
          console.log('File uploaded. Download URL:', downloadUrl);
        } else {
          console.error('File upload failed.');
        }
      });
    }
  }
 
}
