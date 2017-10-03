import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import {JwksValidationHandler, OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "../../app.module";
import {ClientsService} from "../../shared/service/clients.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  filteredItems;
  items;
  editSelect;

  constructor(private oauthService: OAuthService) {}

  @Input() set data(value){
    this.assignCopy(value);
  };

  @Input() options;
  @Input() searchOption;

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {}

  assignCopy(data){
    this.items = data;
    this.filteredItems = Object.assign([], data);
  }

  filterItem(value){
    this.assignCopy(this.items);

    this.filteredItems = Object.assign([], this.items).filter(
      item => item[this.searchOption].toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  edit(item){
    this.editSelect = item;
  }

}
