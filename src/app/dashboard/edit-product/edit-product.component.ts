import { Component, Inject, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public editForm!: FormGroup;
  productRef: any

  constructor(
    public crudApi: CrudService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router,
    private location: Location,

  ) {
    this.editForm = this.formBuilder.group({
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
    const id = this.act.snapshot.paramMap.get('id');
    this.crudApi.getUserDoc(id).subscribe(res => {
      this.productRef = res;
      this.editForm = this.formBuilder.group({
        productName: [this.productRef.productName],
        productCategory: [this.productRef.productCategory],
        productBrand: [this.productRef.productBrand],
        productPrice: [this.productRef.productPrice],
        ProductdiscountPrice: [this.productRef.ProductdiscountPrice],
        productImages: [this.productRef.productImages],
        productStock: [this.productRef.productStock],
        productDiscription: [this.productRef.productDiscription]
      })
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.crudApi.updateUser(this.editForm.value, id);
    this.goBack();
  };

  goBack() {
    this.location.back();
  }

}
