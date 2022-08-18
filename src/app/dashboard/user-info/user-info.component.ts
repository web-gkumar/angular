import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddInfoComponent } from '../add-info/add-info.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {


  folders:any = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes:any = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];



  constructor(
    public dialog: MatDialog,
    public crudApi: CrudService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }


  addInfo() {
    const dialogRef = this.dialog.open(AddInfoComponent);
  }



}
