import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/Models/assignment.model';
import { AssignmentService } from 'src/app/Services/assignment.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[];

  constructor(private asgnService: AssignmentService) { }

  ngOnInit(): void {
    this.assignments = this.asgnService.getAssignments();
    this.asgnService.assignmentsUpdated.subscribe(
      (updatedAssignment: Assignment[]) => {
        this.assignments = updatedAssignment;
      }
    );
  }

}
