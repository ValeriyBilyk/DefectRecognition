import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-analyze-dialog',
  templateUrl: './analyze-dialog.component.html',
  styleUrls: ['./analyze-dialog.component.scss']
})
export class AnalyzeDialogComponent {

  @Input() photoId;

  constructor(public activeModal: NgbActiveModal, private photoService: PhotoService) {}

  public onSubmit() {

    this.photoService.analyzePhoto(this.photoId).subscribe(res => this.activeModal.close('Close click'));
  }

}
