import { Subject } from 'rxjs';
import { Complaint } from '../Models/complaints.model';

export class ComplaintService{
  updatedComplaints = new Subject<Complaint[]>();
  complaints: Complaint[] = [
    {
      _id: 'asoeiyreww876vwadsfbew',
      date : '01/06/2020',
      content : 'Kashif is bullshit!!!',
      complainerName: 'Aditya',
      complainerEmail: 'aditya@gmail.com'
    }
  ];

  getComplaints(){
    return this.complaints.slice();
  }
  addComplaint(newComplaint: Complaint){
    this.complaints.push(newComplaint);
    this.updatedComplaints.next(this.complaints.slice());
  }

  deleteComplaint(index: number){
    this.complaints.splice(index, 1);
    this.updatedComplaints.next(this.complaints.slice());
  }
}
