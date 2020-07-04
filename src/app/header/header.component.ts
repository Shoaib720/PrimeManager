import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login/login.service';
import { AuthData } from '../Models/authData.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private logSub: Subscription;

  logType: string = null;
  logId: string = null;
  logName: string = null;
  loggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.logSub = this.loginService.loggedUser.subscribe(
      (authData: AuthData) => {
        if(!authData){
          this.logId = null;
          this.logName = null;
          this.logType = null;
          this.loggedIn = false;
          return;
        }
        this.logId = authData.uid;
        this.logName = authData.name;
        this.logType = authData.type;
        this.loggedIn = true;
      }
    );
  }

  onLogOut(){
    this.loginService.logOut();
    this.logId = null;
    this.logName = null;
    this.logType = null;
    this.loggedIn = false;
  }

  ngOnDestroy(){
    this.logSub.unsubscribe();
  }

}
