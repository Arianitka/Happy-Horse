import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../home/home.component';
import { HomeHeaderComponent } from '../home/home-header/home-header.component';



@NgModule({
  declarations: [HomeHeaderComponent,FooterComponent, MainComponent, HomeComponent],
  imports: [CommonModule,RouterModule],
  exports: [HomeHeaderComponent,FooterComponent, MainComponent, HomeComponent]
})
export class CoreModule { }
