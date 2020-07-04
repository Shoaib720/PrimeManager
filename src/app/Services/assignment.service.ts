import { Assignment } from '../Models/assignment.model';
import { Output } from '@angular/core';
import { Subject } from 'rxjs';

export class AssignmentService{
    assignmentsUpdated = new Subject<Assignment[]>();
    assignments: Assignment[] = [
        {
            date : '01/06/2020',
            subject : 'SEPM',
            asgnNo : 1,
            lastDate : '05/06/2020',
            content : 'What is blackbox Testing?'
        },
        {
            date : '01/06/2020',
            subject : 'DF',
            asgnNo : 2,
            lastDate : '05/06/2020',
            content : 'How to execute \'dd\' command?'
        },
        {
            date : '01/06/2020',
            subject : 'Java',
            asgnNo : 1,
            lastDate : '05/06/2020',
            content : 'What is polymorphism?'
        }
    ];
    getAssignments(){
        return this.assignments.slice();
    }
    addAssignment(newAssignment: Assignment){
        this.assignments.push(newAssignment);
        this.assignmentsUpdated.next(this.assignments.slice());
    }
    deleteAssignment(index: number){
        this.assignments.splice(index, 1);
        this.assignmentsUpdated.next(this.assignments.slice());
    }
}
