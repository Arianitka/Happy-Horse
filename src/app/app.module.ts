import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommentsComponent } from './comments/comments.component';
import { MyRouterLinkDirectiveDirective } from './my-router-link.directive.directive';
import { MaxCountDirective } from './max-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CommentsComponent,
    MyRouterLinkDirectiveDirective,
    MaxCountDirective

    
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
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
