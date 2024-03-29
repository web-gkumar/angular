import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/services/blog-crud.service';
import { ConformationDailogComponent } from '../../../models/conformation-dailog/conformation-dailog.component';
import { CreateBlogsComponent } from '../create-blogs/create-blogs.component';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  dataSource: any = [];
  columnNames: any = [];



  constructor(
    private crudService: CrudService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.crudService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.dataSource = data;
        this.columnNames = Object.keys(data[0]);
      //  this.columnNames.push('Action');
      }
    });
  }

  capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }


  deleteRowData(data:any) {

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
          this.crudService.delete(id, 'Blogs');
        } else {

        }
      });
  }
  


}
