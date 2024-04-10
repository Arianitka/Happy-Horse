import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { EventsComponent } from './events/events.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CaretakeComponent } from './caretake/caretake.component';
import { BookingTableComponent } from './booking-table/booking-table.component';
import { HistoryComponent } from './history/history.component';
import { MoreEventsComponent } from './more-events/more-events.component';
import { AuthGuard } from './profile/profile.guard';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'events', component: EventsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'caretake', component: CaretakeComponent},
  {path: 'booking-table', component: BookingTableComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'more-events', component: MoreEventsComponent},
  {path: 'logout', redirectTo:'/home', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
