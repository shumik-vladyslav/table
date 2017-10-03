import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent} from "./components/clients/clients.component";
import {PharmaciesComponent} from "./components/pharmacies/pharmacies.component";



const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'pharmacies',
    component: PharmaciesComponent,
  },
  {
    path: '**',
    component: ClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
