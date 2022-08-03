import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    public router: Router
  ) { 
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      contact: ['']
    })      
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.crudService.createUser(this.userForm.value);
   };



}
