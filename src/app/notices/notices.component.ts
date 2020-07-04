import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notice } from '../Models/notice.model';
import { NoticeService } from '../Services/notice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css'],
})
export class NoticesComponent implements OnInit, OnDestroy {
  notices: Notice[] = [];
  noticeSub: Subscription;

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNotices();
    this.noticeSub = this.noticeService.noticesUpdated.subscribe(
      (updatedNotices: Notice[]) => {this.notices = updatedNotices;}
    );
  }

  ngOnDestroy(){
    this.noticeSub.unsubscribe();
  }

}
