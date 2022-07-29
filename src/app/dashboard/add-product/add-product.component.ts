import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public addProductForm!: FormGroup;
  
  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) { }


  ngOnInit() {
    this.crudApi.GetProductsList();
    this.productForm();
  }


  productForm() {
    this.addProductForm = this.fb.group({
      fullName: [''],
      email: [''],
      mobileNumber: [''],
    });
  }

  ResetForm() {
    this.addProductForm.reset();
  }

  submitStudentData() {
    this.crudApi.AddSProducts(this.addProductForm.value);
    this.toastr.success(
      this.addProductForm.controls['fullName'].value + ' successfully added!'
    );
    this.ResetForm();
  }




}
