import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

 loginAdmin(data:any){
   console.log(data);
   console.log(data.username);
   console.log(data.password);
   
  
    if(data.username === "Tanaya"){
      if(data.pass === "Tanaya@123"){
        location.href = 'http://localhost:4200/api'
      }else{
        alert("Wrong PassWord !!")
      }
    }else {
      location.href = 'http://localhost:4200/pagenotFound'
    } 
  }
}
