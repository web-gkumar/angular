import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  @Input() tableData: any;
  @Input() columnData:any;
  @Output() tableResponse = new Subject();

  constructor() {
   
  }

  ngOnInit(): void {
  }

  update(data:any) {
    this.tableResponse.next(data);
  }

}
