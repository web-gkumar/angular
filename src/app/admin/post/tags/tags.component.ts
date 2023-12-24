import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { PostService } from 'src/app/shared/services/post.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tagForm:FormGroup;
  collectionName = 'TAGS'
  tablerowData:any;
  columnData:any;
  tableResponseData:any;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private postService: PostService
  ) {
    this.tagForm = this.formBuilder.group({
      name: ['', Validators.required],
      slug: [''],
      description: ['']
    })
  }

  ngOnInit(): void {
    this.getAllCategory();
  }


  addTag() {
    let formValue = this.tagForm.value;
    if(this.tableResponseData && this.tableResponseData != null ) {
      let formData = this.postService.setSlug(formValue);
      this.crudService.updatePost(this.tableResponseData.id, formData, this.collectionName);
    }else {
      let formData = this.postService.setSlug(formValue);
      this.crudService.createPost(formData, this.collectionName);
    }
    this.tableResponseData = [];
    this.tagForm.reset();
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
        this.tablerowData = data;
        this.columnData = Object.keys(data[0]);
      }
    });
  }

  getResponse(response:any) {
    this.tableResponseData = response;
    this.tagForm.patchValue(response);
  }



}
