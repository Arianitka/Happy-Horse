import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  formSubmitHandler(form: NgForm) {

    console.log(form);

    const {email, password} = form?.value;
    form.reset()
  }

}
