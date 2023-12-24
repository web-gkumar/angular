import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CrudService } from 'src/app/shared/services/blog-crud.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  collectionName = 'POSTS';
  postData:any;
  tableColumnData:any;

  constructor(private crudService: CrudService,) { }

  ngOnInit(): void {
    this.getAllPost();
  }



  getAllPost() {
    this.crudService.getAllPost(this.collectionName).snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.postData = data;
        this.tableColumnData = Object.keys(data[0]);
      }
    });
  }

  getResponse(response:any) {
    console.log(response)
  }

}
