import {Component, Input, OnInit} from '@angular/core';
import {CreateDialogComponent} from '../../uploaded-photos-page/create-dialog/create-dialog.component';
import {ModalService} from '../modal.service';
import {ListConfig} from './list-config';
import {PhotoService} from '../../services/photo.service';
import {DeleteDialogComponent} from '../../uploaded-photos-page/delete-dialog/delete-dialog.component';
import {AnalyzeDialogComponent} from '../../uploaded-photos-page/analyze-dialog/analyze-dialog.component';
import {AnalyzeAllDialogComponent} from '../../uploaded-photos-page/analyze-all-dialog/analyze-all-dialog.component';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.scss']
})
export class ListPhotoComponent implements OnInit {

  actionMap = {
    edit: this.edit.bind(this),
    delete: this.delete.bind(this),
    analyze: this.analyze.bind(this)
  };

  public page = 3;

  @Input() listConfig: ListConfig;
  @Input() items;

  constructor(private modalService: ModalService, private photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }

  handlePhotoClick() {
    this.modalService.open(CreateDialogComponent)
      .then((value) => this.getPhotos())
      .catch((error) => console.log(error));
  }

  handleAction(model) {
    this.actionMap[model.action](model);
  }

  edit() {
    console.log('edit');
  }

  delete(model) {
    this.modalService.open(DeleteDialogComponent, {photoId: model.item.id})
      .then((value) => this.getPhotos())
      .catch((error) => console.log(error));
  }

  analyze(model) {
    this.modalService.open(AnalyzeDialogComponent, {photoId: model.item.id})
      .then(() => this.getPhotos())
      .catch((error) => console.log(error));
  }

  analyzeAll() {
    this.modalService.open(AnalyzeAllDialogComponent)
      .then(() => this.getPhotos())
      .catch((error) => console.log(error));
  }

  private getPhotos() {
    this.photoService.getPhotos(this.listConfig.modelType === ListConfig.UPLOADED_PHOTO ? 'false' : 'true').subscribe(items => this.items = items);
  }

}
