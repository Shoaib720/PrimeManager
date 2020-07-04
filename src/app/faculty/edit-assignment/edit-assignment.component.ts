import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { Assignment } from 'src/app/Models/assignment.model';
import { AssignmentService } from 'src/app/Services/assignment.service';
import { LoginService } from 'src/app/login/login.service';
import { AuthData } from 'src/app/Models/authData.model';
import { AdjustDayAndMonth } from 'src/app/shared/adjust-day-month';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit, OnDestroy {

  private adjust = new AdjustDayAndMonth();

  @ViewChild('f', { static: false }) asgnForm: NgForm;
  loggedUser: AuthData;
  logSub: Subscription;

  constructor(
    private asgnService: AssignmentService,
    private http: HttpClient,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.logSub = this.loginService.loggedUser.subscribe(
      (authUser: AuthData) => {
        this.loggedUser = authUser;
      }
    );

  }
  onPostAssignment(){
    const newAsgn = new Assignment(
      `${new Date().getFullYear()}-${this.adjust.month}-${this.adjust.day}`,
      this.asgnForm.value.subject,
      this.asgnForm.value.asgnNo,
      this.asgnForm.value.lastDate,
      this.loggedUser.email,
      this.asgnForm.value.content
    );
    this.asgnService.addAssignment(newAsgn);
    this.asgnForm.reset();
  }

  onClear(){
    this.asgnForm.reset();
  }

  ngOnDestroy(){
    this.logSub.unsubscribe();
  }

}

