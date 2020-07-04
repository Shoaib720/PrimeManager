import { NgModule } from '@angular/core';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { EditPerformanceComponent } from './edit-performance/edit-performance.component';
import { QueriesComponent } from './queries/queries.component';
import { ViewAssignmentsComponent } from './view-assignments/view-assignments.component';
import { FormsModule } from '@angular/forms';
import { FacultyRoutingModule } from './faculty-routing.module';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    EditAssignmentComponent,
    EditPerformanceComponent,
    QueriesComponent,
    ViewAssignmentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FacultyRoutingModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class FacultyModule{

}
