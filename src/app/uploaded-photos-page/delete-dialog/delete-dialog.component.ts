import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  @Input() photoId;

  constructor(public activeModal: NgbActiveModal, private photoService: PhotoService) {}

  public onSubmit() {

    // debugger;
    this.photoService.deletePhoto(this.photoId).subscribe();

    this.activeModal.close('Close click');
  }

}
