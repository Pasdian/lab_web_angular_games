import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../../servicios/consolas.service';
import { ActivatedRoute } from "@angular/router";
import { Game } from "../../models/Game";

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {

  games: any = [];

  constructor(private consolasService: ConsolasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.consolasService.getConsoleGames(params['id']).subscribe(
        res => {
          this.games = res
        },
        err => console.log(err)
      );
    })
  }

}
