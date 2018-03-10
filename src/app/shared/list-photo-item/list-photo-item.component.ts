import { Component, OnInit } from '@angular/core';
import {DropdownMenuConfig} from '../dropdown-menu/dropdown-menu-config';

@Component({
  selector: 'app-list-photo-item',
  templateUrl: './list-photo-item.component.html',
  styleUrls: ['./list-photo-item.component.scss']
})
export class ListPhotoItemComponent implements OnInit {

  public dropdownConfig = [
    new DropdownMenuConfig('edit', 'Edit photo'),
    new DropdownMenuConfig('delete', 'Delete photo')
  ];

  constructor() { }

  ngOnInit() {
  }

  public onItemSelected(item: DropdownMenuConfig) {

  }

}
