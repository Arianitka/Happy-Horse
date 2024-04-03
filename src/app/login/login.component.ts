import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  
  formSubmitHandler(form: NgForm) {
    
    const {email, password} = form?.value;
    form.setValue({email: '', password: '' });

    if  (!form){
      return;
    }

    if (form.invalid) {
      console.log("Form is invalid");
    }
  }

}
