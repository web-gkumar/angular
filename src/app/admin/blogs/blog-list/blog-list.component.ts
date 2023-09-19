import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { ConformationDailogComponent } from '../../../models/conformation-dailog/conformation-dailog.component';
import { CreateBlogsComponent } from '../create-blogs/create-blogs.component';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  dataSource: any = [];
  columnNames: any = [];


  constructor(private crudService: CrudService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.crudService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.dataSource = data;
      this.columnNames = Object.keys(data[0]);
    });
  }




  addForm() {
    this.dialog.open(CreateBlogsComponent)
  }
  update(data: any) {
    this.dialog.open(CreateBlogsComponent, {
      data,
    })
    .afterClosed().subscribe(result => {
      
    });
  }
  deletePost(data: any, id: any) {
    this.dialog.open(ConformationDailogComponent, {
      data: {
        title: 'Confirm Delete This Data ?',
        message: data.blog_title
      }
    })
      .afterClosed().subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.crudService.delete(id);
        } else {

        }
      });
  }


}
