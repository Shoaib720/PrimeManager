import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './login/login.service';
import { AuthData } from './Models/authData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(private loginService: LoginService){console.log('inCons');}

  title = 'schoolar-app';
  ngOnInit(){
    this.loginService.autoLogin();
  }
  ngOnDestroy(){
  }
}
