import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {
  candidateForm: any;

  constructor(private http: HttpClient,   private fb: FormBuilder) {

    this.candidateForm = this.fb.group({
      candidateName: ['', Validators.required],
      gender: ['', Validators.required],
      profilePictureURL: [''],
      currentDesignation: ['', Validators.required],
      currentEmployer: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      currentExperienceInYears: ['', Validators.required],
      currentExperienceInMonths: ['', Validators.required],
      currentCTCInLacks: ['', Validators.required],
      expectedCTCInLacks: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      noticePeriodInDays: ['', Validators.required],
      skills: ['', Validators.required],
      highestEducation: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(jobForm: any) {
    // console.log(jobForm);
    //this.login.addNewCandidate(jobForm).subscribe({
      next: (res: any) => {
        //if (res["status"] === "success") { } 
      }
   // })
  }


}   