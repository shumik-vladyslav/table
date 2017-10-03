import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showHide;

  constructor(private oauthService: OAuthService) {
    this.showHide = false;
  }
  changeShowStatus(){
    this.showHide = !this.showHide;
  }

  ngOnInit() {
    console.log(this.oauthService.getIdentityClaims())
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }
}
