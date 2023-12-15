import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './include/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
