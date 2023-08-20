import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-forms-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
