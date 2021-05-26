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
    if (isLoggedFlag) {
      this.isLoggedIn = true;
      this.displayName = sessionStorage.getItem('displayName');
      this.displayID = sessionStorage.getItem('userID');
    }
    // if (!isLoggedFlag) {
    //   console.log('no data in sess storage');
    // }
  }

  buscarConsolas(palabras: string) {
    this.router.navigate(['/resconsolas', palabras]);
  }

  buscarJuegos(palabras: string){
    this.router.navigate(['/resjuegos', palabras]);
  }
}
