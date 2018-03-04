import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPhotoComponent } from './list-photo/list-photo.component';
import { ListPhotoItemComponent } from './list-photo-item/list-photo-item.component';
import { ListAdjustmentComponent } from './list-adjustment/list-adjustment.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListPhotoComponent,
    ListPhotoItemComponent,
    ListAdjustmentComponent,
    ModalComponent
  ],
  exports: [
    ListPhotoComponent,
    ListPhotoItemComponent,
    ListAdjustmentComponent,
    ModalComponent
  ]
})
export class SharedModule { }
