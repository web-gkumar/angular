import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { ConformationDailogComponent } from '../../../models/conformation-dailog/conformation-dailog.component';
import { MediaFileComponent } from '../../../models/media-file/media-file.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  bannerForm: FormGroup;
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
    this.bannerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      posterimg: [''],
    })
  }

  ngOnInit(): void {
    this.crudService.getAllPost("BANNERS").snapshotChanges().pipe(
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
      this.bannerForm.value['posterimg'] = this.posterimage;
    }
    if(this.isbutton){
      this.crudService.updatePost(this.updateCurrentId,this.bannerForm.value, 'BANNERS');
      this.isbutton = false;
    }else {
      this.crudService.createPost(this.bannerForm.value, 'BANNERS');
    }
    this.posterimage = '';
    this.bannerForm.reset();
    
  }

  update(data:any, id:any) {
    this.isbutton = true;
    this.posterimage = data['posterimg'];
    this.updateCurrentId = id;
    this.bannerForm.patchValue(data);
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
          this.crudService.delete(id, 'BANNERS');
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
