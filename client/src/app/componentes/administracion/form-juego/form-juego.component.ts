import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Game } from 'src/app/models/Game';
import { GamesService } from '../../../servicios/games.service';

@Component({
  selector: 'app-form-juego',
  templateUrl: './form-juego.component.html',
  styleUrls: ['./form-juego.component.css']
})
export class FormJuegoComponent implements OnInit {
  
  formulario: FormGroup;
  attemptedToPost = false;
  game: Game = {
    gameID: 0,
    gameName: "",
    developer: "",
    releaseDate: "",
    image: "",
    consoleID: 0
  };

  constructor(private gamesService: GamesService) {
    this.formulario = new FormGroup({
      'nombreJuego': new FormControl('', Validators.required),
      'desarrollador': new FormControl('', Validators.required),
      'fechaLanzamiento': new FormControl('', Validators.required),
      'urlImagen': new FormControl('', Validators.required),
      'idConsola': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      delete this.game.gameID;
      this.gamesService.createGame(this.game)
        .subscribe(
          res => {
            console.log(res);
          },
          err => console.error(err)
        );
    } else {
      this.attemptedToPost = true;
      console.log(this.formulario.valid);
    }
  }

}
