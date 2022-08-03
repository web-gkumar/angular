import { Component, Inject, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public editForm!: FormGroup;
  userRef: any

  constructor(
    public crudApi: CrudService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router

  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      email: [''],
      contact: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.crudApi.getUserDoc(id).subscribe(res => {
      this.userRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.userRef.name],
        email: [this.userRef.email],
        contact: [this.userRef.contact]
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.crudApi.updateUser(this.editForm.value, id);
  };

}
