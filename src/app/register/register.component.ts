import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({email: ['', [Validators.required, Validators.email]],
   password: ['', [Validators.maxLength(7)]],
  });
passwordInput: any;

  constructor(private fb: FormBuilder) {}

  handleSubmit():void {
    console.log(this.registerForm.value)

    const {email, password} = this.registerForm?.value;
    this.registerForm.setValue({email: '', password: '' });

    if  (!this.registerForm){
      return;
    }

    if (this.registerForm.invalid) {
      console.log("Form is invalid");
    }
  }

  }

