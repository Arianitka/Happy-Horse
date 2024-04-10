import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CurrentThemeComponent,
    AddThemeComponent
  ],
  imports: [
    CommonModule, ThemeRoutingModule, SharedModule
  ]
})
export class ThemeModule { }
