import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { User } from './model/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

 private URL="https://localhost:7164/api/users";
  constructor(private _http:HttpClient) { }

  enroll(user:User){
    return this._http.post<any>(this.URL,user);
  }

  getAllUsers():Observable<User[]>{
    return this._http.get<User[]>(this.URL);
  }

  addUser(user:User):Observable<User>{
    user.id ="00000000-0000-0000-0000-000000000000";
    return this._http.post<User>(this.URL,user);
  }

  updateUser(user:User):Observable<User>{
    return this._http.put<User>(this.URL+"/"+user.id, user);
  }

  deleteUser(id:string):Observable<User>{
    return this._http.delete<User>(this.URL+"/"+id);
  }


}
