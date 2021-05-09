import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formulario: FormGroup;
  attemptedToPublish = false;
  fechaPublicacion = new Date();
  posts = [];

  constructor() {
    this.formulario = new FormGroup({
      'nombreUsuario' : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      'entrada' : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    })
  }

  ngOnInit(): void {
  }

  guardar() {
    if (this.formulario.valid) {
      console.log(this.formulario.valid);
      console.log(this.formulario.value);
      console.log(typeof(this.formulario.value));
      this.fechaPublicacion = new Date()
      this.posts.push(this.formulario.value)
    } else {
      this.attemptedToPublish = true;
      console.log(this.formulario.valid);
    }
  }

}
