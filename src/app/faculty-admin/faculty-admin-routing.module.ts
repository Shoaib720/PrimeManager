import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyAdminComponent } from './faculty-admin.component';
import { ManageFacultyComponent } from './manage-faculty/manage-faculty.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { SettingsComponent } from '../settings/settings.component';


const routes: Routes = [
  { path : '', component : FacultyAdminComponent, children: [
    { path : 'manage-faculty', component : ManageFacultyComponent},
    { path : 'edit-faculty', component: ViewFacultyComponent},
    { path : 'manage-courses', component : ManageCoursesComponent},
    { path : 'manage-notices', component : ManageNoticesComponent}, // working
    { path : 'settings', component : SettingsComponent}
  ]}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class FacultyAdminRoutingModule{

}
