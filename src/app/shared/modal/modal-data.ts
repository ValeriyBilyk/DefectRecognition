import {Component} from '@angular/core';

export class ModalData {

  visible = false;
  component: Component;

  constructor(visible: boolean, component: Component) {
    this.visible = visible;
    this.component = component;
  }
}
