import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { ListUniversityComponent } from './component/list-university/list-university.component';
import { ListCandidateComponent } from './component/list-candidate/list-candidate.component';
import { AddCandidateComponent } from './component/add-candidate/add-candidate.component';
import { AddUniversityComponent } from './component/add-university/add-university.component';
import { AddVacancyComponent } from './component/add-vacancy/add-vacancy.component';
import { Test2Component } from './test2/test2.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'test2', component: Test2Component },
  { path: 'test', component: TestComponent },

  {
    path: "", component: DefaultComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'student-list', component: StudentListComponent },

      { path: 'teacher-list', component: TeacherListComponent },
      { path: 'ListUniversity', component: ListUniversityComponent },
      { path: 'ListCandidate', component: ListCandidateComponent },
      { path: 'AddCandidate', component: AddCandidateComponent },
      { path: 'AddUniversity', component: AddUniversityComponent },
      { path: 'AddVacancy', component: AddVacancyComponent },

      { path: '**', redirectTo: '/login' }

    ]
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
