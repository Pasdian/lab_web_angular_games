import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-juego',
  templateUrl: './form-juego.component.html',
  styleUrls: ['./form-juego.component.css']
})
export class FormJuegoComponent implements OnInit {

  formulario: FormGroup;
  attemptedToPost = false;

  constructor() {
    this.formulario = new FormGroup({
      'idJuego' : new FormControl('', Validators.required),
      'nombreJuego' : new FormControl('', Validators.required),
      'desarrollador' : new FormControl('', Validators.required),
      'fechaLanzamiento' : new FormControl('', Validators.required),
      'urlImagen' : new FormControl('', Validators.required),
      'idConsola' : new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      this.attemptedToPost = true;
      console.log(this.formulario.valid);
    }
  }

}
