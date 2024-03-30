import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,RouterModule,HomeModule
  ]
})
export class BookingModule { }
