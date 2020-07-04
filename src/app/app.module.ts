import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { FacultyAdminComponent } from './faculty-admin/faculty-admin.component';
import { StudentAdminComponent } from './student-admin/student-admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentsComponent } from './students/students.component';
import { NoticesComponent } from './notices/notices.component';
import { ViewCoursesComponent } from './courses/view-courses/view-courses.component';
import { AppRoutingModule } from './app-routing.module';
import { NoticeService } from './Services/notice.service';
import { ComplaintService } from './Services/complaint.service';
import { AssignmentService } from './Services/assignment.service';
import { QueryService } from './Services/query.service';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CoursesComponent,
    FacultyAdminComponent,
    StudentAdminComponent,
    FacultyComponent,
    StudentsComponent,
    NoticesComponent,
    CourseItemComponent,
    ViewCoursesComponent,
    HeaderComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [
    NoticeService,
    ComplaintService,
    AssignmentService,
    QueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
