import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from './default/default.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { DataTablesModule } from 'angular-datatables';
import { AddVacancyComponent } from './common/add-vacancy/add-vacancy.component';
import { AddCandidateComponent } from './common/add-candidate/add-candidate.component';
import { AddUniversityComponent } from './common/add-university/add-university.component';
import { ListCandidateComponent } from './common/list-candidate/list-candidate.component';
import { ListVacancyComponent } from './common/list-vacancy/list-vacancy.component';
import { ListUniversityComponent } from './common/list-university/list-university.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DefaultComponent,
    SideMenuComponent,
    HeaderComponent,
    StudentListComponent,
    TeacherListComponent,
    AddVacancyComponent,
    AddCandidateComponent,
    AddUniversityComponent,
    ListCandidateComponent,
    ListVacancyComponent,
    ListUniversityComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
