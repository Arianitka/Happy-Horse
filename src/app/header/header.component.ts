import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userService: any;
  
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  get firstName(): string {
    return this.userService.user.firstName || '';
  constructor(private userService: UserService) {}

}
}
