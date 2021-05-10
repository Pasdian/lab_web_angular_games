import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../../servicios/games.service';
@Component({
  selector: 'app-resjuegos',
  templateUrl: './resjuegos.component.html',
  styleUrls: ['./resjuegos.component.css'],
})
export class ResjuegosComponent implements OnInit {
  juegos: any;
  palabrasBusqueda: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['palabrasBusqueda']);
      this.palabrasBusqueda = params['palabrasBusqueda'];
      this.juegos = this.gamesService.findGame(
        this.palabrasBusqueda
      );
      console.log(this.juegos);
    });
  }
}
