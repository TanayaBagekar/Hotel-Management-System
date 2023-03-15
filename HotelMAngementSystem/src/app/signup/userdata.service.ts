import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url='http://localhost:3000/posts'

  constructor( public http:HttpClient) { }
  user(){
    return this.http.get(this.url)
  }

  postUsers(data:any){
    return this.http.post(this.url,data)
  }
}
