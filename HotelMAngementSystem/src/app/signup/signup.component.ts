import { Component } from '@angular/core';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
   
  constructor(private userdata:UserdataService){
    this.userdata.user().subscribe((data=>{
      console.log(data);
      
       })
     )

  }
  
  
  item:any;
  
  
  getVal(data:any){
    data.name= data.fname+""+data.lname;
    delete data.fname;
    delete data.lname;
    this.item= {...data ,name: data.fname+""+data.lname}

    console.log(typeof data);
    this.userdata.postUsers(data).subscribe((data)=>{
      console.log(data);
      
    })

   
   }
}
