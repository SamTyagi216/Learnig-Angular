import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.scss']
})
export class ListCandidateComponent {
  filterList: any;
  candidateDetailsResponse: any;
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
  //  // this.loginservices.fetchCandidateDetails(obj).subscribe({
  //     next: (res: any) => {
  //       console.log('res:', res.result.content);

  //       this.candidateDetailsResponse = res.result.content;
  //       console.log('res:', this.candidateDetailsResponse);

  //     },
  //     error: (err: any) => {
  //       console.error('Error fetching job vacancy details:', err);
  //     }
  //   });
  }

}