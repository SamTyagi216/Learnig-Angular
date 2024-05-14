import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from './default/default.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { DataTablesModule } from 'angular-datatables';
import { AddVacancyComponent } from './component/add-vacancy/add-vacancy.component';
import { AddCandidateComponent } from './component/add-candidate/add-candidate.component';
import { AddUniversityComponent } from './component/add-university/add-university.component';
import { ListCandidateComponent } from './component/list-candidate/list-candidate.component';
import { ListVacancyComponent } from './component/list-vacancy/list-vacancy.component';
import { ListUniversityComponent } from './component/list-university/list-university.component';
import { PrimeFactorComponent } from './prime-factor/prime-factor.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

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
    ListUniversityComponent,
    PrimeFactorComponent,
    TestComponent,
    Test2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
