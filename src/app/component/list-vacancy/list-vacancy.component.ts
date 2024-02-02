import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 

import { Router } from '@angular/router';


@Component({
  selector: 'app-list-vacancy',
  templateUrl: './list-vacancy.component.html',
  styleUrls: ['./list-vacancy.component.scss']
})
export class ListVacancyComponent implements OnInit {
  filterList: any;
  jobDetailsList: any;
  activeUser: any;
  obj: any;
  isEditMode: boolean = false;
  editableIds: any;
  //courseform = this.jobDetailsList();
  data: any;

  constructor(private formBuilder: FormBuilder, private router:Router , private http: HttpClient,  ) { }

  ngOnInit(): void {
    this.fetchJobVacancy()
  }

  fetchJobVacancy() {
    const obj = {
      "filterList": [],
      "globalOperator": "AND",
      "pageRequestDTO": {
        "pageNumber": 0,
        "pageSize": 10,
        "sort": "ASC",
        "sortByColumn": "id"
      }
    };
    // this.loginservices.fetchJobVacancy(obj).subscribe({
    //   next: (res: any) => {
    //     if (res && res.status === 'success' && res.result && res.result.content) {
    //       this.jobDetailsList = res.result.content;
    //       console.log('Job Details:', this.jobDetailsList);
    //     } else {
    //       console.error('Invalid or missing data in response');
    //     }
    //   },
    //   error: (err: any) => {
    //     console.error('Error fetching job vacancy details:', err);
    //   }
    // });
  }
  goToEdit(data: any) {
    this.router.navigate(["/admin-panel/add-vacancy"],
      {
        queryParams: {
          companyName: data.companyName, jobProfile: data.jobProfile,
          mininumExperienceRequired: data.mininumExperienceRequired, maximumExperienceRequired: data.maximumExperienceRequired,
          minimumBudgetForPosition: data.minimumBudgetForPosition, maximumBudgetForPosition: data.maximumBudgetForPosition,
          jobVacancySubject: data.jobVacancySubject, jobDescription: data.jobDescription,
          jobLocation: data.jobLocation, workFrom: data.workFrom,
          jobStatus: data.jobStatus, id: data.id
        }
      })
  }
}