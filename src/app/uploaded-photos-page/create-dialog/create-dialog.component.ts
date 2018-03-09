import {Component, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent {

  @Input() model: any;

  public form = new FormGroup ({
    name: new FormControl(),
    company: new FormControl()
  });
  public file: File;

  constructor(public activeModal: NgbActiveModal) {}

  public onSubmit() {
    const v = this.form;
    this.activeModal.close('Close click');
  }

  public handleFileSelection(file: File) {
    debugger;
  }
}
