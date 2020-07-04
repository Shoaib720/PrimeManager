import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/Models/assignment.model';
import { AssignmentService } from 'src/app/Services/assignment.service';

@Component({
  selector: 'app-view-assignments',
  templateUrl: './view-assignments.component.html',
  styleUrls: ['./view-assignments.component.css']
})
export class ViewAssignmentsComponent implements OnInit {
  assignments: Assignment[];
  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.assignments = this.assignmentService.getAssignments();
    this.assignmentService.assignmentsUpdated.subscribe(
      (updatedAsgns: Assignment[]) => {
        this.assignments = updatedAsgns;
      }
    );
  }
  onDelete(index: number){
    this.assignmentService.deleteAssignment(index);
  }

}
