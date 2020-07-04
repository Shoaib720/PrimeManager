import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/Models/complaints.model';
import { ComplaintService } from 'src/app/Services/complaint.service';


@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complaints: Complaint[];
  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
    this.complaints = this.complaintService.getComplaints();
    this.complaintService.updatedComplaints.subscribe(
      (updComplaints: Complaint[]) => {
        this.complaints = updComplaints;
      }
    );
  }

}
