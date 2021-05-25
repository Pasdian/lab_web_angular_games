import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit, DoCheck {

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  ngDoCheck() {
    console.log('enter doCheck');
    let isLoggedFlag = sessionStorage.getItem('isLoggedFlag');
    console.log('FLAG:', isLoggedFlag, typeof(isLoggedFlag));
    if (isLoggedFlag) {
      console.log('success! data found!');
      this.isLoggedIn = true;
    }
    if (!isLoggedFlag) {
      console.log('no data in sess storage');
    }
    console.log('exit doCheck');
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
