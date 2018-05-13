import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-analyze-all-dialog',
  templateUrl: './analyze-all-dialog.component.html',
  styleUrls: ['./analyze-all-dialog.component.scss']
})
export class AnalyzeAllDialogComponent {

  constructor(public activeModal: NgbActiveModal, private photoService: PhotoService) {}

  public onSubmit() {

    this.photoService.analyzeAllPhotos().subscribe(res => this.activeModal.close('Close click'));
  }

}
