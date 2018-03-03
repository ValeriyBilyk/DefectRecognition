import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPhotoComponent } from './list-photo/list-photo.component';
import { ListPhotoItemComponent } from './list-photo-item/list-photo-item.component';
import { ListAdjustmentComponent } from './list-adjustment/list-adjustment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListPhotoComponent,
    ListPhotoItemComponent,
    ListAdjustmentComponent
  ],
  exports: [
    ListPhotoComponent,
    ListPhotoItemComponent,
    ListAdjustmentComponent
  ]
})
export class SharedModule { }
