import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Console } from '../../../models/Console';
import { ConsolasService } from 'src/app/servicios/consolas.service';
import { GamesService } from 'src/app/servicios/games.service';


@Component({
  selector: 'app-form-consola',
  templateUrl: './form-consola.component.html',
  styleUrls: ['./form-consola.component.css']
})
export class FormConsolaComponent implements OnInit {
  consola: Console = {
    consoleID: 1,
    consoleName: "",
    description: "",
    features: "",
    image: "",
  };
  formulario: FormGroup;
  attemptedToPost = false;

  constructor(private consolesService: ConsolasService) {
    this.formulario = new FormGroup({
      'nombre' : new FormControl('', Validators.required),
      'descripcion' : new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'caracteristicas' : new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'urlImagen' : new FormControl('', Validators.required)
    });
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      delete this.consola.consoleID;
      this.consolesService.createConsole(this.consola)
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
