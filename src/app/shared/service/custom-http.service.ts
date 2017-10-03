import {Http, Headers} from '@angular/http';
import {Injectable} from "@angular/core";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class HttpClient {

  private url = "https://centralapistaging.azurewebsites.net/";

  constructor(private http: Http, private oauthService: OAuthService) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' +
      this.oauthService.getAccessToken());
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.url + url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
