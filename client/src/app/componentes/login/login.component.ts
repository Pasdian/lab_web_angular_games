import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
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

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
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

  authUser() {
    if (this.loginForm.valid) {
      delete this.user.firstLastName;
      delete this.user.secondLastName;
      delete this.user.userID;

      this.authService.loginUser(this.user).subscribe(
        (res) => {
          sessionStorage.setItem('userID', res[0].userID);
          sessionStorage.setItem('displayName', res[0].name);
          sessionStorage.setItem('isLoggedFlag', '1');
          this.router.navigateByUrl('/principal');
        },
        (err) => {
          alert('Usuario o contraseña inválidos. Intenta de nuevo.');
          console.error(err)
        }
      );
    } else {
      this.attemptedToLogin = true;
    }
  }
}
