import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-list-university',
  templateUrl: './list-university.component.html',
  styleUrls: ['./list-university.component.scss']
})
export class ListUniversityComponent {

  filterList: any;
  universityDetailsList: any;
  activeUser: any;
  obj: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,  ) { }

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
    // this.loginservices.fetchUniversityDetails(obj).subscribe({
    //   next: (res: any) => {
    //     if (res && res.status === 'success' && res.result && res.result.content) {
    //       this.universityDetailsList = res.result.content;
    //       console.log('Job Details:', this.universityDetailsList);
    //     } else {
    //       console.error('Invalid or missing data in response');
    //     }
    //   },
    //   error: (err: any) => {
    //     console.error('Error fetching job vacancy details:', err);
    //   }
    // });
  }

}