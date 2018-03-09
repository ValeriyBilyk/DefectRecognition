import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {

  @Input() file: File;

  @Output() onFileSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onFileChange(file: File): void {
    this.file = file;
    this.onFileSelected.emit(file);
  }

}
