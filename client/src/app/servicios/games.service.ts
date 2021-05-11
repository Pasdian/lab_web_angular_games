import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable()
export class GamesService {
  API_URI = 'http://localhost:3000/api/game-site';

  constructor(private http: HttpClient) {
    console.log('GamesService Creado...');
  }

  getGames(): Observable<any> {
    return this.http.get(`${this.API_URI}/juegos`)
  }

  getGame(id: string): Observable<Game> {
    return this.http.get(`${this.API_URI}/juegos/${id}`)
  }

  createGame(game: Game){
    return this.http.post(`${this.API_URI}/juegos`, game)
  }

  findGame(palabras: string): Observable<Game> {
    return this.http.get(`${this.API_URI}/resjuegos/${palabras}`)
  }
}
