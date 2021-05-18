import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  attemptedToLogin = false;

  user: User = {
    userID: 0,
    name: '',
    firstLastName: '',
    secondLastName: '',
    password: '',
  };

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log(this.loginForm.value.name);
      console.log(this.loginForm.value.password);
      // TODO primero validar que username y contraseña sean correctos
      sessionStorage.setItem('name', this.loginForm.value.name);
      sessionStorage.setItem('password', this.loginForm.value.password);
    } else {
      this.attemptedToLogin = true;
    }
  }
  authUser() {
    delete this.user.firstLastName;
    delete this.user.secondLastName;
    delete this.user.userID;

    this.authService.loginUser(this.user).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.error(err)
    );
  }
}
