// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm = this.fb.group({
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.maxLength(7)]]
//   });

//   constructor(private fb: FormBuilder, private router: Router) {}

//   handleSubmit(): void {
//     if (this.registerForm.invalid) {
//       console.log("Form is invalid");
//       return;
//     }

//     // Navigate to profile page with query parameters
//     this.router.navigate(['/profile'], { queryParams: { email: this.registerForm.value.email } });
//   }
// }
