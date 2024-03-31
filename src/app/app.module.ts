import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { GalleryModule } from './gallery/gallery.module';
import { EventsComponent } from './events/events.component';
import { EventsModule } from './events/events.module';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeModule } from './home/home.module';
import { ContactsComponent } from './contacts/contacts.component';
import { BookingComponent } from './booking/booking.component';
import { BookingModule } from './booking/booking.module';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CoreModule,
    HttpClientModule,
    UserModule,
    GalleryModule,
    EventsModule,
    HomeModule,
    BookingModule,
    ContactsModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
