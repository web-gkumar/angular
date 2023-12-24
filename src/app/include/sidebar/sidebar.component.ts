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
    },
    {
      title: 'Post',
      icon: 'bar_chart',
      subMenu: [
        {
          title: 'All Post',
          icon: 'money',
          link: 'post/all-post',
        },
        {
          title: 'Add New Post',
          icon: 'money',
          link: 'post/new-post',
        },
        {
          title: 'Category',
          icon: 'people',
          link: 'post/category',
        },
        {
          title: 'Tags',
          icon: 'people',
          link: 'post/tag',
        },
      ],
    },
    {
      title: 'Media',
      icon: 'collections_bookmark',
      subMenu: [
        {
          title: 'library',
          icon: 'money',
          link: 'media/library',
        },
        {
          title: 'Add New library',
          icon: 'money',
          link: 'media/add-library',
        },
      ]
    }
    
    
    ,
    {
      title: 'Pages',
      icon: 'layers',
      link: '',
    },
    {
      title: 'Comments',
      icon: 'forum',
      link: '',
    },
    {
      title: 'Settings',
      icon: 'settings',
      link: '',
    },
    {
      title: 'Blog',
      icon: 'rss_feed',
      link: 'blogs',
    },
    
    {
      title: 'Forms',
      icon: 'design_services',
      link: 'forms',
    }
  ];



}
