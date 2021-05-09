import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-juego',
  templateUrl: './form-juego.component.html',
  styleUrls: ['./form-juego.component.css']
})
export class FormJuegoComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      'idJuego' : new FormControl(),
      'nombreJuego' : new FormControl(),
      'desarrollador' : new FormControl(),
      'fechaLanzamiento' : new FormControl(),
      'urlImagen' : new FormControl(),
      'idConsola' : new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

}
