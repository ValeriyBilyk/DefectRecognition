import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.scss']
})
export class ListPhotoComponent implements OnInit {

  items = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
