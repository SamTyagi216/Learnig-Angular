import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.scss']
})
export class AddVacancyComponent {

  jobForm!: FormGroup;
  loginservices: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient,  ) { }

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      jobProfile: ['', Validators.required],
      mininumExperienceRequired: ['', Validators.required],
      maximumExperienceRequired: ['', Validators.required],
      minimumBudgetForPosition: ['', Validators.required],
      maximumBudgetForPosition: ['', Validators.required],
      jobVacancySubject: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobLocation: ['', Validators.required],
      workFrom: ['', Validators.required],
      jobStatus: ['ACTIVE']
    });
  }

  onSubmit(jobForm: any) {
    // console.log(jobForm);
    // this.loginservices.addNewJobVacancyDetails(jobForm).subscribe({
    //   next: (res: any) => {
    //     //if (res["status"] === "success") { }
    //     this.router.navigate(["/admin-panel/list-vacancy"]);
    //   }
    // })
  }

  logout() {
    sessionStorage.clear();
    this.loginservices.setUserLogOut();
    this.router.navigate(['/admin-panel/login'])

  }

} 