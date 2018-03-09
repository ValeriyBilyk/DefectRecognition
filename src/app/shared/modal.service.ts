import { Component, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {

  constructor(private modalService: NgbModal) {}

  open(component: Component): Promise<any> {
    const modalRef = this.modalService.open(component);

    return modalRef.result;
  }

}
