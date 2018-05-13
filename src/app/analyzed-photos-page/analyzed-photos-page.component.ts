import {Component, OnInit} from '@angular/core';
import {ListConfig} from '../shared/list-photo/list-config';

@Component({
  selector: 'app-analyzed-photos-page',
  templateUrl: './analyzed-photos-page.component.html',
  styleUrls: ['./analyzed-photos-page.component.scss']
})
export class AnalyzedPhotosPageComponent implements OnInit {

  public listConfig = new ListConfig(ListConfig.ANALYZED_PHOTO, false, true, true, true, false);

  constructor() { }

  ngOnInit() {
  }

}
