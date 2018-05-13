import { Component, OnInit } from '@angular/core';
import {ListConfig} from '../shared/list-photo/list-config';
import {PhotoService} from '../services/photo.service';

@Component({
  selector: 'app-uploaded-photos-page',
  templateUrl: './uploaded-photos-page.component.html',
  styleUrls: ['./uploaded-photos-page.component.scss']
})
export class UploadedPhotosPageComponent implements OnInit {

  photos: any;

  public listConfig = new ListConfig(ListConfig.UPLOADED_PHOTO, true, true, true, true, true);

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    // this.photoService.getPhotos().subscribe(items => this.photos = items);
  }
}
