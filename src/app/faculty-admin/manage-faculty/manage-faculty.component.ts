import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageStaffService } from '../manage-staff.service';
import { User } from '../../Models/user.model';

@Component({
  selector: 'app-manage-faculty',
  templateUrl: './manage-faculty.component.html',
  styleUrls: ['./manage-faculty.component.css']
})
export class ManageFacultyComponent implements OnInit {

  constructor(private staffService: ManageStaffService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (!form.valid){
      return;
    }
    const name = `${form.value.firstName} ${form.value.middleName} ${form.value.lastName}`;
    const newStaff = new User(
      null,
      name,
      form.value.type,
      form.value.designation,
      form.value.qualification,
      form.value.salary,
      form.value.experience,
      form.value.contact,
      form.value.email,
      form.value.email,
      null,
      null
    );
    this.staffService.createStaffUser(newStaff);
    form.reset();
  }

  onClear(form: NgForm){
    form.reset();
  }

}
