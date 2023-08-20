import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AuthGuard } from '../shared/guard/auth.guard'
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    SigninComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'login', component: SigninComponent, canActivate: [AuthGuard] },
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ])
  ]
})
export class AuthModule { }
