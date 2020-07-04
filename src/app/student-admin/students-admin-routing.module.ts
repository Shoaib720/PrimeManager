import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAdminComponent } from './student-admin.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { CoursesComponent } from '../courses/courses.component';
import { SettingsComponent } from '../settings/settings.component';
import { NoticesComponent } from '../notices/notices.component';

const routes: Routes = [
  { path : '', component : StudentAdminComponent, children: [
    { path : 'manage-students', component : ManageStudentsComponent},
    { path : 'complaints', component : ComplaintsComponent}, // working
    { path : 'notices', component : NoticesComponent}, // working
    { path : 'courses', component : CoursesComponent},
    { path : 'settings', component : SettingsComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentsAdminRoutingModule{

}
