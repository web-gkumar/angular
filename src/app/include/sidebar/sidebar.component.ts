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
      title: 'Video Project',
      icon: 'bar_chart',
      subMenu: [
        {
          title: 'Banner',
          icon: 'newspaper',
          link: 'banners',
        },
        {
          title: 'News',
          icon: 'newspaper',
          link: 'news',
        },
        {
          title: 'Movies',
          icon: 'movie',
          link: 'movies',
        },
        {
          title: 'Web Serise',
          icon: 'video',
          link: 'web-serise',
        },
      ],
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
    
  ];



}
