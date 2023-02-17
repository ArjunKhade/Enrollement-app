import { Component,OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  cats:Array<Category>=[];
  cat:Category={
   category:''
  }
  flag:boolean=false;
  id:number=-1;

  constructor(private toast:ToastrService){
   
  }
  ngOnInit(): void {
    this.cats
  }
  submit(form:any){
    if(this.flag){
      this.updateCat(form.form.value.category)
      this.toast.success("Updated!")
      form.reset();
      this.flag=false;

    }else{
      console.log(form)
      this.toast.success("Date Insert successfully!")
      let categoryData:Category={
        category:form.value.category
      }
      console.log(categoryData);
      this.cats.push(categoryData);
      console.log(this.cats)
      form.reset();
    }
   
  }

 update(cat:Category,i:number){
  this.cat={...cat};
  this.flag=true;
  this.id=i;
 }

 updateCat(cat:string){
  this.cats[this.id].category=cat;
   console.log(this.cats)
 }

 delete(cat:Category){
   let index = this.cats.indexOf(cat);
   this.cats.splice(index,1);
   this.toast.error("Data Removed successfully!");
 }

}
