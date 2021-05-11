import { Component, HostBinding, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/servicios/blog.service';



import { Blog } from "../../models/Blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  post: Blog = {
    entryID: 0,
    entryDate: new Date(),
    username: '',
    entryText: ','
  }

  formulario: FormGroup;
  attemptedToPublish = false;
  fechaPublicacion = new Date();
  posts = [];

  constructor(private blogService: BlogService) {
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

  saveNewPost(){
    delete this.post.entryID
    delete this.post.entryDate

    this.blogService.createBlogPost(this.post).subscribe(
      res => {
        console.log(res)

      },
      err => console.error(err)
    )
    }

}
