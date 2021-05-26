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

  // login() {
  //   console.log('entered login');
  //   if (this.loginForm.valid) {
  //     console.log('form is valid');
  //     console.log(this.loginForm.value);
  //     console.log(this.loginForm.value.name);
  //     console.log(this.loginForm.value.password);
  //   } else {
  //     console.log('form is NOT valid');
  //     this.attemptedToLogin = true;
  //   }
  // }

  authUser() {
    console.log('enter auth user');
    if (this.loginForm.valid) {


      delete this.user.firstLastName;
      delete this.user.secondLastName;
      delete this.user.userID;

      // console.log('******USER:', this.user);

      this.authService.loginUser(this.user).subscribe(
        (res) => {
          console.log('****TODO',res[0]);
          console.log('****TODO',res[0].userID);
          // add user ID
          sessionStorage.setItem('userID', res[0].userID);
          // add user name
          sessionStorage.setItem('displayName', res[0].name);
          // change auth flag
          sessionStorage.setItem('isLoggedFlag', '1');
          // redirect
          this.router.navigateByUrl('/principal');
        },
        (err) => {
          alert('Usuario o contraseña inválidos. Intenta de nuevo.');
          console.error(err)
        }
      );
    } else {
      console.log('form is NOT valid');
      this.attemptedToLogin = true;
    }
  }
}
