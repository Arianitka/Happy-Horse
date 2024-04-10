import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {UserRoutingModule } from './user-routing.module'
import { Router, RouterModule } from '@angular/router';
// import { ListComponent } from './list/list.component';
import { AuthGuard } from '../profile/profile.guard';
import { Resolver } from 'dns';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,UserRoutingModule, RouterModule.forChild([
      {
        path: 'user/list',
        // component: ListComponent
      },
      {
        path: 'user/detail/:id',
        resolve: { user: Resolver}
        // canActivate: [AuthGuard],
        // component: ProfileComponent
        
      }
    ])],
    exports : [
      UserModule,
    ]
})
export class UserModule { }
