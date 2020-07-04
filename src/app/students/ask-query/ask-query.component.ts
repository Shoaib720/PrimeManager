import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { QueryService } from 'src/app/Services/query.service';
import { Query } from '../../Models/query.model';
import { AuthData } from 'src/app/Models/authData.model';
import { LoginService } from 'src/app/login/login.service';
import { AdjustDayAndMonth } from '../../shared/adjust-day-month';

@Component({
  selector: 'app-ask-query',
  templateUrl: './ask-query.component.html',
  styleUrls: ['./ask-query.component.css']
})
export class AskQueryComponent implements OnInit, OnDestroy {

  private adjust = new AdjustDayAndMonth();

  @ViewChild('f', {static: false}) queryForm: NgForm;

  private logSub: Subscription;

  private loggedUser: AuthData;

  constructor(
    private queryService: QueryService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.logSub = this.loginService.loggedUser.subscribe(
      userData => {
        this.loggedUser = userData;
      }
    );
  }

  onSubmit(){
    const date = `${new Date().getFullYear()}-${this.adjust.month}-${this.adjust.day}`;
    const newQuery = new Query(
      null,
      this.loggedUser.email,
      date,
      this.queryForm.value.subject,
      this.queryForm.value.content
    );
    console.log(newQuery);
    this.queryService.addQuery(newQuery);
    this.queryForm.reset();
  }

  onClear(){
    this.queryForm.reset();
  }

  ngOnDestroy(){
    this.logSub.unsubscribe();
  }

}
