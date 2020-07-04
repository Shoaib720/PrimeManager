import { Component, OnInit, OnDestroy } from '@angular/core';
import { Assignment } from 'src/app/Models/assignment.model';
import { AssignmentService } from 'src/app/Services/assignment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit, OnDestroy {
  assignments: Assignment[];

  private asgnSub: Subscription;

  constructor(private asgnService: AssignmentService) { }

  ngOnInit(): void {
    this.assignments = this.asgnService.getAssignments();
    this.asgnSub = this.asgnService.assignmentsUpdated.subscribe(
      (updatedAssignment: Assignment[]) => {
        this.assignments = updatedAssignment;
      }
    );
  }

  ngOnDestroy(){
    this.asgnSub.unsubscribe();
  }

}
