import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public modal: Modal) { }

  @Input() editSelect;
  @Input() searchOption;

  ngOnInit() {
  }

  @Output() change = new EventEmitter();

  cancel() {
    const dialogRef = this.modal.confirm()
      .size('lg')
      .showClose(true)
      .title('Are you sure?')
      .body(`
            <h4>Are you sure?</h4>
            <button
            `)
      .cancelBtn('Close')
      .open();

    dialogRef
      .then( dialogRef => {
        dialogRef.result.then( result => {
          if(result){
            this.change.next(null);
          }
        });
      });
  }

  saveChanges() {
    const dialogRef = this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Saved')
      .body(`
            <h4>Saved</h4>
         `)
      .open();

    (dialogRef as any).result
      .then( result => alert(`The result is: ${result}`) );
  }

}
