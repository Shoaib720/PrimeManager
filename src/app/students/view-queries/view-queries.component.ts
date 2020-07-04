import { Component, OnInit, OnDestroy } from '@angular/core';

import { Query } from '../../Models/query.model';
import { QueryService } from 'src/app/Services/query.service';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import { AuthData } from 'src/app/Models/authData.model';

@Component({
  selector: 'app-view-queries',
  templateUrl: './view-queries.component.html',
  styleUrls: ['./view-queries.component.css']
})
export class ViewQueriesComponent implements OnInit, OnDestroy {

  private loggedUser: AuthData;

  private logSub: Subscription;
  private querySub: Subscription;

  queries: Query[] = [];

  constructor(
    private queryService: QueryService,
    private logService: LoginService
    ) { }

  ngOnInit(): void {
    this.logSub = this.logService.loggedUser.subscribe(
      authData => {
        this.loggedUser = authData;
      }
    );
    this.queryService.getQueries();
    this.querySub = this.queryService.updateQueries.subscribe(
      updatedQueries => {
        this.queries = updatedQueries.filter(query => query.studEmail === this.loggedUser.email);
      }
    );
  }

  onDelete(index: number){
    this.queryService.deleteQuery(index);
  }

  ngOnDestroy(){
    this.querySub.unsubscribe();
    this.logSub.unsubscribe();
  }

}
