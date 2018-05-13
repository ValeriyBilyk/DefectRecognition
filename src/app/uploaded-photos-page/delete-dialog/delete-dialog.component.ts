import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
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

    this.photoService.deletePhoto(this.photoId).subscribe(res => this.activeModal.close('Close click'));
  }

}
