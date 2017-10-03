import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../shared/service/clients.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  tableData;
  tableOptions = {
    "ClientName": "Name",
    "IDClient": "C.E. ID",
    "QBTermId": "QB Red ID",
  };
  searchOption = "ClientName";
  constructor(private clientsService: ClientsService) {
    clientsService.getClients().subscribe((data) => {
      console.log(data)
      this.tableData = data;
    });
  }

  ngOnInit() {
  }

}
