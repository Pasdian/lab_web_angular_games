import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../models/Game';
import { GamesService } from '../../servicios/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
})
export class JuegoComponent implements OnInit {
  game: Game;

  constructor(private gamesService: GamesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.gamesService.getGame(params['id']).subscribe(
        res => {
          this.game = res
        },
        err => console.log("Error al obtener Juego", err)
      );
    })
  }
}
