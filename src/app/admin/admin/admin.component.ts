import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  opened = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.opened = !this.opened;
  }

}
