import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { NoticeService } from 'src/app/Services/notice.service';
import { Notice } from 'src/app/Models/notice.model';
import { ViewNoticesComponent } from '../view-notices/view-notices.component';

@Component({
  selector: 'app-manage-notices',
  templateUrl: './manage-notices.component.html',
  styleUrls: ['./manage-notices.component.css']
})
export class ManageNoticesComponent implements OnInit {

  @ViewChild("f", {static: false}) noticeForm: NgForm;

  editMode = false;
  selectedNoticeIndex: number;

  notice: Notice;

  constructor(
    private noticeService: NoticeService
    ) { }

  ngOnInit(): void {
    // this.viewNotice.selectedNotice.subscribe(
    //   selectedNotice => {
    //     this.notice = selectedNotice;
    //     this.editMode = true;
    //     this.initForm();
    //   }
    // );
    // this.noticeService.getNotices();
    // this.noticeService.noticesUpdated.subscribe(
    //   updNotices => {
    //     this.notices = updNotices;
    //   }
    // );
  }

  onPostNotice(){
    if (!this.editMode){
      const newNotice = new Notice(
        null,
        `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        this.noticeForm.value.content
      );
      this.noticeService.addNotice(newNotice);
    }
    else{
      const newNotice = new Notice(
        this.notice.refno,
        `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        this.noticeForm.value.content
      );
      // console.log(this.notice)
      this.noticeService.updateNoticeById(this.selectedNoticeIndex, newNotice);
      // this.noticeService.getNotices();
      this.editMode = false;
    }
    this.noticeForm.reset();
  }

  onNoticeSelected(event: {index: number, notice: Notice}){
    // console.log(event)
    this.editMode = true;
    this.selectedNoticeIndex = event.index;
    const newNotice =  new Notice(
      event.notice.refno,
      event.notice.date,
      event.notice.content
    );
    // console.log(newNotice);
    this.notice = newNotice;
    // console.log(this.notice);
    this.noticeForm.setValue({content : event.notice.content});
    // console.log(event.notice.refno);
  }

  onClear(){
    this.noticeForm.reset();
    this.editMode = false;
  }
}
