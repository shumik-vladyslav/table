import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  showHide;
  constructor() {
    this.showHide = false;
  }
  changeShowStatus(){
    this.showHide = !this.showHide;
  }

  ngOnInit() {
  }

}
