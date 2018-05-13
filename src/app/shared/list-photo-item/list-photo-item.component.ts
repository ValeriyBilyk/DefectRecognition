import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropdownMenuConfig} from '../dropdown-menu/dropdown-menu-config';
import {ListConfig} from '../list-photo/list-config';

@Component({
  selector: 'app-list-photo-item',
  templateUrl: './list-photo-item.component.html',
  styleUrls: ['./list-photo-item.component.scss']
})
export class ListPhotoItemComponent implements OnInit {

  @Input() listConfig: ListConfig;
  @Input() item: any;
  @Output() handleAction = new EventEmitter();

  public dropdownConfig = [
    new DropdownMenuConfig('edit', 'Edit photo'),
    new DropdownMenuConfig('delete', 'Delete photo')
  ];

  constructor() { }

  ngOnInit() {
  }

  public onItemSelected(config: DropdownMenuConfig, item) {
    this.handleAction.emit({action: config.id, modelType: this.listConfig.modelType, item});
  }

}
