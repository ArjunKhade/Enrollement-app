import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts:Array<Post>=[]
  constructor(private postService:PostService,private router:Router){
  
  }
  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.posts=this.postService.getPosts()
  }


}
