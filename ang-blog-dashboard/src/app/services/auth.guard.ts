import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor (private authServ:AuthService,private router:Router,private toast:ToastrService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authServ.isLoggedInGuard){
      console.log("Access Granted!!")
      return true;
    
      
    }else{
      console.log("Access Denied!!")
      this.toast.warning("YOu Dont have permission to access this page!")
      this.router.navigate(["/login"])
      
      return false;
    }
  }
  
}
