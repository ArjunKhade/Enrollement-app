import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  permlink:string=''
  imgSrc:any='./assets/demo.jpg'
  selectedImage:any
  cats:Array<string>=["Sports","Politics","Heath"]
  catId:number=0;
  id:any=''
  postForm:FormGroup;

   post:Post= {
    title:'',
    permalink:'',
    expect:'',
    category:{
      catId:0,
      category:''
    },
    postImage:'',
    content:'',
    isFeatured:false,
    views:0,
    status:'',
    createdAt:new Date()
  }


  posts:Array<Post>=[]

  constructor(private ar: ActivatedRoute,private fb:FormBuilder,private toast:ToastrService,private postService:PostService,private router:Router){
     this.ar.queryParams.subscribe(val =>{
      console.log(val?.['id'])
      this.id=val?.['id'];
     })
  
    this.postForm=this.fb.group({
    title:['',[Validators.required,Validators.minLength(10)]],
    permlink:['',Validators.required],
    expect:['',[Validators.required,Validators.minLength(50)]],
    category:['',Validators.required],
    postImage:['',Validators.required],
    content:['',Validators.required]
   })

  }
  ngOnInit(): void {
    
  }

  
  get fc(){
  return this.postForm.controls;
  }
  get category (){
  return this.postForm.get('category')
  }
  get postImage (){
  return this.postForm.get('postImage')
  }
  get content (){
  return this.postForm.get('content')
  }

  get title (){
  return this.postForm.get('title')
  }
  get permlk (){
    return this.postForm.get('permlink')
    }
  get expect (){
  return this.postForm.get('expect')
  }
    

  onSubmit(){
    //console.log(this.postForm.value)
 
    const postData:Post= {
      title:this.postForm.value.title,
      permalink:this.postForm.value.permalink,
      expect:this.postForm.value.expect,
      category:{
        catId:this.catId+1,
        category:this.postForm.value.category
      },
      postImage:'',
      content:this.postForm.value.content,
      isFeatured:false,
      views:0,
      status:'new',
      createdAt:new Date()
    }

    this.uploadImage(this.selectedImage)

    this.posts.push(postData)
    this.toast.success("Data Insert Successfully!")
    this.postService.savePosts(this.posts)

    this.router.navigate(['/posts']);
    
    console.log(postData)
    this.postForm.reset()
  }
 
    

  

  onTitleChange(event:any){
    let title = (event.target.value)

    this.permlink = title.replace(/\s/g,'-');
    console.log(this.permlink)

  }

  showPrev($event:any){
    const reader = new FileReader();
    reader.onload=(e) =>{
      this.imgSrc=e.target?.result
    }
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImage=$event.target.files[0];
  }


  uploadImage(selectedImage:any){
  const filePath= `postImg/${Date.now()}`
  console.log(filePath)
  }



}
