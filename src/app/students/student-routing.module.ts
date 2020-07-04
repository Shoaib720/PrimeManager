import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AskQueryComponent } from './ask-query/ask-query.component';
import { RaiseComplaintComponent } from './raise-complaint/raise-complaint.component';
import { ViewPerformanceComponent } from './performance/view-performance/view-performance.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { NoticesComponent } from '../notices/notices.component';
import { CoursesComponent } from '../courses/courses.component';
import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
  { path : '', component : StudentsComponent, children: [
    { path : 'ask-query', component : AskQueryComponent},
    { path : 'raise-complaint', component : RaiseComplaintComponent}, // working
    { path : 'view-performance', component : ViewPerformanceComponent},
    { path : 'assignments', component : AssignmentsComponent}, // working
    { path : 'notices', component : NoticesComponent}, // working
    { path : 'courses', component : CoursesComponent},
    { path : 'settings', component : SettingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentRoutingModule{

}
