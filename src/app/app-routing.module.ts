import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { EventsComponent } from './events/events.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommentsComponent } from './comments/comments.component';
import { CaretakeComponent } from './caretake/caretake.component';
import { BookingTableComponent } from './booking-table/booking-table.component';

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
