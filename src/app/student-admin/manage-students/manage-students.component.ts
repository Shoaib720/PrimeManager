import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../Models/user.model';
import { ManageStudentService } from '../manage-students.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

  constructor(private studentService: ManageStudentService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    if (!form.valid){
      return;
    }
    const name = `${form.value.firstName} ${form.value.middleName} ${form.value.lastName}`;
    const newStudent = new User(
      null, // id
      name, // name
      'student', // type
      null, // designation
      null, // qualification
      null, // salary
      null, // experience
      form.value.contact, // contact
      form.value.email, // email
      form.value.email, // password
      form.value.class, // class
      form.value.division // div
    );
    this.studentService.createStudentUser(newStudent);
  }
}
