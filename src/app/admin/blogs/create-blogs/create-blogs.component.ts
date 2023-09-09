import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/blog-crud.service';


@Component({
  selector: 'app-create-blogs',
  templateUrl: './create-blogs.component.html',
  styleUrls: ['./create-blogs.component.scss']
})
export class CreateBlogsComponent implements OnInit {

  blogForms!:FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService
    ) { }

  ngOnInit(): void {
    this.blogForms = this.formBuilder.group({
      mta_title: ['', [Validators.minLength(20), Validators.maxLength(60)]],
      mta_desc: [''],
      blog_title: ['', Validators.required],
      blog_image: [''],
      blog_desc: [''],
    })
  }


  addPost() {
    this.crudService.createBlogpost(this.blogForms.value);
    this.resetForm();
  }
  resetForm() {
    this.blogForms.reset();
  }
}
