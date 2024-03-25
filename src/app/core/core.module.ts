import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent, MainComponent, HomeComponent],
  imports: [CommonModule,RouterModule],
  exports: [HeaderComponent,FooterComponent, MainComponent, HomeComponent]
})
export class CoreModule { }
