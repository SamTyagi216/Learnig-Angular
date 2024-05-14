import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  url='https://users-4e17a-default-rtdb.firebaseio.com/user.json';
  @ViewChild('userForm')
  userForm!: NgForm;
constructor(private http:HttpClient){

}
  users =[
    {name:'sam', techonology:'Angular'  },
    {name:'pooja', techonology:'Angular'  }

  ]

  onAddUser(userData:User){
    console.log(userData)
    // this.users.push(userData)
    this.http.post<User>(this.url,userData).subscribe((res)=>{
      console.log(res)
    })

  }
}
