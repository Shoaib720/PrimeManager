import { Component, OnInit, OnDestroy } from '@angular/core';
import { Complaint } from 'src/app/Models/complaints.model';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit, OnDestroy {
  complaints: Complaint[];

  private complaintSub: Subscription;
  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
    this.complaints = this.complaintService.getComplaints();
    this.complaintSub = this.complaintService.updatedComplaints.subscribe(
      (updComplaints: Complaint[]) => {
        this.complaints = updComplaints;
      }
    );
  }

  ngOnDestroy(){
    this.complaintSub.unsubscribe();
  }

}
