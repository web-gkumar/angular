import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;
  constructor(
    public crudApi: CrudService,
    public dialog: MatDialog,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.crudApi.GetProductsList().snapshotChanges().subscribe((data: any[]) => {
      this.products = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['id'] = item.key;
        this.products.push(a as any);
      });
    });
  }

  deleteStudent(products: any) {
    if (window.confirm('Are sure you want to delete this student ?')) {
      this.crudApi.DeleteProducts(products.id);
      this.toastr.success(products.firstName + ' successfully deleted!');
    }
  }


  openDialog(): void {
    this.dialog.open(AddProductComponent);
  }

}
