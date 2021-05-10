import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Console } from '../models/Console';
import { Observable } from 'rxjs';

@Injectable()
export class ConsolasService {
  API_URI = 'http://localhost:3000/api/game-site';

  constructor(private http: HttpClient) {
    console.log('ConsolasService Creado...');
  }

  getConsoles():Observable<any>{
    return this.http.get(`${this.API_URI}/consolas`)
  }

  getConsole(id: string): Observable<Console> {
    return this.http.get(`${this.API_URI}/consolas/${id}`)
  }

  getConsoleGames(id: string) {
    return this.http.get(`${this.API_URI}/consolas/${id}/juegos`)
  }

  createConsole(conosle: Console){
    return this.http.post(`${this.API_URI}/consolas`, console)
  }

  findConsole(palabras: string){
    return this.http.get(`${this.API_URI}/resconsolas`)
  }
}
