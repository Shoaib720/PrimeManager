import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QueryService } from 'src/app/Services/query.service';
import { Query } from '../../Models/query.model';
import { AuthData } from 'src/app/Models/authData.model';
import { LoginService } from 'src/app/login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ask-query',
  templateUrl: './ask-query.component.html',
  styleUrls: ['./ask-query.component.css']
})
export class AskQueryComponent implements OnInit {

  @ViewChild('f', {static: false}) queryForm: NgForm;

  private loggedUser: AuthData;

  constructor(
    private queryService: QueryService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.loginService.loggedUser.subscribe(
      userData => {
        this.loggedUser = userData;
      }
    );
  }

  onSubmit(){
    console.log(this.queryForm.value);
    const date = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
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

}
