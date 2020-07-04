import { Component, OnInit } from '@angular/core';
import { ManageStaffService } from '../manage-staff.service';
import { User } from '../../Models/user.model';


@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.css']
})
export class ViewFacultyComponent implements OnInit {

  staffs: User[] = [
    {
      password: '$2b$10$OcjJpUFxcCETeXJ4DDMOVO1LyCiLW2K.eZmKBKCFwn73KOwuFKywO',
      qualification: 'HSc',
      designation: 'Lecturer',
      experience: 2,
      salary: 20000,
      studClass: null,
      division: null,
      _id: '5ef97265b9a16d12052e44db',
      name: 'Shoaib Salim Shaikh',
      type: 'faculty',
      contact: 7208405392,
      email: 'shoaib@gmail.com'
    }
  ];

  constructor(private staffService: ManageStaffService) { }

  ngOnInit(): void {
    this.staffService.getStaffData();
    this.staffService.staffUpdate.subscribe(
      updatedStaff => {
        this.staffs = updatedStaff;
      }
    );
  }

  onDelete(index: number){
    this.staffService.deleteStaffData(index);
  }

}
