import { Query } from '../Models/query.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class QueryService{

  updateQueries = new Subject<Query[]>();

  constructor(private http: HttpClient){}

  queries: Query[] = [
    {
      _id: 'yuojdsfa694jhvjha2',
      studEmail: 'mustafa@gmail.com',
      date: '05/06/2020',
      subject: 'Physics',
      content: 'Refractive Index'
    }
  ];

  getQueries(){
    this.http.get<{message: string, data: Query[]}>('http://localhost:3000/api/v1/queries')
    .subscribe(fetchedQueries => {
      this.queries = fetchedQueries.data;
      this.updateQueries.next(this.queries.slice());
    });
  }

  addQuery(query: Query){
    const email = query.studEmail;
    const date = query.date;
    const subject = query.subject;
    const content = query.content;
    this.http.post<{message: string, data: Query}>('http://localhost:3000/api/v1/queries', {email, date, subject, content})
    .subscribe(postedQuery => {
      const newQuery = new Query(
        postedQuery.data._id,
        postedQuery.data.studEmail,
        postedQuery.data.date,
        postedQuery.data.subject,
        postedQuery.data.content
      );
      this.queries.push(newQuery);
      this.updateQueries.next(this.queries.slice());
    });
  }

  deleteQuery(index: number){
    const id = this.queries[index]._id;
    console.log(id)
    this.http.delete<{message: string, data: Query}>('http://localhost:3000/api/v1/queries/' + id)
    .subscribe((response) => {
      console.log(response.message);
      this.queries.splice(index, 1);
      this.updateQueries.next(this.queries.slice());
    });
  }
}
