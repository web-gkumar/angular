import {Component, Input, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormBuilderService} from '../../../shared/services/form-builder.service';
import {FormFieldsDetailsComponent} from '../form-fields-details/form-fields-details.component';
import { ConformationDailogComponent } from '../../../models/conformation-dailog/conformation-dailog.component';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent implements OnInit {

  @Input() formData:any;
  formSettingData:any;
  formlist!:FormGroup;
  formList:any = [];
  formDetailsList:any;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private formBuilderService: FormBuilderService
    ) { }

  ngOnInit(): void {
    this.formlist = this.formBuilder.group({
      text: ['', Validators.required],
      number: ['', Validators.required],
      selectoption: ['', Validators.required],
      datepicker: ['', Validators.required],
      textarea: ['', Validators.required],
      radiobtn: ['', Validators.required],
      checkbox: ['', Validators.required],
    })
  }


  label:any = "label";
  filedName:any = "Testing";
  width:any = "20px";
  type:any = "text";
  className:any = "col-lg-3"
  openDialog(data:any,index:any): void {
    const dialogRef = this.dialog.open(FormFieldsDetailsComponent, {
      data: {label: this.label, filedName: this.filedName, width: this.width, type: this.type, class: this.className},
    });
    dialogRef.afterClosed().subscribe(result => {
       this.formDetailsList = JSON.parse(JSON.stringify(result));
    });
  }

  saveFrom() {
    this.formBuilderService.createForms(this.formlist.value)
    this.resetForm();
  }

  resetForm() {
    this.formlist.reset();
  }










  deleteFields(data:any,id:any) {
    this.dialog.open(ConformationDailogComponent, {
      data: {
        title: `'Confirm Delete' ${data.type} Fields ?`,
        message: data.type
      }
    })
      .afterClosed().subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.formBuilderService.deleteForms(id);
        }
      });
  }

}
