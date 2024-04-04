import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
isAuthenticated: any;
  constructor(private router: Router, private auth: AuthService) { }

  // constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {}


  goToHome() {
    this.router.navigate(['home']);

  }

  logout() {
    this.auth.logout()
  }

  // get isLoggedIn(): boolean {
  //   return this.userService.isLogged;
  // }
  // get firstName(): string {
  //   return this.userService.user?.firstName || '';
  // }

  // logout() {
  //   this.userService.logout();
  //   this.router.navigate(['/home'])
  // }
}
