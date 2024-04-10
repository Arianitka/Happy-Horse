
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import {HttpClientModule} from '@angular/common/http';
import { UserModule } from './user/user.module';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { ThemeModule } from './theme/theme.module';
@NgModule({
    declarations: [
      AppComponent,
      MainComponent,
      ThemesListComponent,
      PostsListComponent,
      AddThemeComponent,
      
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      CoreModule,
      SharedModule,
      HttpClientModule,
      UserModule,
      ThemeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }




// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// // import { CoreModule } from './core/core.module';
// import { HttpClientModule } from '@angular/common/http';
// // import { UserModule } from './user/user.module';
// import { GalleryModule } from './gallery/gallery.module';
// import { EventsComponent } from './events/events.component';
// import { EventsModule } from './events/events.module';
// import { GalleryComponent } from './gallery/gallery.component';
// import { HomeModule } from './home/home.module';
// import { ContactsComponent } from './contacts/contacts.component';
// import { BookingComponent } from './booking/booking.component';
// import { BookingModule } from './booking/booking.module';
// import { ContactsModule } from './contacts/contacts.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { CommentsComponent } from './comments/comments.component';
// import { MyRouterLinkDirectiveDirective } from './my-router-link.directive.directive';
// import { MaxCountDirective } from './max-count.directive';
// import { CaretakeComponent } from './caretake/caretake.component';
// import { BookingTableComponent } from './booking-table/booking-table.component';
// import { HistoryComponent } from './history/history.component';
// import { MoreEventsComponent } from './more-events/more-events.component';
// import { LogoutComponent } from './logout/logout.component';
// import { ProfileComponent } from './profile/profile.component';
// import { AuthGuard } from './profile/profile.guard';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     CommentsComponent,
//     MyRouterLinkDirectiveDirective,
//     MaxCountDirective,
//     CaretakeComponent,
//     BookingTableComponent,
//     HistoryComponent,
//     MoreEventsComponent,
//     ProfileComponent,
    

    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     // CoreModule,
//     HttpClientModule,
//     // UserModule,
//     GalleryModule,
//     EventsModule,
//     HomeModule,
//     BookingModule,
//     ContactsModule,
//     CommonModule,
//     RouterModule,
//     FormsModule,
//     ReactiveFormsModule,
    
    
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent, AuthGuard]
// })
// export class AppModule { }
