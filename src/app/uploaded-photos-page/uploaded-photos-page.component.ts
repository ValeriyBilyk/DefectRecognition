import { Component, OnInit } from '@angular/core';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-uploaded-photos-page',
  templateUrl: './uploaded-photos-page.component.html',
  styleUrls: ['./uploaded-photos-page.component.scss']
})
export class UploadedPhotosPageComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  handlePhotoClick() {
    this.modalService.open(CreateDialogComponent)
      .then((value) => console.log(value))
      .catch((error) => console.log(error));
  }

}
