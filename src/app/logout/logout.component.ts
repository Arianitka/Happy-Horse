// logout.component.ts

import { Component, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [AuthService] // Provide AuthService at the component level
})
export class LogoutComponent {
  
  constructor(@Inject(AuthService) private authService: AuthService) {} // Inject AuthService

  logout(): void {
    this.authService.logout(); // Call the logout method from your AuthService
    
  }
}