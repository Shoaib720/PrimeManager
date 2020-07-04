import { Assignment } from '../Models/assignment.model';
import { Output } from '@angular/core';
import { Subject } from 'rxjs';

export class AssignmentService{
    assignmentsUpdated = new Subject<Assignment[]>();
    assignments: Assignment[] = [
        {
            date : '2020-06-01',
            subject : 'SEPM',
            asgnNo : 1,
            lastDate : '2020-06-05',
            email: 'rizwan@gmail.com',
            content : 'What is blackbox Testing?'
        },
        {
            date : '2020-06-01',
            subject : 'DF',
            asgnNo : 2,
            lastDate : '2020-06-05',
            email: 'priya@gmail.com',
            content : 'How to execute \'dd\' command?'
        },
        {
            date : '2020-06-01',
            subject : 'Java',
            asgnNo : 1,
            lastDate : '2020-06-05',
            email: 'kashif@gmail.com',
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
