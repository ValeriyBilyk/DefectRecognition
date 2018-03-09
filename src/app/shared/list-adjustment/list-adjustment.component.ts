import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-adjustment',
  templateUrl: './list-adjustment.component.html',
  styleUrls: ['./list-adjustment.component.scss']
})
export class ListAdjustmentComponent implements OnInit {

  @Output() uploadPhotoClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleUploadPhotoClick() {
    this.uploadPhotoClick.emit();
  }

}
