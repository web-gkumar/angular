import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: '',
        children: [
          { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m =>m.DashboardModule)},
          { path: 'post', loadChildren: () => import('./post/post.module').then(m =>m.PostModule)},
          { path: 'media', loadChildren:() => import('./media/media.module').then(m => m.MediaModule)},
          { path: 'forms', loadChildren:() => import('./builder/builder.module').then(m => m.BuilderModule)},
          { path: 'blogs', loadChildren:() => import('./blogs/blogs.module').then(m => m.BlogsModule)},
          
          { path: 'banners', loadChildren: () => import('./videos-project/bannner/bannner.module').then(m => m.BannnerModule)},
          { path: 'news', loadChildren: () => import('./videos-project/news/news.module').then(m => m.NewsModule)},
          { path: 'movies', loadChildren: () => import('./videos-project/movies/movies.module').then(m => m.MoviesModule)},
          
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
