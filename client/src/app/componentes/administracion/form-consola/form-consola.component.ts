import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-consola',
  templateUrl: './form-consola.component.html',
  styleUrls: ['./form-consola.component.css']
})
export class FormConsolaComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      'idConsola' : new FormControl(),
      'nombre' : new FormControl(),
      'descripcion' : new FormControl(),
      'caracteristicas' : new FormControl(),
      'urlImagen' : new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

}
