import { Component, HostBinding, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/servicios/blog.service';

import { Blog } from '../../models/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  posts: any;

  post: Blog = {
    entryID: 0,
    entryDate: new Date(),
    username: '',
    entryText: '',
  };

  formulario: FormGroup;
  attemptedToPublish = false;
  fechaPublicacion = new Date();

  constructor(private blogService: BlogService) {
    this.formulario = new FormGroup({
      nombreUsuario: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      entrada: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30),
      ]),
    });
  }

  ngOnInit() {
    this.blogService.getBlogPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  guardar() {
    if (this.formulario.valid) {
      // console.log(this.formulario.valid);
      // console.log(this.formulario.value);
      // console.log(typeof this.formulario.value);
      this.fechaPublicacion = new Date();
      this.posts.push(this.formulario.value);
      delete this.post.entryID;
      delete this.post.entryDate;

      console.log('post to save:', this.post);

      this.blogService.createBlogPost(this.post).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.error('Error guardando blog post:', err)
      );
    } else {
      this.attemptedToPublish = true;
      console.log(this.formulario.valid);
    }
  }

  // saveNewPost() {
  //   console.log('should not enter here');
  //   delete this.post.entryID;
  //   delete this.post.entryDate;

  //   this.blogService.createBlogPost(this.post).subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => console.error(err)
  //   );
  // }
}
