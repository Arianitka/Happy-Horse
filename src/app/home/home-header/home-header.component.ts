import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
  constructor(private userService: UserService, private router: Router) { }


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
