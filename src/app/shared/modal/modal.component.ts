import {Component, Input, OnChanges} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalData } from './modal-data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {

  @Input() modalData: ModalData;

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(this.modalData.component);
  }

  ngOnChanges() {
    setTimeout(() => {
      if (!this.modalData) {

        return;
      }

      if (this.modalData.visible && this.modalData.component) {
        this.open();
      }
    });
  }

}
