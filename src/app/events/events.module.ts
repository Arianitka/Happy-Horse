import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { RouterModule } from '@angular/router';
// import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule, RouterModule,
    //  HomeModule
  ]
})
export class EventsModule { }
