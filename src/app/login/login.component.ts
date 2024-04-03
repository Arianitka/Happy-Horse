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

    form.resetForm();

    if (form.invalid) {
      console.log("Form is invalid");
      return;
    }

    console.log("Logged in successfully with email:", email);

    this.router.navigate(['/profile']);
  }
}





// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
 
  
//   formSubmitHandler(form: NgForm) {
    
//     const {email, password} = form?.value;
//     form.setValue({email: '', password: '' });

//     if  (!form){
//       return;
//     }

//     if (form.invalid) {
//       console.log("Form is invalid");
//     }
//   }

// }
