import { Component, OnInit, Inject } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  btnName = 'Save';
  public userForm: FormGroup;

  constructor(
    public crudService: CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dailogRef: MatDialogRef<AddProductComponent>,
    public formBuilder: FormBuilder,
  ) {
    this.userForm = this.formBuilder.group({
      productName: [''],
      productCategory: [''],
      productBrand: [''],
      productPrice: [''],
      ProductdiscountPrice: [''],
      productImages: [''],
      productStock: [''],
      productDiscription: ['']

    })
  }

  ngOnInit(): void {
    if (this.data) {
      this.btnName = 'Update'
      this.userForm.patchValue(this.data)
    }
  }

  onCreateData() {
    if (!this.data) {
      this.crudService.createUser(this.userForm.value);
    } else {
      this.updateData()
    }
  };

  updateData() {
    this.crudService.updateUser(this.userForm.value,this.data.id)
  }

}
