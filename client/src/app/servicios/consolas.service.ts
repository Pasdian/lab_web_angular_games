import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsolasService {
  private consolas: Consola[] = [
    {
      id: '0',
      nombre: 'PC Master Race',
      descripcion: 'Juegos para PC',
      caracteristicas:
        'Texto y listado de las características de la consolaPC Master Race...',
      imagen: 'assets/pcmr.jpg',
    },
    {
      id: '1',
      nombre: 'Playstation 4',
      descripcion: 'Juegos para PS4',
      caracteristicas:
        'Texto y listado de las características de la consolaPlaystation 4...',
      imagen: 'assets/ps4.jpg',
    },
    {
      id: '2',
      nombre: 'Xbox One',
      descripcion: 'Juegos para Xbox One',
      caracteristicas:
        'Texto y listado de las características de la consolaXbox One...',
      imagen: 'assets/xboxone.jpg',
    },
    {
      id: '3',
      nombre: 'Nintendo Switch',
      descripcion: 'Juegos para Nintendo Switch',
      caracteristicas:
        'Texto y listado de las características de la consolaNintendo Switch...',
      imagen: 'assets/nswitch.jpg',
    },
  ];

  private juegos: Juego[] = [

    {
      id: '0',
      nombre: 'Skyrim',
      developer: 'Bethesda',
      lanzamiento: '2011',
      imagen: 'assets/skyrim.jpg'
    },
    {
      id: '1',
      nombre: 'The Last of Us 2 (PC Edition)',
      developer: 'Naughty Dog',
      lanzamiento: '2019',
      imagen: 'assets/tlou.jpg'
    },
    {
      id: '2',
      nombre: 'Portal',
      developer: 'Valve',
      lanzamiento: '2004',
      imagen: 'assets/portal.jpg'
    },
  ];

  constructor() {
    console.log('ConsolasService Creado...');
  }

  obtieneConsolas(): Consola[] {
    return this.consolas;
  }

  obtieneConsola(id: string): Consola {
    return this.consolas[id];
  }

  obtieneJuegos(): Juego[]{
    return this.juegos
  }

  obtieneJuego(id:string):Juego{
    return this.juegos[id];
  }

  buscarConsolas(palabras: string): Consola[] {
    let resultadoConsolas: Consola[] = [];
    palabras = palabras.toLowerCase();
    for (let consola of this.consolas) {
      let nombreConsola = consola.nombre.toLowerCase();
      if (nombreConsola.indexOf(palabras) >= 0) {
        resultadoConsolas.push(consola);
      }
    }
    return resultadoConsolas;
  }

  buscarJuegos(palabras: string): Juego[] {
    let resultadoJuegos: Juego[] = [];
    palabras = palabras.toLowerCase();
    for (let juego of this.juegos) {
      let nombreJuego = juego.nombre.toLowerCase();
      if (nombreJuego.indexOf(palabras) >= 0) {
        resultadoJuegos.push(juego);
      }
    }
    return resultadoJuegos;
  }
}

export interface Consola {
  id: string;
  nombre: string;
  descripcion: string;
  caracteristicas: string;
  imagen: string;
}

export interface Juego {
  id: string; 
  nombre: string;
  developer: string;
  lanzamiento: string;
  imagen: string;
}
