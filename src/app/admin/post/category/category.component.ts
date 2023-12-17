import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { PostService } from 'src/app/shared/services/post.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryForm:FormGroup;
  collectionName = 'CATEGORY';
  CategoryListData:any;
  categoryColumnData:any;
  tableResponseData:any;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private postService: PostService
  ) {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      slug: [''],
      description: ['']
    })
  }

  ngOnInit(): void {
    this.getAllCategory();
  }


  addCategory() {
    let formValue = this.categoryForm.value;
    if(this.tableResponseData && this.tableResponseData != null ) {
      let formData = this.postService.setSlug(formValue);
      this.crudService.updatePost(this.tableResponseData.id, formData, this.collectionName);
    }else {
      let formData = this.postService.setSlug(formValue);
      this.crudService.createPost(formData, this.collectionName);
    }
    this.tableResponseData = [];
    this.categoryForm.reset();
  }

  getAllCategory() {
    this.crudService.getAllPost(this.collectionName).snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.CategoryListData = data;
        this.categoryColumnData = Object.keys(data[0]);
      }
    });
  }

  getResponse(response:any) {
    this.tableResponseData = response;
    this.categoryForm.patchValue(response);
  }
  

}
