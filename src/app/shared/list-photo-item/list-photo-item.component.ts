import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {DropdownMenuConfig} from '../dropdown-menu/dropdown-menu-config';
import {ListConfig} from '../list-photo/list-config';

@Component({
  selector: 'app-list-photo-item',
  templateUrl: './list-photo-item.component.html',
  styleUrls: ['./list-photo-item.component.scss']
})
export class ListPhotoItemComponent implements OnInit, OnChanges {

  @Input() listConfig: ListConfig;
  @Input() item: any;
  @Output() handleAction = new EventEmitter();

  public dropdownConfig = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.initDropdownMenu();
  }

  public onItemSelected(config: DropdownMenuConfig, item) {
    this.handleAction.emit({action: config.id, modelType: this.listConfig.modelType, item});
  }

  private initDropdownMenu() {
    if (!this.listConfig) {

      return;
    }

    const actions = [];
    this.listConfig.edit && actions.push(new DropdownMenuConfig('edit', 'Edit photo'));
    this.listConfig.deleting && actions.push(new DropdownMenuConfig('delete', 'Delete photo'));
    this.listConfig.analyze && actions.push(new DropdownMenuConfig('analyze', 'Analyze photo'));
    this.dropdownConfig = actions;
  }

}
