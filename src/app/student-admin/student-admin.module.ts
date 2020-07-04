import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ComplaintsComponent } from './complaints/complaints.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { StudentsAdminRoutingModule } from './students-admin-routing.module';

@NgModule({
  declarations: [
    ComplaintsComponent,
    ManageStudentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentsAdminRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class StudentAdminModule{

}
