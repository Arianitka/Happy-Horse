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
import { GalleryHeaderComponent } from './gallery/gallery-header/gallery-header.component';
import { GalleryModule } from './gallery/gallery.module';
import { ThemeModule } from './theme/theme.module';

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
    HttpClientModule,
    UserModule,
    GalleryModule,
    ThemeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
