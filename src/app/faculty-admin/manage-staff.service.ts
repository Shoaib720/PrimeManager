import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ManageStaffService{
  staffUpdate = new Subject<User[]>();
  staffs: User[] = [];

  constructor(private http: HttpClient){}

  createStaffUser(newStaff: User, image: File){
    const postData = new FormData();
    postData.append('name', newStaff.name);
    postData.append('type', newStaff.type);
    postData.append('contact', newStaff.contact.toString());
    postData.append('email', newStaff.email);
    postData.append('password', newStaff.password);
    postData.append('qualification', newStaff.qualification);
    postData.append('designation', newStaff.designation);
    postData.append('experience', newStaff.experience.toString());
    postData.append('salary', newStaff.salary.toString());
    postData.append('image', image, newStaff.name.split(' ')[0]);
    this.http.post<{message: string, data: User}>('http://localhost:3000/api/v1/users', postData)
    .subscribe(response => {
      this.staffs.push(response.data);
      this.staffUpdate.next(this.staffs.slice());
    });
  }

  getStaffData(){
    this.http.get<{message: string, data: User[]}>('http://localhost:3000/api/v1/users')
    .subscribe(resStaffData => {
      this.staffs = resStaffData.data.filter(res => res.type !== 'student');
      return this.staffUpdate.next(this.staffs.slice());
    });
  }

  deleteStaffData(index: number){
    const id = this.staffs[index]._id;
    this.http.delete<{message: string}>('http://localhost:3000/api/v1/users/' + id)
    .subscribe(delResponse => {
      this.getStaffData();
    });
  }
}
