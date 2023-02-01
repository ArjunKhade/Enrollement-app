import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { User } from './model/User';
import{EnrollmentService} from './enrollment.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  constructor(private _enrollmentService:EnrollmentService, private router:Router){

  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  alertForSave(){
    Swal.fire('Saved!','Data Saved succesfully!', 'success' );
  }

  navigateToDefault(){
    this.router.navigateByUrl("");
  }

submitForm(){

   if(this.user.id===''){
    this._enrollmentService.addUser(this.user).subscribe(res => {
      console.log(res);
      this.alertForSave();
      this.navigateToDefault();
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

confirmBox(user:User){
  Swal.fire({
    title: 'Are you sure want to remove?',
    text: 'You will not be able to recover this file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      this.deleteUser(user);
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your file is safe :)',
        'error'
      )
    }
  })
}
 
}
