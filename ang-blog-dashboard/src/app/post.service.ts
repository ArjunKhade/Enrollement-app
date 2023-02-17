import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Array<Post>=[]
  constructor() { }

  getPosts(){
    return this.posts;
  }

  savePosts(posts:Array<Post>){
    this.posts=posts;
  }

}
