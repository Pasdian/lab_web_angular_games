import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userIsAuthenticated = false;
  API_URI = 'http://localhost:3000/api/game-site';

  constructor(private http: HttpClient) {
    console.log('Auth Service Created...');
  }

  getUsers() {
    return this.http.get(`${this.API_URI}/users`);
  }

  loginUser(userCredentials: User) {
    var response = this.http.post(`${this.API_URI}/users`, userCredentials);
    if (response != null) {
      this.userIsAuthenticated = true;
      return response;
    }
  }
}
