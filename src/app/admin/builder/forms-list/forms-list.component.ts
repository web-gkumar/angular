import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { map } from 'rxjs/operators';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {

  dataSource: any = [];
  columnNames: any = [];

  constructor(private formBuilderService: FormBuilderService) { }

  ngOnInit(): void {
    this.formBuilderService.getAllForms().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.dataSource = data;
        this.columnNames = Object.keys(data[0]);
      //  this.columnNames.push('Action');
      }
    });
  }

  capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

}
