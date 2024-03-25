import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { CurrentThemeComponent } from './theme/current-theme/current-theme.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { SharedComponent } from './shared/shared.component';
import { GalleryHeaderComponent } from './gallery/gallery-header/gallery-header.component';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    
    AddThemeComponent,
    CurrentThemeComponent
   
    // HeaderComponent,
    // FooterComponent,
    // MainComponent,
    // SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    // SharedModule,
    HttpClientModule,
    UserModule,
    GalleryModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
