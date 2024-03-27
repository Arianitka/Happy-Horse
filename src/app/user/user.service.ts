import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged() : boolean {
    return !!this.user;
  }
  constructor() {
    const lsUser = localStorage.getItem(this.USER_KEY)
    this.user = JSON.parse(lsUser)
   }

  login() {
    this.user = {
      firstName: 'Ariana',
      email: 'arianadzh@abv.bg',
      password: '123456',
      phoneNumber: '123-456-789-123',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }
  
  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
