import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  tableHead = ['Sr No', 'Image', 'Name', 'Category', 'Brand', 'Price', 'Discount Price', 'Available', 'productDiscription', 'Actions']

  Products:any;
  constructor(
    public dialog: MatDialog,
    public crudApi: CrudService,
    public toastr: ToastrService
  ) {
  }


  stockBg() {
    if(this.Products.productStock == 'yes'){
      console.log('Yes')
    }
  }

  ngOnInit() {
    this.crudApi.getUserList().subscribe((res) => {
      this.Products = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as any),
        };
      });
    });
  }


  removeData(user:any) {
    if (window.confirm('Are sure you want to delete this student ?')) {
      this.crudApi.deleteUser(user)
    }
  }

  addProduct() {
    this.dialog.open(AddProductComponent);
  }

  updateData(rowData:any) {
    this.dialog.open(AddProductComponent, {
      data: rowData
    });
  }


}
