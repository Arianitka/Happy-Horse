import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,RouterModule,HomeModule
  ]
})
export class ContactsModule { }
