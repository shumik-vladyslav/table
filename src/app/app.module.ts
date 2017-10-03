import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppComponent } from './app.component';
import { TableComponent } from './core/table/table.component';
import { AuthConfig } from 'angular-oauth2-oidc';
import {ClientsService} from "./shared/service/clients.service";
import {HttpClient} from "./shared/service/custom-http.service";
import { ClientsComponent } from './components/clients/clients.component';
import { NavComponent } from './core/nav/nav.component';
import { LeftMenuComponent } from './core/left-menu/left-menu.component';
import {KeysPipe} from "./shared/pipe/key.pipe";
import {searchPipe} from "./shared/pipe/serach.pipe";
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { EditComponent } from './core/table/edit/edit.component';
import {AppRoutingModule} from "./app-routing.module";
import { PharmaciesComponent } from './components/pharmacies/pharmacies.component';

export const authConfig: AuthConfig = {

  issuer: 'https://auth340bpreprod.azurewebsites.net',

  redirectUri: 'http://localhost:4200',

  clientId: 'central',

  scope: 'central-api openid',

  responseType: 'id_token token',


} as any;

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    searchPipe,
    TableComponent,
    ClientsComponent,
    NavComponent,
    LeftMenuComponent,
    EditComponent,
    PharmaciesComponent
  ],
  imports: [
    // AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    OAuthModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  exports: [KeysPipe, searchPipe],
  providers: [HttpClient, ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
