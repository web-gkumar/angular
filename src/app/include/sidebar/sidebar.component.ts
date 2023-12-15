import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  

  menu:any = [
    {
      title: 'Dashboard',
      icon: 'home',
      link: 'dashboard',
      color: '#000000',
    },
    {
      title: 'Forms',
      icon: 'design_services',
      link: 'forms',
      color: '#000000',
    },
    {
      title: 'Blogs',
      icon: 'rss_feed',
      link: 'blogs',
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
          link: 'forms',
          color: '#000000',
        },
        {
          title: 'Blogs',
          icon: 'people',
          color: '#000000',
          link: 'blogs',
        },
      ],
    },
  ];



}
