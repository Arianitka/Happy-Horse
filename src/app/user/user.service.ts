import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor (private http: HttpClient) {}

  // loadUsers() {
  //   return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  // }

}
 




// // import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// // import { isPlatformBrowser } from '@angular/common';
// // import { UserForAuth } from '../types/user';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class UserService {
// //   user: UserForAuth | undefined;
// //   USER_KEY = '[user]';

// //   get isLogged() : boolean {
// //     return !ret!this.user;
// //   }

// //   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
// //     if (isPlatformBrowser(this.platformId)) {
// //       const lsUser = localStorage.getItem(this.USER_KEY);
// //       this.user = lsUser ? JSON.parse(lsUser) : undefined;
// //     }
// //   }

// //   login() {
// //     this.user = {
// //       firstName: 'Ariana',
// //       email: 'arianadzh@abv.bg',
// //       password: '123456',
// //       phoneNumber: '123-456-789-123',
// //     };

// //     if (isPlatformBrowser(this.platformId)) {
// //       localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
// //     }
// //   }
  
// //   logout() {
// //     this.user = undefined;
// //     if (isPlatformBrowser(this.platformId)) {
// //       localStorage.removeItem(this.USER_KEY);
// //     }
// //   }
// // }




// // 22222

// // import { Injectable, Inject } from '@angular/core';
// // import { UserForAuth } from '../types/user';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class UserService {
// //   user: UserForAuth | undefined;
// //   USER_KEY = '[user]';

// //   get isLogged() : boolean {
// //     return !!this.user;
// //   }
// //   constructor() {
// //     const lsUser = localStorage.getItem(this.USER_KEY)
// //     this.user = JSON.parse(lsUser!)
// //    }

// //   login() {
// //     this.user = {
// //       firstName: 'Ariana',
// //       email: 'arianadzh@abv.bg',
// //       password: '123456',
// //       phoneNumber: '123-456-789-123',
// //     };

// //     localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
// //   }
  
// //   logout() {
// //     this.user = undefined;
// //     localStorage.removeItem(this.USER_KEY);
// //   }
// // }
