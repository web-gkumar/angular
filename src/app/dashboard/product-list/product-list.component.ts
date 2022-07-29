import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  displayedColumns: string[] = ['id', 'name', 'email' , 'Phone', 'action'];

  constructor(
    public crudApi: CrudService,
    public dialog: MatDialog,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.dataState();
    this.crudApi.GetProductsList().snapshotChanges().subscribe((data: any[]) => {
      this.products = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.products.push(a as any);
      });
    });
  }

  ngAfterViewInit() {
    this.products.paginator = this.paginator;
  }

  dataState() {
    this.crudApi.GetProductsList().valueChanges().subscribe((data: any) => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    });
  }

  deleteStudent(products: any) {
    if (window.confirm('Are sure you want to delete this student ?')) {
      this.crudApi.DeleteProducts(products.$key);
      this.toastr.success(products.firstName + ' successfully deleted!');
    }
  }


  openDialog(): void {
    this.dialog.open(AddProductComponent);
  }

}
