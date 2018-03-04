import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

}
