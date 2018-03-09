import {Component, Input, OnInit} from '@angular/core';
import {CreateDialogComponent} from '../../uploaded-photos-page/create-dialog/create-dialog.component';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.scss']
})
export class ListPhotoComponent implements OnInit {

  public page = 3;

  @Input() items = [1, 2, 3, 4, 5];

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  handlePhotoClick() {
    this.modalService.open(CreateDialogComponent)
      .then((value) => console.log(value))
      .catch((error) => console.log(error));
  }

}
