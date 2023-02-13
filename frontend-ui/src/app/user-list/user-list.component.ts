import { Component ,OnInit,Input, Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../model/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users:Array<User>=[]

  @Output() updateUserEvent:EventEmitter<User> =new EventEmitter();


  constructor(private _enrollmentService:EnrollmentService, private router:Router){

  }

  ngOnInit(): void {
    this.getAllUsers();
  }


  //users: User[]=[];

  user:User = {
    id:'',
    name:'',
    email :'',
    phone:'',
    topic:'',
    timePreference:'',
    subscription:''
  }

  populateForm(usr:User){
    this.updateUserEvent.emit(usr);
    this.user=usr;
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

   navigateToDefault(){
    this.router.navigateByUrl("http://localhost:4200/");
  }

   updateUser(user:User){
    this._enrollmentService.updateUser(user).subscribe(res => {
      console.log(res);
      
      Swal.fire('Updated!','Updated succesfully!', 'success');
      this.navigateToDefault();
      this.getAllUsers();
    })
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
