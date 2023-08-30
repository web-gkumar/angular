import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AuthGuard } from '../shared/guard/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const authRoutes: Routes = [
  { path: '', component: SigninComponent, canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
