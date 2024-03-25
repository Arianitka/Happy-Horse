import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import { GalleryFooterComponent } from './gallery-footer/gallery-footer.component';
import { GalleryHeaderComponent } from './gallery-header/gallery-header.component';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GalleryHeaderComponent,
    GalleryMainComponent,
    GalleryFooterComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class GalleryModule { }
