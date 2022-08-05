import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    public crudService: CrudService,
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
  }

  onSubmit() {
    this.crudService.createUser(this.userForm.value);
  };

}
