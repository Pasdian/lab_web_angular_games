import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit, DoCheck {

  isLoggedIn = false;
  displayName = '';
  displayID = '';

  constructor(private router: Router) { }

  ngOnInit() { }

  ngDoCheck() {
    let isLoggedFlag = sessionStorage.getItem('isLoggedFlag');
    // console.log('FLAG:', isLoggedFlag, typeof(isLoggedFlag));
    if (isLoggedFlag) {
      // console.log('success! data found!');
      this.isLoggedIn = true;
      this.displayName = sessionStorage.getItem('displayName');
      this.displayID = sessionStorage.getItem('userID');
    }
    if (!isLoggedFlag) {
      // console.log('no data in sess storage');
    }
  }

  buscarConsolas(palabras: string) {
    console.log("NavBar", palabras);
    this.router.navigate(['/resconsolas', palabras]);
  }

  buscarJuegos(palabras: string){
    console.log("NavBar", palabras);
    this.router.navigate(['/resjuegos', palabras]);
  }
}
