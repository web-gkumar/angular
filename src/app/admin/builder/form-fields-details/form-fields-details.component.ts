import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-fields-details',
  templateUrl: './form-fields-details.component.html',
  styleUrls: ['./form-fields-details.component.scss']
})
export class FormFieldsDetailsComponent implements OnInit {

  formSetting:FormGroup;
  formData:any;
  constructor(
    private formBuilder: FormBuilder,
    private formBuilderService: FormBuilderService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.formSetting = this.formBuilder.group({
      label: ['', Validators.required],
      filedName: ['', Validators.required],
      width: [''],
      class: [''],
      maxLength: [''],
      minLength: [''],
      required: [''],
      errormsg: [''],
    })
  }

  ngOnInit(): void {
  }
  
  formDetailsSave() {
    this.formData = this.formSetting.value
  }

}
