import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { PerformanceComponent } from '../students/performance/performance.component';
import { QueriesComponent } from './queries/queries.component';
import { NoticesComponent } from '../notices/notices.component';
import { CoursesComponent } from '../courses/courses.component';
import { SettingsComponent } from '../settings/settings.component';

const facultyRoutes: Routes = [
  { path : '', component : FacultyComponent, children: [
    { path : 'manage-assignments', component : EditAssignmentComponent}, // working
    { path : 'students-performance', component : PerformanceComponent},
    { path : 'students-queries', component : QueriesComponent},
    { path : 'notices', component : NoticesComponent}, // working
    { path : 'courses', component : CoursesComponent},
    { path : 'settings', component : SettingsComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(facultyRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class FacultyRoutingModule{

}
