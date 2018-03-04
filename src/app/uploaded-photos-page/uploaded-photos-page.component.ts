import { Component, OnInit } from '@angular/core';
import { ModalData } from '../shared/modal/modal-data';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@Component({
  selector: 'app-uploaded-photos-page',
  templateUrl: './uploaded-photos-page.component.html',
  styleUrls: ['./uploaded-photos-page.component.scss']
})
export class UploadedPhotosPageComponent implements OnInit {

  public modalData = new ModalData(false, null);

  constructor() { }

  ngOnInit() {
  }

  handlePhotoClick() {
    this.modalData = new ModalData(true, CreateDialogComponent);
  }

}
