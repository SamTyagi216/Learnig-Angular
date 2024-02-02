import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { ListUniversityComponent } from './common/list-university/list-university.component';
import { ListCandidateComponent } from './common/list-candidate/list-candidate.component';
import { AddCandidateComponent } from './common/add-candidate/add-candidate.component';
import { AddUniversityComponent } from './common/add-university/add-university.component';
import { AddVacancyComponent } from './common/add-vacancy/add-vacancy.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: "", component: DefaultComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'student-list', component: StudentListComponent },
      { path: 'teacher-list', component: TeacherListComponent },
      { path: 'ListUniversity', component: ListUniversityComponent },
      { path: 'ListCandidate', component: ListCandidateComponent },
      { path: 'ListCandidat', component: ListCandidateComponent },
      { path: 'AddCandidate', component: AddCandidateComponent },
      { path: 'AddUniversity', component: AddUniversityComponent },
      { path: 'AddVacancy', component: AddVacancyComponent },

    ]
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
