

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  formSubmitHandler(form: NgForm): void {
    if (!form) {
      console.log("Form is not available");
      return;
    }

    const { email, password } = form.value;

    if (form.invalid) {
      console.log("Form is invalid");
      return;
    }

    console.log("Logged in successfully with email:", email);
    form.resetForm();
    this.router.navigate(['/home']);
  }
}
