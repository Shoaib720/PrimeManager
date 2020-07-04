import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { Complaint } from 'src/app/Models/complaints.model';
import { LoginService } from 'src/app/login/login.service';
import { AuthData } from 'src/app/Models/authData.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.component.html',
  styleUrls: ['./raise-complaint.component.css']
})
export class RaiseComplaintComponent implements OnInit {

  private loggedUser: AuthData;

  constructor(
    private complaintService: ComplaintService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.loginService.loggedUser.subscribe(
      data => {
        this.loggedUser = data;
      }
    );
  }
  onSubmitComplaint(form: NgForm){
    const newComplaint = new Complaint(
      null,
      `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
      form.value.complaint,
      this.loggedUser.name,
      this.loggedUser.email);
    this.complaintService.addComplaint(newComplaint);
    form.reset();
  }

  onClear(form: NgForm){
    form.reset();
  }

}
