import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';



@NgModule({
  declarations: [CurrentThemeComponent],
  imports: [CommonModule, ThemeRoutingModule],
  
})
export class ThemeModule { }