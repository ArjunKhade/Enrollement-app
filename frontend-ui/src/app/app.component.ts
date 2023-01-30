import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { User } from './model/User';
import{EnrollmentService} from './enrollment.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud-app';
  topics:string[]= ["Angular", "React", "Vue"]
  users: User[]=[];
  user:User = {
    id:'',
    name:'',
    email :'',
    phone:'',
    topic:'',
    timePreference:'',
    subscription:''
  }

  
// submmited:boolean=false;
  constructor(private _enrollmentService:EnrollmentService){

  }
  ngOnInit(): void {
    this.getAllUsers();
  }

submitForm(){

   if(this.user.id===''){
    this._enrollmentService.addUser(this.user).subscribe(res => {
      console.log(res);
      this.getAllUsers();
      this.user = {
        id:'',
        name:'',
        email :'',
        phone:'',
        topic:'',
        timePreference:'',
        subscription:''
      }
    })
   }else{
    this.updateUser(this.user);
    this.user = {
      id:'',
      name:'',
      email :'',
      phone:'',
      topic:'',
      timePreference:'',
      subscription:''
    }
   }
}

updateUser(user:User){
  this._enrollmentService.updateUser(user).subscribe(res => {
    console.log(res);
    this.getAllUsers();
  })
}
getAllUsers(){
  this._enrollmentService.getAllUsers().subscribe(response => {
    console.log(response);
    this.users=response;
  })
}


deleteUser(user:User){
 this._enrollmentService.deleteUser(user.id).subscribe(res => {
  console.log(res);
  this.getAllUsers();
 })
}

populateForm(usr:User){
  this.user=usr;
}

resetForm(){
  this.user = {
    id:'',
    name:'',
    email :'',
    phone:'',
    topic:'',
    timePreference:'',
    subscription:''
  }
}

 
}
