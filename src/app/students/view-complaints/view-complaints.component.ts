import { Component, OnInit, OnDestroy } from '@angular/core';
import { Complaint } from 'src/app/Models/complaints.model';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { LoginService } from 'src/app/login/login.service';
import { AuthData } from 'src/app/Models/authData.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css']
})
export class ViewComplaintsComponent implements OnInit, OnDestroy {

  logSub: Subscription;
  complaintSub: Subscription;
  private loggedUser: AuthData;

  complaints: Complaint[] = [];
  constructor(
    private complaintService: ComplaintService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    console.log('hello')
    this.logSub = this.loginService.loggedUser.subscribe(
      userData => {
        this.loggedUser = userData;
      }
    );

    this.complaints = this.complaintService.getComplaints().filter(complaint => complaint.complainerEmail === this.loggedUser.email);
    this.complaintSub = this.complaintService.updatedComplaints.subscribe(
      (updComplaints: Complaint[]) => {
        this.complaints = updComplaints.filter(complaint => complaint.complainerEmail === this.loggedUser.email);
      }
    );
  }

  onDelete(index: number){
    this.complaintService.deleteComplaint(index);
  }

  ngOnDestroy(){
    this.complaintSub.unsubscribe();
    // if (!this.loggedUser){
    //   this.logSub.unsubscribe();
    // }
  }

}
