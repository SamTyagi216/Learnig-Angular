import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.scss']
})
export class AddUniversityComponent implements OnInit {
  universityForm!: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
    // this.universityForm = this.formBuilder.group({
    //   universityName: ['', Validators.required],
    //   district: ['', Validators.required],
    //   state: ['', Validators.required],
    //   country: ['', Validators.required],
    //   pincode: ['', Validators.required],
    //   universityContactPersonName: ['', Validators.required],
    //   contactNumber: ['', Validators.required],
    //   emailId: ['', [Validators.required, Validators.email]],
    //   logoURL: ['', Validators.required]
    // });
  }

   onSubmit(universityForm: any) {
  //   console.log(universityForm);
  //   this.login.addNewUniversity(universityForm).subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       //if (res["status"] === "success") { } 
     }
  //   })
}
 