import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AskQueryComponent } from './ask-query/ask-query.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentItemComponent } from './assignments/assignment-item/assignment-item.component';
import { PerformanceComponent } from './performance/performance.component';
import { ViewPerformanceComponent } from './performance/view-performance/view-performance.component';
import { RaiseComplaintComponent } from './raise-complaint/raise-complaint.component';
import { StudentRoutingModule } from './student-routing.module';
import { CommonModule } from '@angular/common';
import { ViewQueriesComponent } from './view-queries/view-queries.component';
import { ViewComplaintsComponent } from './view-complaints/view-complaints.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AskQueryComponent,
    AssignmentsComponent,
    AssignmentItemComponent,
    PerformanceComponent,
    ViewPerformanceComponent,
    RaiseComplaintComponent,
    ViewQueriesComponent,
    ViewComplaintsComponent
  ],
  imports: [
  CommonModule,
    FormsModule,
    StudentRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class StudentsModule{

}
