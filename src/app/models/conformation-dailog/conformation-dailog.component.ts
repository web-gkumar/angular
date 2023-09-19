import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-conformation-dailog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './conformation-dailog.component.html',
  styles: ['.mydiv{color:blue }']
})
export class ConformationDailogComponent implements OnInit {

  title: string | undefined;
  message: string | undefined;
  constructor(
    public dialogRef: MatDialogRef<ConformationDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
  }
}
