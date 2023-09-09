import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/services/blog-crud.service';






@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  displayedColumns: string[] = ['id','post_title', 'post_discription', 'post_poster', 'meta_title', 'meta_discription', 'action'];
  dataSource: any;


  constructor(
    private crudService: CrudService,
    ) { }

  ngOnInit(): void {
    this.getblogpost();
  }

  async getblogpost() {
   // this.dataSource = await this.crudService.getBlogPost();
  }



}
