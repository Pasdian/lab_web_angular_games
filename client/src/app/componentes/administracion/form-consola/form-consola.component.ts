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
      'idConsola' : new FormControl('', Validators.required),
      'nombre' : new FormControl('', Validators.required),
      'descripcion' : new FormControl('', Validators.required),
      'caracteristicas' : new FormControl('', Validators.required),
      'urlImagen' : new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

}