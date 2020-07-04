import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Notice } from 'src/app/Models/notice.model';
import { NoticeService } from 'src/app/Services/notice.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-notices',
  templateUrl: './view-notices.component.html',
  styleUrls: ['./view-notices.component.css']
})
export class ViewNoticesComponent implements OnInit {
  @Output() selectedNotice = new EventEmitter<{index: number, notice: Notice}>();
  notices: Notice[] = [];
  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNotices();
    this.noticeService.noticesUpdated.subscribe(
      (newNotices: Notice[]) => {
        this.notices = newNotices;
      }
    );
  }
  onEdit(index: number){
    const notice = this.notices[index];
    this.selectedNotice.emit({ index, notice });
  }

  onDeleteNotice(id: number){
    this.noticeService.deleteNotice(id);
  }
}
