import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularservicios';

  userIsAuthenticated = false;

  ngOnInit() {
    console.log('here');
    let username = sessionStorage.getItem('username');
    let password = sessionStorage.getItem('password');
    if (username != undefined && password != undefined) {
      console.log('should change');
      this.userIsAuthenticated = true;
    }
    this.userIsAuthenticated = false;
  }





}
