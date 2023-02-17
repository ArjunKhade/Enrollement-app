import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authSer:AuthService){

  }
  onSubmit(form:any){
    console.log(form)
    this.authSer.login(form.email,form.password);
  }
}
