import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/Models/assignment.model';
import { AssignmentService } from 'src/app/Services/assignment.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {

  constructor(private asgnService : AssignmentService) { }

  ngOnInit(): void {
  }
  onPostAssignment(
    asgDate : HTMLInputElement,
    sub : HTMLInputElement,
    asgno : HTMLInputElement,
    ldate : HTMLInputElement,
    asgContent : HTMLTextAreaElement
  ){
    const newAsgn = new Assignment(asgDate.value,sub.value,parseInt(asgno.value),ldate.value,asgContent.value)
    this.asgnService.addAssignment(newAsgn)
  }

}
