import { Component, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {

  constructor(private modalService: NgbModal) {}

  open(component: Component, inputValues?): Promise<any> {
    const modalRef = this.modalService.open(component);
    Object.assign(modalRef.componentInstance, inputValues);

    return modalRef.result;
  }

}
