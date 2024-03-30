import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';




@NgModule({
  declarations: [HomeHeaderComponent, HomeMainComponent, HomeFooterComponent,],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[HomeHeaderComponent, HomeMainComponent, HomeFooterComponent, HomeFooterComponent]
})
export class HomeModule { }
