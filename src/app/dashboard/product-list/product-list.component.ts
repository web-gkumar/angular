import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  Users:any;
  constructor(
    public crudApi: CrudService,
    public dialog: MatDialog,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.crudApi.getUserList().subscribe((res) => {
      this.Users = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as any),
        };
      });
    });
  }

  removeUser = (user:any) => this.crudApi.deleteUser(user);

  addProducts(): void {
    this.dialog.open(AddProductComponent);
  }


}
