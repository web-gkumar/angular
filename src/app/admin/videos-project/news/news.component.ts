import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { ConformationDailogComponent } from '../../../models/conformation-dailog/conformation-dailog.component';
import { MediaFileComponent } from '../../../models/media-file/media-file.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsForm!: FormGroup;
  posterimg:any;
  gridData:any = [];
  updateCurrentId:any;
  isbutton:boolean = false;
  posterimage:any;




  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private crudService: CrudService,
  ){
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      description: [''],
      posterimg: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.crudService.getAllPost("NEWS").snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.gridData = data;
      }
    });
  }

  addNews() {
    if(this.posterimage && this.posterimage != ''){
      this.newsForm.value['posterimg'] = this.posterimage;
    }
    if(this.isbutton){
      this.crudService.updatePost(this.updateCurrentId,this.newsForm.value, 'NEWS');
      this.isbutton = false;
    }else {
      this.crudService.createPost(this.newsForm.value, 'NEWS');
    }
    this.posterimage = '';
    this.newsForm.reset();
    
  }

  update(data:any, id:any) {
    this.isbutton = true;
    this.posterimage = data['posterimg'];
    this.updateCurrentId = id;
    this.newsForm.patchValue(data);
  }
  delete(data:any, id:any) {
    this.dialog.open(ConformationDailogComponent, {
      data: {
        title: 'Confirm Delete This Data ?',
        message: data.title
      }
    })
      .afterClosed().subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.crudService.delete(id, 'NEWS');
        }
      });
    
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
      this.posterimage = result;
    });
  }


  removeFeatureImg() {
    this.posterimage = '';
  }


}
