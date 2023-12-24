import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-create-options',
  templateUrl: './create-options.component.html',
  styleUrls: ['./create-options.component.scss']
})
export class CreateOptionsComponent implements OnInit {


  collectionName = 'CATEGORY';
  CategoryListData:any;
  categoryForm:any = FormGroup;
  step = 0;

  constructor(private crudService: CrudService,) {
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

}
