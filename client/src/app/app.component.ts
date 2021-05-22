import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { AuthService } from './servicios/auth.service';

@Component({
  // selector: 'app-root',
  selector: 'app-login',
  templateUrl: './componentes/login/login.component.html',
  styleUrls: ['./componentes/login/login.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularservicios';

  userIsAuthenticated = false;
  name = sessionStorage.getItem('name');
  password = sessionStorage.getItem('password');

  constructor(private authService: AuthService){

  }

  user: User = {
    userID: 0,
    name: this.name,
    firstLastName: '',
    secondLastName: '',
    password: this.password,
  };

  ngOnInit() {
    this.auth();
    console.log('Username', this.name);
    console.log('Password', this.password);

  }

  auth() {
    delete this.user.firstLastName;
    delete this.user.secondLastName;
    delete this.user.userID;
    this.authService.loginUser(this.user).subscribe(
      (res) => {
        if (this.name !== res[0].name && this.password !== res[0].password) {
          console.log("User Authenticated")
          this.userIsAuthenticated = true;
        }
        else{
          this.userIsAuthenticated = false
        }
      },
      (err) => console.error(err)
    );
  }
}
