import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';

import { FacultyAdminRoutingModule } from './faculty-admin-routing.module';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageFacultyComponent } from './manage-faculty/manage-faculty.component';
import { EditFacultyComponent } from './edit-faculty/edit-faculty.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';
import { ViewNoticesComponent } from './view-notices/view-notices.component';

@NgModule({
  declarations: [
    ManageCoursesComponent,
    ManageFacultyComponent,
    EditFacultyComponent,
    ViewFacultyComponent,
    ManageNoticesComponent,
    ViewNoticesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FacultyAdminRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule
  ]
})

export class FacultyAdminModule{

}
