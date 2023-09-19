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

  

  menu:any = [
    {
      title: 'Dashboard',
      icon: 'home',
      link: '',
      color: '#000000',
    },
    {
      title: 'Forms',
      icon: 'design_services',
      link: './form-list',
      color: '#000000',
    },
    {
      title: 'Blogs',
      icon: 'rss_feed',
      link: './blog',
      color: '#000000',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#000000',
      subMenu: [
        {
          title: 'Forms',
          icon: 'money',
          link: './form-list',
          color: '#000000',
        },
        {
          title: 'Blogs',
          icon: 'people',
          color: '#000000',
          link: './blog',
        },
      ],
    },
  ];


}
