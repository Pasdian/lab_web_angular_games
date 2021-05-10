import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Blog } from '../models/Blog';

@Injectable()
export class BlogService {
  API_URI = 'http://localhost:3000/api/game-site';

  constructor(private http: HttpClient) {
    console.log('BlogService Creado...');
  }

  getBlogPosts(){
    return this.http.get(`${this.API_URI}/blog`)
  }

  createBlogPost(blogPost: Blog){
    return this.http.post(`${this.API_URI}/blog`, blogPost)
  }
}
