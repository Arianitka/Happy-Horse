import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from 'express';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private userService: UserService,private router: Router) {}

  
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  get firstName(): string {
    return this.userService.user?.firstName || '';
}

logout() {
  this.userService.logout();
  this.router.navigate(['/home'])
}
}
