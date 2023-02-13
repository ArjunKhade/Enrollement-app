import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgForm} from '@angular/forms'
import { User } from './model/User';
import{EnrollmentService} from './enrollment.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserClass } from './model/UserClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'crud-app';
  topics:string[]= ["Angular", "React", "Vue"]
  users: User[]=[];
  tempUser:UserClass= new UserClass();
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
  constructor(private _enrollmentService:EnrollmentService, private router:Router){

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  alertForSave(){
    Swal.fire('Saved!','Data Saved succesfully!', 'success' );
  }


  receiveUser(user:User){
   console.log(user)
   //this.user = user;
   this.user={...user}
  }

  navigateToDefault(){
    this.router.navigateByUrl("http://localhost:4200/");
  }
  getAllUsers(){
    this._enrollmentService.getAllUsers().subscribe(response => {
      console.log(response);
      this.users=response;
    })
  }

 submitForm(){

   if(this.user.id==='' || this.user.id==='00000000-0000-0000-0000-000000000000'){
    this._enrollmentService.addUser(this.user).subscribe(res => {
      console.log(res);
      this.alertForSave();
      
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
    
    Swal.fire('Updated!','Updated succesfully!', 'success');
    this.navigateToDefault();
    this.getAllUsers();
  })
}




resetForm(userForm:NgForm){
  //userForm.resetForm();
  userForm.reset();
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
 
         
}


 
}
