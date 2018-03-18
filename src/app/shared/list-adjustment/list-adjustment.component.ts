import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListConfig} from '../list-photo/list-config';

@Component({
  selector: 'app-list-adjustment',
  templateUrl: './list-adjustment.component.html',
  styleUrls: ['./list-adjustment.component.scss']
})
export class ListAdjustmentComponent implements OnInit {

  @Input() listConfig: ListConfig;
  @Output() uploadPhotoClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleUploadPhotoClick() {
    this.uploadPhotoClick.emit();
  }

}
