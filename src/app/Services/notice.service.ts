import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Notice } from '../Models/notice.model';

@Injectable()

export class NoticeService{

    noticesUpdated = new Subject<Notice[]>();

    constructor(private http: HttpClient){}

    notices: Notice[] = [];

    getNotices(){
      this.http.get<{message: string, data: any}>('http://localhost:3000/api/v1/notices')
      .pipe(map(
        fetchedNotices => {
          return fetchedNotices.data.map(
            notice => {
              return {
                refno: notice._id,
                date: notice.date,
                content: notice.content
              };
            }
          );
        }
      ))
      .subscribe(fetchResponse => {
        // console.log(fetchResponse);
        this.notices = fetchResponse;
        // console.log(this.notices);
        this.noticesUpdated.next(this.notices);
      });
    }
    addNotice(newNotice: Notice){
      this.http.post<{message: string, data: any}>('http://localhost:3000/api/v1/notices', newNotice)
      .subscribe( postResponse => {
        const modNotice = new Notice(
          postResponse.data._id,
          postResponse.data.date,
          postResponse.data.content
        );
        // console.log(modNotice);
        this.notices.push(modNotice);
        this.noticesUpdated.next(this.notices.slice());
      });
    }
    updateNoticeById(index: number, newNotice: Notice){
      const date = newNotice.date;
      const content = newNotice.content;
      // console.log({ date, content });
      this.http.put<{message: string, data: {_id: string, date: string, content: string, __v: number}}>('http://localhost:3000/api/v1/notices/' + newNotice.refno, { date, content })
      .subscribe(
        (response) => {
          const fetchedNotice = new Notice(
            response.data._id,
            response.data.date,
            response.data.content
          );
          // console.log(fetchedNotice)
          this.notices[index] = fetchedNotice;
          this.noticesUpdated.next(this.notices.slice());
        }
      );
    }

    deleteNotice(index: number){
      const id = this.notices[index].refno;
      this.http.delete<{message: string, data: any}>('http://localhost:3000/api/v1/notices/' + id)
      .subscribe(
        () => {
          this.notices.splice(index, 1);
          this.noticesUpdated.next(this.notices.slice());
        }
      )
    }
}
