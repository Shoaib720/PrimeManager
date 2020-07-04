import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({providedIn: 'root'})
export class ManageStudentService{
  studentUpdate = new Subject<User[]>();
  students: User[] = [];

  constructor(private http: HttpClient){}

  createStudentUser(newStudent: User){
    this.http.post<{message: string, data: User}>('http://localhost:3000/api/v1/users', newStudent)
    .subscribe(response => {
      this.students.push(response.data);
      this.studentUpdate.next(this.students.slice());
    });
  }

  getStudentData(){
    this.http.get<{message: string, data: User[]}>('http://localhost:3000/api/v1/users')
    .subscribe(resStudentData => {
      this.students = resStudentData.data;
      return this.studentUpdate.next(this.students.slice());
    });
  }

  deleteStudentData(index: number){
    const id = this.students[index]._id;
    this.http.delete<{message: string}>('http://localhost:3000/api/v1/users/' + id)
    .subscribe(delResponse => {
      this.getStudentData();
    });
  }
}
