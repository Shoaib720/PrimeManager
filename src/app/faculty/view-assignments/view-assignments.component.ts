import { Component, OnInit, OnDestroy } from '@angular/core';
import { Assignment } from 'src/app/Models/assignment.model';
import { AssignmentService } from 'src/app/Services/assignment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-assignments',
  templateUrl: './view-assignments.component.html',
  styleUrls: ['./view-assignments.component.css']
})
export class ViewAssignmentsComponent implements OnInit, OnDestroy {
  assignments: Assignment[];
  private asgnSub: Subscription;
  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.assignments = this.assignmentService.getAssignments();
    this.asgnSub = this.assignmentService.assignmentsUpdated.subscribe(
      (updatedAsgns: Assignment[]) => {
        this.assignments = updatedAsgns;
      }
    );
  }
  onDelete(index: number){
    this.assignmentService.deleteAssignment(index);
  }

  ngOnDestroy(){
    this.asgnSub.unsubscribe();
  }

}
