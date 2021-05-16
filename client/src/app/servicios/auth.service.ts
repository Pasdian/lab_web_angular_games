import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userIsAuthenticated = false;

  constructor() { }

  loginUser() {
    this.userIsAuthenticated = true;
  }
}


