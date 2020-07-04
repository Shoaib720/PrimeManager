import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ComplaintService } from 'src/app/Services/complaint.service';
import { Complaint } from 'src/app/Models/complaints.model';
import { LoginService } from 'src/app/login/login.service';
import { AuthData } from 'src/app/Models/authData.model';
import { AdjustDayAndMonth } from 'src/app/shared/adjust-day-month';

@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.component.html',
  styleUrls: ['./raise-complaint.component.css']
})
export class RaiseComplaintComponent implements OnInit, OnDestroy {

  private adjust = new AdjustDayAndMonth();

  private loggedUser: AuthData;
  private logSub: Subscription;

  constructor(
    private complaintService: ComplaintService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.logSub = this.loginService.loggedUser.subscribe(
      data => {
        this.loggedUser = data;
      }
    );
  }
  onSubmitComplaint(form: NgForm){
    const newComplaint = new Complaint(
      null,
      `${new Date().getFullYear()}-${this.adjust.month}-${this.adjust.day}`,
      form.value.complaint,
      this.loggedUser.name,
      this.loggedUser.email);
    this.complaintService.addComplaint(newComplaint);
    form.reset();
  }

  onClear(form: NgForm){
    form.reset();
  }

  ngOnDestroy(){
    this.logSub.unsubscribe();
  }

}
