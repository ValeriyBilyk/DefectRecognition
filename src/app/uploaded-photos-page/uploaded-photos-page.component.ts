import { Component, OnInit } from '@angular/core';
import {ListConfig} from '../shared/list-photo/list-config';

@Component({
  selector: 'app-uploaded-photos-page',
  templateUrl: './uploaded-photos-page.component.html',
  styleUrls: ['./uploaded-photos-page.component.scss']
})
export class UploadedPhotosPageComponent implements OnInit {

  public listConfig = new ListConfig(ListConfig.UPLOADED_PHOTO, true, true, true, true, true);

  constructor() { }

  ngOnInit() {
  }
}
