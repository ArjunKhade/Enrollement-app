import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  loggedIn:BehaviorSubject<boolean>= new BehaviorSubject(false);
  isLoggedInGuard:boolean=false;


  constructor(private auth:AngularFireAuth,private toaster:ToastrService,private router:Router) {

   }

   login(email:string, pass:string){
    this.auth.signInWithEmailAndPassword(email,pass).then(res =>{
      this.toaster.success("Login Successfully!!!")
      this.router.navigate(["/"])
      this.loggedIn.next(true)
      this.loadUser();
      this.isLoggedInGuard=true
    }).catch(e =>{
      this.toaster.warning("Login Fail!! Please Enter Valid Credentials!!")
    })
   }

   loadUser(){
    this.auth.authState.subscribe(user =>{
     localStorage.setItem("user",JSON.stringify(user))
    })
   }

   logout(){
    this.auth.signOut().then(()=>{
      this.toaster.success("User Logout  Successfully!!!")
      this.router.navigate(["/login"])
      this.loggedIn.next(false)
      this.isLoggedInGuard=false
      localStorage.removeItem('user')
    }).catch((e)=>{
      this.toaster.warning("logout Fail!! ")
    })
   }

   isLoggedIn(){
    return this.loggedIn.asObservable();
   }


}
