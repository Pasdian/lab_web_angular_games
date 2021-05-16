import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  attemptedToLogin = false;


  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      'username' : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      'password' : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log(this.loginForm.value.username);
      console.log(this.loginForm.value.password);
      // TODO primero validar que username y contraseña sean correctos
      this.authService.loginUser();
      sessionStorage.setItem('username', this.loginForm.value.username);
      sessionStorage.setItem('password', this.loginForm.value.password);
    } else {
      this.attemptedToLogin = true;
    }
  }

}
