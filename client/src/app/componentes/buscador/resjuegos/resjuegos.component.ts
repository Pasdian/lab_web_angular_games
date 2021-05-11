import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../../servicios/games.service';
import {Game} from '../../../models/Game'
@Component({
  selector: 'app-resjuegos',
  templateUrl: './resjuegos.component.html',
  styleUrls: ['./resjuegos.component.css'],
})
export class ResjuegosComponent implements OnInit {
  games: any;
  palabrasBusqueda: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) =>{
      console.log("OnInit", params['palabrasBusqueda']);
      this.palabrasBusqueda = params['palabrasBusqueda'];
      this.gamesService.findGame(this.palabrasBusqueda).subscribe(
        res => {
          this.games = res
        },
        err => console.log(err)
      );
    })
  }
}
