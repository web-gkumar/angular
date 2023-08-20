import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';


@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
