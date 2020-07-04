import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryService } from 'src/app/Services/query.service';
import { Query } from 'src/app/Models/query.model';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit, OnDestroy {

  querySub: Subscription;

  queries: Query[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
    this.queryService.getQueries();
    this.querySub = this.queryService.updateQueries.subscribe(
      (updatedQueries: Query[]) => {
        this.queries = updatedQueries;
      }
    );
  }

  ngOnDestroy(){
    this.querySub.unsubscribe();
  }

}
