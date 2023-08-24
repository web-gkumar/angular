import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CreateFormComponent } from '../create-form/create-form.component';
@Component({
  selector: 'app-forms-list',
  standalone: true,
  imports: [MaterialModule, CreateFormComponent],
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
