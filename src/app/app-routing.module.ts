import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "", component: DefaultComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'student-list', component: StudentListComponent },
    { path: 'teacher-list', component: TeacherListComponent },

  ]
},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
