import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GamesService } from "../../servicios/games.service";
import { Game } from "../../models/Game";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  game:Game;

  constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.gamesService.getGame(params['id']).subscribe(
        res => {
          this.game = res
        },
        err => console.error(err)
      )
    })
   }

  ngOnInit() {
  }

}
