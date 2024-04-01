import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  errorMsg = "";

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const res = this.authService.login(username, password);

    if (res === 200) {
      this.router.navigate(['/home']);
    } else if (res === 403) {
      this.errorMsg = 'Invalid Credentials';
    }
  }
}

  //  constructor(private auth: AuthService, private router:Router) { }
  //  ngOnInit(): void {
  //  }

  //  login() {
  //   if (this.username.trim().length === 0) {
  //     this.errorMsg = 'Username is required';
  //  } else if (this.password.trim().length === 0) {
  //   this.errorMsg = 'Password is required';
  //  } else  {
  //   this.errorMsg = '';
  //   let res = this.auth.login(this.username, this.password);
  //   if (res === 200) {
  //     this.router.navigate(['home'])
  //  }
  //  if (res === 403) {
  //  this.errorMsg = 'Invalid Credentials'
  //  }
  // }

  // }


