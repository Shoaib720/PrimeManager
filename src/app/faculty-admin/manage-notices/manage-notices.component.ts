import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NoticeService } from 'src/app/Services/notice.service';
import { Notice } from 'src/app/Models/notice.model';
import { AdjustDayAndMonth } from 'src/app/shared/adjust-day-month';

@Component({
  selector: 'app-manage-notices',
  templateUrl: './manage-notices.component.html',
  styleUrls: ['./manage-notices.component.css']
})
export class ManageNoticesComponent implements OnInit {

  private adjust = new AdjustDayAndMonth();

  @ViewChild('f', {static: false}) noticeForm: NgForm;

  editMode = false;
  selectedNoticeIndex: number;

  notice: Notice;

  constructor(
    private noticeService: NoticeService
    ) { }

  ngOnInit(): void {
  }

  onPostNotice(){
    if (!this.editMode){
      const newNotice = new Notice(
        null,
        `${new Date().getFullYear()}-${this.adjust.month}-${this.adjust.day}`,
        this.noticeForm.value.content
      );
      this.noticeService.addNotice(newNotice);
    }
    else{
      const newNotice = new Notice(
        this.notice.refno,
        `${new Date().getFullYear()}-${this.adjust.month}-${this.adjust.day}`,
        this.noticeForm.value.content
      );
      this.noticeService.updateNoticeById(this.selectedNoticeIndex, newNotice);
      this.editMode = false;
    }
    this.noticeForm.reset();
  }

  onNoticeSelected(event: {index: number, notice: Notice}){
    this.editMode = true;
    this.selectedNoticeIndex = event.index;
    const newNotice =  new Notice(
      event.notice.refno,
      event.notice.date,
      event.notice.content
    );
    this.notice = newNotice;
    this.noticeForm.setValue({content : event.notice.content});
  }

  onClear(){
    this.noticeForm.reset();
    this.editMode = false;
  }
}
