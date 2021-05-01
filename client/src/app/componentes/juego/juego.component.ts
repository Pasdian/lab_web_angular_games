import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ConsolasService, Juego } from "../../servicios/consolas.service";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juego:Juego;

  constructor(private activatedRoute: ActivatedRoute, private consolasService: ConsolasService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.juego = this.consolasService.obtieneJuego(params['id']);
    })
   }

  ngOnInit() {
  }

}
