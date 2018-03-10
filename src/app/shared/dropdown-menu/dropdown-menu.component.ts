import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropdownMenuConfig} from './dropdown-menu-config';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  @Input() items: DropdownMenuConfig;

  @Output() onItemSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onItemClick(item: DropdownMenuConfig) {
    this.onItemSelected.emit(item);
  }

}
