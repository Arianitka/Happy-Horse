import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Assuming your authentication logic here
    if (username === 'suren' && password === '1234') {
      // Set user details in local storage
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      return true; // Authentication successful
    } else {
      return false; // Authentication failed
    }
  }

  logout(): void {
   
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

  getCurrentUser(): any {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  }

  isLoggedIn(): boolean {
    
    const userData = localStorage.getItem('currentUser');
    return !!userData; 
}

}



// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private router: Router) { }

//   login (uname : string,pword: string) {
//     if (uname === 'suren' && pword === '1234') {
//       return 200;
      
//     } else {
//       return 403;
//     }

//   }

//   logout() {
//     this.router.navigate(['login'])
//   }
//   getCurrentUser(): any {
   
//     const userData = localStorage.getItem('currentUser');
//     return userData ? JSON.parse(userData) : null;
//   }
// }
