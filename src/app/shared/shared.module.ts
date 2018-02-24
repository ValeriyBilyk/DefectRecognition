import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPhotoComponent } from './list-photo/list-photo.component';
import { ListPhotoItemComponent } from './list-photo-item/list-photo-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListPhotoComponent,
    ListPhotoItemComponent
  ],
  exports: [
    ListPhotoComponent,
    ListPhotoItemComponent
  ]
})
export class SharedModule { }
