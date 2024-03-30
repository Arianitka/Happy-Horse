import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { GalleryModule } from './gallery/gallery.module';
import { EventsComponent } from './events/events.component';
import { EventsModule } from './events/events.module';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    EventsComponent,
    HomeComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    GalleryModule,
    EventsModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
