import { Component } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {
  loginAdmin(data:any){
    console.log(data);
    console.log(data.username);
    console.log(data.password);
    if(data.name==="Tanaya"){
     if(data.password==="tanaya@123"){
     location.href="http://localhost:4200/pagenotFound"
    }
    else{
     alert('Password Does Not Match')
    }
   }
    else{
     location.href="http://localhost:4200/api"
   }
 }
}
