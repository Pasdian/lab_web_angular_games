import { Component, OnInit } from '@angular/core';
import { ConsolasService, Juego } from '../../servicios/consolas.service';

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {

  juegos: Juego[] = [];

  constructor(private consolasService: ConsolasService) { }

  ngOnInit() {
    this.juegos = this.consolasService.obtieneJuegos();
    console.log(this.juegos);
  }

}
