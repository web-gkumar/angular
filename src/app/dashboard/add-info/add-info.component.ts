import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../shared/services/user-info.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    public userInforService: UserInfoService,
    public formBuilder: FormBuilder,
  ) {
    this.userForm = this.formBuilder.group({
      storeName: [''],
      storeCategory: [''],
      contactNo: [''],
      storeAddress: [''],
      storeLocations: [''],
      storeImages: [''],
      storeDiscription: ['']

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userInforService.createStoreInfo(this.userForm.value);
  };
}
