import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeHeaderComponent, HomeMainComponent, HomeFooterComponent, HomeComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[HomeHeaderComponent, HomeMainComponent, HomeFooterComponent, HomeComponent]
})
export class HomeModule { }
