import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$:any
  Useremail:string=''
  ngOnInit(): void {
   //console.log(JSON.parse(localStorage.getItem('user')||'{}').email);
   this.Useremail=JSON.parse(localStorage.getItem('user')||'{}').email;
   this.isLoggedIn$= this.authServ.isLoggedIn();
   this.Useremail
  }

  constructor(private authServ:AuthService){

  }

  logout(){
    this.authServ.logout();
  }
}
