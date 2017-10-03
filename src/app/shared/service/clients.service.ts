import { Injectable } from '@angular/core';
import {HttpClient} from "./custom-http.service";

@Injectable()
export class ClientsService {

  constructor(private httpClient: HttpClient){

  }

  getClients(){
    return this.httpClient.get("Clients")
      .map(res => res.json().value);
  }
}
